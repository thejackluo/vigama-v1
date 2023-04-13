/*
  Name: index.tsx
  Author: Jack Luo
  Description: This is the home page of the application

  === Imports === 
  Next.js, React.js, Chakra, React Hooks

  === Component Imports ===
  
  
  === State changes ===


  === API routes ===


  === Component Structure ===
  The Home page should be a general summary of the application which includes the following:
  1. A navigation bar that helps you access different pages (Detailed Dashboard, Resources, Settings, Study Session, etc)
     a). A welcome message that greets the user and displays their username (IP) (From welcome.tsx)
  2. A profile section that displays the user's profile information (IP) (From profile.tsx)
  3. A study session to do your work
     a). A timer to keep track of your study session (IP) (From timer.tsx)
  4. A task list to keep track of your tasks (IP) (From tasklist.tsx)
  5. A more detailed section that describes the resources you have in detail (as a summary of the resources page)
     a). A section that displays the user's resources (IP) (From resources.tsx)
*/

// Default Imports (required for each file)
import * as N from "next"; // Next.js
import { useState, useEffect } from "react"; // React Hooks
import * as J from "@chakra-ui/react"; // Chakra UI
import styles from "@/styles/Index.module.css";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

// Component Imports
import Profile from "@/components/reusable/profile";
import Welcome from "@/components/homepage/welcome";
import Timer from "@/components/homepage/timer";

// State changes

// API routes

// Component Structure
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // User variable
  const [name, setName] = useState("Jack Luo");

  return (
    <>
      <Head>
        <title>Vigama</title>
        <meta
          name="description"
          content="Revolutionary AI Assistant to help reach your personal goals"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vigama.png" />
      </Head>
      <main className={styles.main}>
        {/* Header (Includes nav bar and welcome message and profile) */}
        <header>
          {/* Nar Bar */}
          <nav></nav>
          {/* Welcome and Profile */}
          <div>
            <Welcome />
            <Profile />
          </div>
        </header>

        {/* Main section (Include study session and task list) */}
        <main>
          <Timer />
        </main>
      </main>
    </>
  );
}
