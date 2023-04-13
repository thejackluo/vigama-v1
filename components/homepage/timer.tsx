/*
  Name: timer.tsx
  Author: Jack Luo
  Description: This is a timer component that contains a timer module that can be used to time the user's study sessions.

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

import Head from "next/head";
import { Inter } from "next/font/google";
import { time } from "console";

// Component Imports

// State changes

// API routes

// Component Structure

const inter = Inter({ subsets: ["latin"] });

export default function Timer() {
  // States
  const [totalTime, setTotalTime] = useState(0);
  const [liveTime, setLiveTime] = useState(0);
  const [timeRunning, setTimeRunning] = useState(false);

  // Use effect to update the live time
  const handleTimer = () => {};

  return (
    <>
      <J.Card>
        <J.CardBody>
          <div>
            <J.Heading>Timer</J.Heading>
            <h2>You have worked for {totalTime} seconds</h2>
            <h2>LIVE: {liveTime} seconds</h2>
          </div>
          <J.Button colorScheme="pink" size="lg" onClick={handleTimer}>
            Start Timer
          </J.Button>
        </J.CardBody>
      </J.Card>
    </>
  );
}
