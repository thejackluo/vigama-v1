import Head from "next/head";
import Image from "next/image";
// Get more default next imports like this
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

// Chakra imports
import * as Jack from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* Header Element */}
      <div className={styles.description}>
        {/* <p>Welcome back&nbsp;{name}</p> */}
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
              className={styles.vigamaLogo}
              width={24}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </>
  );
}
