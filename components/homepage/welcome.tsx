/*
  Name: welcome.tsx
  Author: Jack Luo
  Description: This is a small welcome component that welcomes the user when the user signs in

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

import Image from "next/image";
import { Inter } from "next/font/google";

// Component Imports

// State changes

// API routes

// Component Structure
const inter = Inter({ subsets: ["latin"] });

export default function Welcome() {
  return (
    <>
      {/* Header Element */}
      <div>
        <J.Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          VIGAMA
        </J.Text>
        <div>
          <a
            href="https://jack-luo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vigama.png"
              alt="Vigama Logo"
              width={24}
              height={24}
              priority
            />
          </a>
        </div>

        {/* Old Welcome back message */}
        {/* <p>Welcome back&nbsp;{name}</p> */}
      </div>
    </>
  );
}
