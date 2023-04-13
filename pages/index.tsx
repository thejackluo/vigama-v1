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


*/

// Default Imports (required for each file)
import * as N from "next"; // Next.js
import { useState, useEffect } from "react"; // React Hooks
import * as J from "@chakra-ui/react"; // Chakra UI
import styles from "@/styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

// Component Imports
import Profile from "@/components/reusable/profile";

// State changes

// API routes

// Component Structure
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // User variable
  const [name, setName] = useState("Jack Luo");

  // Function for handling checking off a task
  const handleCheckTask = () => {
    /*
      1. Get the value of the task through a task algorithm
      2. Calculate the total gold
      3. Calculate the total XP
    */
  };

  /*
    Algorithm for calculating coins for a task
  */

  /*
    Modules for the task list
    
    1. Task list
    2. Task list item
    
    For the task list item, there will be a checkbox, a text, and a delete button
  */

  return (
    <>
      <Head>
        {/* Not important to update this */}
        <title>Vigama</title>
        <meta
          name="description"
          content="Revolutionary AI Assistant to help reach your personal goals"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vigama.png" />
      </Head>
      <main className={styles.main}>
        {/* Main Application Start */}
        <div>
          <div className={styles.center}>
            <J.Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              Welcome to your task list
            </J.Text>
          </div>
          <Profile />
        </div>

        {/* Main Application End */}

        <div className={styles.grid}></div>
      </main>
    </>
  );
}
