// "use client";s

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./styles.module.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Experiences from "./components/Experiences";

export default function Page() {
   return (
      <>
         <Navbar />
         <main className={styles.main}>
            <Hero />
            <Experiences />
            <Skills />
            <Contact />
         </main>
         <ScrollToTop />
         <Footer />
      </>
   );
}
