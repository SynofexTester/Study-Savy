# Study Savvy

Study Savvy is a comprehensive platform designed for sharing and discovering study notes. It connects students and learners, allowing them to browse a vast collection of notes, upload their own study materials, and even sell them.

## Features

-   **Browse Notes**: Explore a wide variety of study notes across different subjects.
-   **User Authentication**: Secure signup and login functionality.
-   **Seller Dashboard**: A dedicated dashboard for creators to manage their note sales.
-   **Note Details**: Detailed view of each note with descriptions and purchase options.
-   **Responsive Design**: Built to work seamlessly on desktops, tablets, and mobile devices.

## Tech Stack

This project is built using the following technologies:

-   **Frontend Framework**: React
-   **Build Tool**: Vite
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **UI Components**: shadcn/ui
-   **Backend/Database**: Superbase (via `@supabase/supabase-js`)
-   **State Management**: React Query (`@tanstack/react-query`)
-   **Routing**: React Router (`react-router-dom`)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js & npm installed on your machine.
[Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

1.  Clone the repository:
    ```sh
    git clone <YOUR_GIT_URL>
    ```

2.  Navigate to the project directory:
    ```sh
    cd study-savvy
    ```

3.  Install dependencies:
    ```sh
    npm install
    ```

4.  Start the development server:
    ```sh
    npm run dev
    ```

## Project Structure

-   `src/pages`: Contains the main page components (Index, Login, Signup, Browse, NoteDetail, SellerDashboard).
-   `src/components`: Reusable UI components.
-   `src/hooks`: Custom React hooks.
-   `src/lib`: Utility functions and configurations.
-   `src/integrations`: External service integrations (e.g., Supabase).

## Deployment

To deploy this project, you can build the production assets:

```sh
npm run build
```

Then preview the production build:

```sh
npm run preview
```
