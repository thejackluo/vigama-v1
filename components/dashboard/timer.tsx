import Head from "next/head";
// Get more default next imports like this
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

// Chakra imports
import * as Jack from "@chakra-ui/react";
import { time } from "console";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Timer function
  const [totalTime, setTotalTime] = useState(0);
  const [liveTime, setLiveTime] = useState(0);
  const [timeRunning, setTimeRunning] = useState(false);

  const handleTimer = () => {};
  // End timer function

  return (
    <>
      <h1>Timer</h1>
      <div>
        <h2>You have worked for {totalTime} seconds</h2>
      </div>
      <Jack.Button colorScheme="pink" size="lg" onClick={handleTimer}>
        Start Timer
      </Jack.Button>
      {/* h2 text that fits the theme and shows the live time in seconds */}
      <div>
        <h2>LIVE: {liveTime} seconds</h2>
      </div>
    </>
  );
}
