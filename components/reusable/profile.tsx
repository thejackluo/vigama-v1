/*
  Name: template.tsx
  Author: Jack Luo
  Description: This is a template file that contains a complete documentation on the specifications of the specific component (including imports, 
  api routes, state changes, etc)

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
import "@/styles/globals.css"; // Global CSS

import Head from "next/head";
import { Inter } from "next/font/google";

// Component Imports

// State changes

// API routes

// Component Structure
const inter = Inter({ subsets: ["latin"] });
const profile = {
  id: "1",
  uid: "stanfordmit",
  username: "jack",
  coins: 0,
  level: 1,
  xp: 0,
  streak: 1,
  xpToNextLevel: 100,
};

export default function Profile() {
  return (
    <J.Card>
      {/* <J.CardHeader></J.CardHeader> */}
      <J.CardBody>
        <J.Box>
          <J.Center>
            <J.Heading size="md">Welcome back, {profile.username}</J.Heading>
          </J.Center>
          <J.Center>
            <J.Text>You have been studying for {profile.streak} days!</J.Text>
          </J.Center>
          {/* Create a progress bar with text description and progress */}
          <J.Text>Coins: {profile.coins}</J.Text>
          <J.Progress value={profile.coins}></J.Progress>
          <J.Text>Level: {profile.level}</J.Text>
          <J.Progress value={profile.coins}></J.Progress>
          <J.Text>XP: {profile.xp}</J.Text>
          <J.Progress value={profile.coins}></J.Progress>
        </J.Box>
      </J.CardBody>
      <J.CardFooter>
        <J.Button variant="solid" colorScheme="blue">
          Profile
        </J.Button>
        <J.Button variant="ghost" colorScheme="blue">
          Settings
        </J.Button>
      </J.CardFooter>
    </J.Card>
  );
}
