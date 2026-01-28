# Application Pages

This document outlines the main pages available in the Study Savvy application and their corresponding routes.

## Core Pages

### 1. Home (`/`)
**Component:** `Index.tsx`
The landing page of the application. It provides an overview of the platform and directs users to key features like browsing notes or signing up.

### 2. Login (`/login`)
**Component:** `Login.tsx`
Allows existing users to access their accounts. Features a secure login form integrating with Supabase authentication.

### 3. Signup (`/signup`)
**Component:** `Signup.tsx`
The registration page for new users. Users can create an account to start buying or selling notes.

### 4. Browse Notes (`/browse`)
**Component:** `Browse.tsx`
The main marketplace area where users can discover study notes. Likely includes search and filtering capabilities to help students find relevant materials.

### 5. Note Detail (`/note/:id`)
**Component:** `NoteDetail.tsx`
**Route Parameter:** `:id` (The unique identifier of the note)
Displays specific details about a selected note. This page typically shows the title, description, price, preview, and options to purchase or download the note.

### 6. Seller Dashboard (`/sell`)
**Component:** `SellerDashboard.tsx`
A protected area for sellers to manage their uploaded notes, track sales, and potentially view analytics.

### 7. Not Found (`*`)
**Component:** `NotFound.tsx`
A 404 error page displayed when a user navigates to a non-existent route. Includes a link to guide users back to the home page.


### 8. Seller Notes (`/seller/notes`)
**Component:** `SellerNotes.tsx`
Allows sellers to view a list of their uploaded notes, their status (Active, Review, etc.), and perform actions like editing or deleting.

### 9. Upload Note (`/upload`)
**Component:** `UploadNote.tsx`
A form-based page for sellers to upload new study materials, providing details like title, subject, price, and the file itself.

### 10. About Us (`/about`)
**Component:** `About.tsx`
Provides information about the Study Savvy platform, its mission, and values.

### 11. Top Contributors (`/contributors`)
**Component:** `Contributors.tsx`
Showcases top-performing sellers/contributors to encourage community participation.

### 12. Shopping Cart (`/cart`)
**Component:** `Cart.tsx`
Displays the items a user intends to purchase, with a summary of costs and a checkout option.

### 13. User Profile (`/profile`)
**Component:** `Profile.tsx`
Allows users to manage their personal information, security settings (password), and view other account details.

## Navigation Structure

The application uses `react-router-dom` for client-side routing. The main `App.tsx` file defines the routing configuration, ensuring that the correct component is rendered based on the URL path.
