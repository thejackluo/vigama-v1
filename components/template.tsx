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

// Component Imports
import Profile from "@/components/reusable/profile";

// State changes

// API routes

// Component Structure
export default function Home() {
  return (
    <>
      <h1>This is a template element, edit me to start working on it!</h1>
    </>
  );
}
