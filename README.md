# Doc-Appoint 🩺

**Live Application:** [https://doc-appoint-five.vercel.app](https://doc-appoint-five.vercel.app) 

## Overview
Doc-Appoint is a full-stack Next.js application built to solve a real-world problem: the often clunky, frustrating process of booking a doctor's appointment online. This platform is engineered to feel incredibly intuitive for the patient, while maintaining the rigorous security standards required for healthcare applications. 

From discovering a specialist to securing a time slot, the application provides a fast, seamless, and secure user experience.

## Key Features & Engineering Highlights

- **Frictionless Booking Flow:** Features an interactive appointment modal and booking card system that reduces the steps a user needs to take to schedule a visit, significantly improving the overall UX.
- **Robust JWT Security:** Prioritizes data protection by integrating stateless JSON Web Tokens (JWT) alongside Better Auth and MongoDB. This ensures user sessions and API routes are strictly protected against unauthorized access.
- **Personalized Dashboard:** Includes a dynamic patient portal where users can easily manage, view, and update their upcoming or past medical appointments in real-time.
- **Responsive, Accessible UI:** Leverages Tailwind CSS and HeroUI to deliver custom, mobile-first components (such as intuitive doctor profile cards) that perform flawlessly across all device sizes.
- **Optimized for Scale and Speed:** Utilizes the Next.js App Router for server-side rendering and optimal routing, ensuring the application is highly performant and SEO-friendly.

## Tech Stack

- **Frontend:** Next.js (App Router), React 19, Tailwind CSS, HeroUI
- **Backend & Database:** Next.js API Routes, MongoDB
- **Authentication & Security:** Better Auth, JWT
- **Tooling:** ESLint, PostCSS

## Vercel environment variables

Before deploying, copy `.env.example` and add these values in the Vercel project settings:

- `NEXT_PUBLIC_SERVER_URL` — the deployed backend API URL
- `BETTER_AUTH_URL` — this app's auth endpoint, including `/api/auth`
- `NEXT_PUBLIC_AUTH_URL` — the same auth endpoint exposed to the browser
- `BETTER_AUTH_SECRET` — a long, random secret; do not commit it
- `MONGODB_URI` — the MongoDB connection string
- `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` — optional, but set both when Google sign-in is enabled

`BETTER_AUTH_SECRET` and `MONGODB_URI` must be present in the Vercel environment used for the build and deployment.
