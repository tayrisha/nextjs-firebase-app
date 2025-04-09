# App – Firebase Auth + Next.js + Tailwind CSS

A minimal authentication app built with:

- Firebase Authentication
- Next.js 15 App Router
- Tailwind CSS for styling
- Static export + deployment via Firebase Hosting

- ## Features

- User Registration & Login with Firebase Auth
- Home page with personalized greeting
- Logout button (clears session)
- Tailwind UI styling
- Firebase Hosting-ready static deployment

 ##  Prerequisite: Firebase Project Setup

Before running the app, you need to create a Firebase project and configure it for web use:

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add Project** and follow the steps
3.  After creating the project, go to **Project Settings → General**
4. Under **Your Apps**, click the `</>` (Web) icon to create a web app
5. Copy the Firebase configuration object — it contains:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`
6. Paste these into a new `.env.local` file (see next step)



##  Getting Started

###  Clone the Repository
git clone https://github.com/tayrisha/nextjs-firebase-app
cd babylon-website

 ###  Install Dependencies
npm install

  ### Add Environment Variables
Create a file called .env.local in the root and add your Firebase project credentials. See .env.example for a reference.

   ###  Start the Dev Server
npm run dev
Visit http://localhost:3000 in your browser.

  ###  Deployment — Firebase Hosting (Static Export)
Make sure you’ve installed the Firebase CLI:
npm install -g firebase-tools

And logged in:
firebase login

  ###  Deploy in One Command:
npm run deploy

