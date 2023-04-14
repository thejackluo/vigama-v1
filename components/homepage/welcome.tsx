/*
  Name: welcome.tsx
  Author: Jack Luo
  Description: This is a small welcome component that welcomes the user when the user signs in

  === Imports === 
  Next.js, React.js, Chakra, React Hooks

  
  === Style imports ===
  
  
  === Next imports ===


  === Component Imports ===
  
  
  === State changes ===


  === API routes ===


  === Component Structure ===


*/

// Default Imports (required for each file)
import { useState, useEffect } from "react"; // React Hooks
import * as J from "@chakra-ui/react"; // Chakra UI

// Next imports
import Image from "next/image";
import { Inter } from "next/font/google";

// Style imports
import styles from "./welcome.module.css";

// Component Imports

// State changes

// API routes

// Component Structure
const inter = Inter({ subsets: ["latin"] });

export default function Welcome() {
  return (
    <>
      <div>
        {/* Vigama by Vigama (logo) */}
        <J.Box className={styles.horizontal}>
          <J.Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            VIGAMA
          </J.Text>
          <a
            href="https://jack-luo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vigama.png"
              alt="Vigama Logo"
              width={24}
              height={24}
              priority
            />
          </a>
        </J.Box>

        {/* Welcome back message */}
        <div>
          <p>Welcome back&nbsp;INSERT NAME HERE</p>
        </div>
      </div>
    </>
  );
}
