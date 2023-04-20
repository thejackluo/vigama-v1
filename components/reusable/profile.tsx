/*
  Name: profile.tsx
  Author: Jack Luo
  Description: This file contains the profile component, which is used to display the user's profile information.

  === Imports === 
  Next.js, React.js, Chakra, React Hooks

  
  === Style imports ===
  
  
  === Next imports ===


  === Component Imports ===
  
  
  === State changes ===


  === API routes ===
  Use the profile API route to fetch the user's profile information.


  === Component Structure ===


*/

// Default Imports (required for each file)
import { useState, useEffect } from "react"; // React Hooks
import * as J from "@chakra-ui/react"; // Chakra UI

// Next imports
import Head from "next/head";
import { Inter } from "next/font/google";

// Style imports
import { Box, Center, Heading, Text } from "@chakra-ui/react";

// Component Imports

// State changes

// API routes

// Component Structure
const inter = Inter({ subsets: ["latin"] });

export default function Profile() {
  // State variables

  // Get the user's profile information from the API route
  const [profile, setProfile] = useState({
    general: {
      id: 1,
      userid: "test",
      name: "test",
      description: "test",
    },

    game: {
      inventory: [],
      general: {
        level: 1,
        exp: 0,
        gold: 0,
        gems: 0,
        timecoins: 0,
      },
      stats: {
        health: 100,
        attack: 10,
        defense: 10,
        speed: 10,
        luck: 10,
      },
    },

    polytopia: {
      buildings: [
        { x: 1, y: 1, type: "test" },
        { x: 2, y: 2, type: "test" },
      ],
    },
  });

  // useEffect(() => {
  //   fetch("/api/profile_access")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProfile(data);
  //     });
  // }, []);

  return (
    <>
      <J.Card>
        {/* <J.CardHeader></J.CardHeader> */}
        <J.CardBody>
          <J.Box>
            <J.Center>
              <J.Heading size="md">
                Welcome back, {profile.general.userid}
              </J.Heading>
            </J.Center>
            <J.Center>
              <J.Text>You have been studying for XXX days!</J.Text>
            </J.Center>
            {/* Create a progress bar with text description and progress */}
            <J.Text>Gold: {profile.game.general.gold}</J.Text>
            <J.Progress value={profile.game.general.gold}></J.Progress>
            <J.Text>Level: {profile.game.general.level}</J.Text>
            <J.Progress value={profile.game.general.level}></J.Progress>
            <J.Text>XP: {profile.game.general.exp}</J.Text>
            <J.Progress value={profile.game.general.exp}></J.Progress>
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
    </>
  );
}
