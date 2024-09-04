"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./styles.module.css";

export default function Page() {
   return (
      <>
         <Navbar />
         <main className={styles.main}>
            <Hero />
            <Skills />
            <Contact />
         </main>
         <Footer />
      </>
   );
}
