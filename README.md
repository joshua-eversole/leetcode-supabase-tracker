# 🚀 LeetCode Spaced Repetition Tracker

This is a web application designed to help you study coding problems (like LeetCode) using the spaced repetition algorithm (an adaptation of SM-2).

The app allows you to add problems you've completed and will automatically schedule them for you to review at increasing intervals, helping you retain the knowledge for longer.

## ✨ Features

* **Add Problems:** A clean form to add new problems, including title, external ID (or URL), and difficulty.
* **Problem List:** A card-based list of all problems currently due for review.
* **Spaced Repetition Engine:** A built-in algorithm that calculates the next review date based on your 1-5 rating of how difficult the problem was.
* **Dynamic Styling:**
    * Problem cards are color-coded based on their difficulty (Easy, Medium, Hard).
    * Review buttons are colored (Red for "Fail," Green for "Easy") to make reviewing fast.
* **Smart "Solve" Link:** The "Solve Problem" button will correctly link to LeetCode if you provide an ID, or to a custom URL if you provide a full link.

## 💻 Tech Stack

* **Frontend:**
    * **React:** For building the user interface.
    * **Material-UI (MUI):** For a "prettier" UI with pre-built components like `<Card>`, `<TextField>`, and `<Button>`.
* **Backend:**
    * **Supabase:** Used for its powerful and easy-to-use PostgreSQL database.
    * **Supabase RLS:** Row Level Security is used to secure the database tables.

## 🛠️ Getting Started

To run this project locally:

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/joshua-eversole/leetcode-supabase-tracker.git](https://github.com/joshua-eversole/leetcode-supabase-tracker.git)
    cd leetcode-supabase-tracker
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Set Up Supabase**
    * Go to [supabase.com](https://supabase.com) and create a new project.
    * In the **SQL Editor**, run the SQL commands from the `schema.sql` file (or from the project's documentation) to create the `problems` and `reviews` tables.
    * Go to **Authentication > Policies** and create `SELECT` and `INSERT` policies for both tables (e.g., `with check ( true )` for the `anon` role).
    * Go to **Settings > API** and find your **Project URL** and