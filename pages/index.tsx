import Head from "next/head";
import { Sidebar } from "../components/sidebar";
import { Landing } from "../components/landing";
import { Login } from "../components/login";
import styles from "./index.module.css";

import { Raleway } from "@next/font/google";
const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Meow Mates | Tinder for Pets</title>
        <meta
          name="description"
          content="A Clone of Tinder meant to be designed for pets."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.tinder_main + " " + raleway.className}>
        <Sidebar />
        <Landing />
        {/* <Login /> */}
      </div>
    </>
  );
}
