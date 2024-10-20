# Login Demo

Welcome to the **Login Demo**! This project showcases a simple, functional authentication flow using **React** and **Firebase**. Deployed live at: [tejas-logindemo.vercel.app](https://tejas-logindemo.vercel.app)

## Features

- **Authentication:** Sign up and log in using:
  - Email & Password
  - Third-party providers: **Google**, **GitHub**, **Twitter**, and **Yahoo**
- **User Interface:** Built with a combination of **Material UI** for components and **Tailwind CSS** for styling.
- **Routing:** There are four pages:
  1. **Landing Page:** Introduction and navigation.
  2. **Login Page:** Simple form to log in or redirect to third-party providers.
  3. **Sign Up Page:** Register with an email and password.
  4. **Dashboard:** A protected page visible only after logging in.

## Tech Stack

- **React**: Frontend framework.
- **Vite**: Fast build tool for development.
- **Firebase**: Backend for authentication and user management.
- **Material UI**: For responsive and accessible UI components.
- **Tailwind CSS**: Utility-first CSS framework for easy styling.

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/tejasnasa/Login-Page.git
```

2. **Navigate to the project directory**:

```bash
cd Login-Page
```

3. **Install dependencies:**

```bash
npm install
```

4. **Create Firebase App**

   Create a Firebase project and add your Firebase configuration to the project. You can find more about Firebase setup [here](https://firebase.google.com/docs/auth/web/start).

5. **Create a .env file and add your Firebase API credentials:**

```env
VITE_FIREBASE_API = your-api-key
VITE_SENDERID = your-sender-id
VITE_APPID = your-app-id
VITE_MEASUREID = your-measure-id
VITE_AUTHDOMAIN = your-auth-domain
VITE_PROJECTID = your-project-id
VITE_STORAGE_BUCKET = your-storage-bucket
```

6. **Start the development server:**

```bash
npm run dev
```

## How It Works

- **Sign Up**: New users can register with their email and password or log in via one of the supported third-party providers.
- **Login**: Existing users can log in using their credentials or via third-party providers.
- **Protected Routes**: Once logged in, users can access the Dashboard, which is restricted to authenticated users only.

## Live Demo

Check out the live version here: [Login Demo](https://tejas-logindemo.vercel.app/)

## Contact

For any questions or feedback, feel free to reach out!

- **Email**: [tejasnasa2005@gmail.com](mailto:tejasnasa2005@gmail.com)
- **Portfolio**: [tejasnasa.vercel.app](https://tejasnasa.vercel.app/)
- **GitHub**: [tejasnasa](https://github.com/tejasnasa)
