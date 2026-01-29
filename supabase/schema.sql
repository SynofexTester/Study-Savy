-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- 1. ENUMS
create type user_role as enum ('admin', 'buyer', 'seller');
create type order_status as enum ('pending', 'accepted', 'in_progress', 'revision', 'completed', 'cancelled', 'disputed');
create type payment_status as enum ('pending', 'completed', 'failed', 'refunded');

-- 2. PROFILES (Extends auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text not null,
  role user_role default 'buyer',
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. SELLER PROFILES (Extra info for sellers)
create table public.seller_profiles (
  id uuid references public.profiles(id) on delete cascade not null primary key,
  bio text,
  skills text[],
  university text,
  is_verified boolean default false,
  rating numeric(3,2) default 0,
  total_reviews integer default 0,
  total_earnings numeric(10,2) default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. BUYER PROFILES (Extra info for buyers, e.g. education level)
create table public.buyer_profiles (
  id uuid references public.profiles(id) on delete cascade not null primary key,
  education_level text,
  interests text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. WALLETS
create table public.wallets (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null unique,
  balance numeric(10,2) default 0.00 check (balance >= 0),
  pending_clearance numeric(10,2) default 0.00,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. CATEGORIES
create table public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null unique,
  slug text not null unique,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 7. SERVICES (Gigs/Notes)
create table public.services (
  id uuid default uuid_generate_v4() primary key,
  seller_id uuid references public.profiles(id) on delete cascade not null,
  category_id uuid references public.categories(id),
  title text not null,
  description text,
  price numeric(10,2) not null check (price >= 0),
  delivery_days integer default 1,
  images text[],
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 8. ORDERS
create table public.orders (
  id uuid default uuid_generate_v4() primary key,
  buyer_id uuid references public.profiles(id) on delete set null not null,
  seller_id uuid references public.profiles(id) on delete set null not null,
  service_id uuid references public.services(id) on delete set null,
  status order_status default 'pending',
  total_price numeric(10,2) not null,
  deadline timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 9. REVIEWS
create table public.reviews (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) on delete cascade not null unique,
  reviewer_id uuid references public.profiles(id) on delete cascade not null,
  reviewee_id uuid references public.profiles(id) on delete cascade not null,
  rating integer check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 10. CONVERSATIONS & MESSAGES
create table public.conversations (
  id uuid default uuid_generate_v4() primary key,
  participant1_id uuid references public.profiles(id) on delete cascade not null,
  participant2_id uuid references public.profiles(id) on delete cascade not null,
  last_message_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(participant1_id, participant2_id)
);

create table public.messages (
  id uuid default uuid_generate_v4() primary key,
  conversation_id uuid references public.conversations(id) on delete cascade not null,
  sender_id uuid references public.profiles(id) on delete cascade not null,
  content text,
  is_read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 11. TRANSACTIONS
create table public.transactions (
  id uuid default uuid_generate_v4() primary key,
  wallet_id uuid references public.wallets(id) on delete cascade not null,
  amount numeric(10,2) not null,
  type text not null, -- 'deposit', 'withdrawal', 'payment', 'earning'
  status payment_status default 'completed',
  reference_id uuid, -- link to order_id or external payment id
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);


-- 12. NOTIFICATIONS
create table public.notifications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  message text not null,
  type text not null, -- 'order', 'message', 'payment', 'system'
  is_read boolean default false,
  link text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 13. SUPPORT TICKETS
create table public.support_tickets (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete set null,
  subject text not null,
  description text not null,
  status text default 'open', -- 'open', 'in_progress', 'resolved', 'closed'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 14. AI REQUESTS (For future AI modules)
create table public.ai_requests (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  request_type text not null, -- 'plagiarism_check', 'study_suggestion', 'content_improvement'
  input_data text,
  output_result text,
  status text default 'pending', -- 'pending', 'processing', 'completed', 'failed'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 15. ORDER ITEMS (Refactoring Orders to support multiple items/files)
create table public.order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) on delete cascade not null,
  service_title text not null, -- Snapshot of title at time of purchase
  price numeric(10,2) not null,
  quantity integer default 1,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 16. ORDER ATTACHMENTS (File Management)
create table public.order_attachments (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) on delete cascade not null,
  uploader_id uuid references public.profiles(id) on delete set null,
  file_url text not null,
  file_name text not null,
  file_type text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS for New Tables
alter table public.notifications enable row level security;
alter table public.support_tickets enable row level security;
alter table public.ai_requests enable row level security;
alter table public.order_items enable row level security;
alter table public.order_attachments enable row level security;

-- Policies for New Tables
create policy "Users can view own notifications." on public.notifications for select using (auth.uid() = user_id);
create policy "Users can view own support tickets." on public.support_tickets for select using (auth.uid() = user_id);
create policy "Users can view own AI requests." on public.ai_requests for select using (auth.uid() = user_id);
create policy "Order items viewable by order participants." on public.order_items for select using (
  exists (select 1 from public.orders where id = order_id and (buyer_id = auth.uid() or seller_id = auth.uid()))
);
create policy "Attachments viewable by order participants." on public.order_attachments for select using (
  exists (select 1 from public.orders where id = order_id and (buyer_id = auth.uid() or seller_id = auth.uid()))
);
alter table public.profiles enable row level security;
alter table public.seller_profiles enable row level security;
alter table public.buyer_profiles enable row level security;
alter table public.wallets enable row level security;
alter table public.categories enable row level security;
alter table public.services enable row level security;
alter table public.orders enable row level security;
alter table public.reviews enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;
alter table public.transactions enable row level security;

-- POLICIES

-- Profiles: Public read, Self update
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

-- Seller Profiles: Public read, Self update
create policy "Seller profiles are viewable by everyone." on public.seller_profiles for select using (true);
create policy "Sellers can update own profile." on public.seller_profiles for update using (auth.uid() = id);

-- Categories: Public read, Admin write (Admin policies omitted for MVP brevity, assum seed script)
create policy "Categories are viewable by everyone." on public.categories for select using (true);

-- Services: Public read, Seller write
create policy "Services are viewable by everyone." on public.services for select using (true);
create policy "Sellers can insert own services." on public.services for insert with check (auth.uid() = seller_id);
create policy "Sellers can update own services." on public.services for update using (auth.uid() = seller_id);
create policy "Sellers can delete own services." on public.services for delete using (auth.uid() = seller_id);

-- Orders: Buyer and Seller can view
create policy "Users can view their own orders." on public.orders for select using (auth.uid() = buyer_id or auth.uid() = seller_id);
create policy "Buyers can create orders." on public.orders for insert with check (auth.uid() = buyer_id);

-- Wallets: Owner view only
create policy "Users can view own wallet." on public.wallets for select using (auth.uid() = user_id);

-- Messages: Participants view
create policy "Users can view conversations they are in." on public.conversations for select using (auth.uid() = participant1_id or auth.uid() = participant2_id);
create policy "Users can view messages in their conversations." on public.messages for select using (
  exists (
    select 1 from public.conversations
    where id = messages.conversation_id
    and (participant1_id = auth.uid() or participant2_id = auth.uid())
  )
);
create policy "Users can insert messages." on public.messages for insert with check (auth.uid() = sender_id);


-- TRIGGERS & FUNCTIONS

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  
  -- Create empty wallet
  insert into public.wallets (user_id) values (new.id);

  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call handle_new_user on auth.users insert
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- SEED DATA (Categories)
insert into public.categories (name, slug, description) values
('Mathematics', 'mathematics', 'Calculus, Algebra, Statistics'),
('Physics', 'physics', 'Mechanics, Quantum, Thermodynamics'),
('Computer Science', 'computer-science', 'Programming, AI, Data Science'),
('Engineering', 'engineering', 'Civil, Mechanical, Electrical'),
('Business', 'business', 'Finance, Accounting, Marketing'),
('Law', 'law', 'Intl Law, Corporate Law'),
('Medical', 'medical', 'Anatomy, Pharmacy, Nursing');
