import Head from "next/head";
// Get more default next imports like this
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

// Chakra imports
import * as Jack from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import * as J from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

/*
  Design profile schema for the profile page

  1. Basic profile information

  Name
  Coins
  Level
  XP
  XP to next level


*/

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
    <>
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
    </>
  );
}
