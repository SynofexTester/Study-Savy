# How to Setup Backend (Supabase)

This guide will help you connect your React frontend to a real Supabase backend.

## 1. Create Supabase Project
1.  Go to [Supabase.com](https://supabase.com) and sign in.
2.  Click **"New Project"**.
3.  Choose your organization, give it a name (e.g., `StudySavvy`), and set a database password.
4.  Wait for the project to provision.

## 2. Database Setup (Run Scripts)
1.  In your Supabase Dashboard, go to the **SQL Editor** (icon looking like a terminal `[>_]`).
2.  Click **"New Query"**.
3.  Open the file `supabase/schema.sql` from this project code.
4.  Copy all the content from `schema.sql`.
5.  Paste it into the Supabase SQL Editor.
6.  Click **Run** (Green button).
    *   *This will create all the necessary tables (Profiles, Orders, Services, etc.) and security policies.*

## 3. Connect Frontend
1.  In Supabase Dashboard, go to **Settings (Gear icon) -> API**.
2.  Copy the **Project URL**.
3.  Copy the **anon** public key.
4.  Open `.env` file in your project root.
5.  Paste the values:
    ```env
    VITE_SUPABASE_URL=https://your-project-id.supabase.co
    VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInRYW5...
    ```

## 4. Auth Configuration
1.  In Supabase Dashboard, go to **Authentication -> Providers**.
2.  Ensure **Email** is enabled.
3.  (Optional) Disable "Confirm email" if you want quicker testing during development (Auth -> Providers -> Email -> Confirm email).

## 5. Stripe Payment Setup
1.  Go to [Stripe.com](https://stripe.com) and sign up/login.
2.  Navigate to **Developers -> API keys**.
3.  Copy the **Publishable Key** (starts with `pk_test_...`).
4.  Copy the **Secret Key** (starts with `sk_test_...`).
5.  Add them to your `.env` file:
    ```env
    VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
    # Note: Secret Key should ONLY be used in Supabase Edge Functions, NOT in frontend code
    SUPABASE_STRIPE_SECRET_KEY=sk_test_...
    ```

## 6. Testing
1.  Restart your development server: `npm run dev`.
2.  Try to Sign Up.
    *   *Check Supabase Table Editor -> `profiles`: You should see a new row.*
    *   *Check Supabase Table Editor -> `wallets`: You should see a new wallet row.*

---

## 📂 Project Structure
*   `src/lib/supabase.ts`: The connection client.
*   `supabase/schema.sql`: The master database script.
