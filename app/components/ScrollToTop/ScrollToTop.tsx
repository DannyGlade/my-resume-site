import React, { useEffect } from "react";
import styles from "./ScrollToTop.module.css";
import { Button } from "@mantine/core";
import { PiCaretDoubleUpDuotone } from "react-icons/pi";

export default function ScrollToTop() {
   const handleScroll = () => {
      const scrollToTop = document.querySelector(`.${styles.scrollToTop}`);
      if (scrollToTop) {
         if (window.scrollY > 200) {
            scrollToTop.classList.add(styles.scrollToTopVisible);
         } else {
            scrollToTop.classList.remove(styles.scrollToTopVisible);
         }
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <div
         className={styles.scrollToTop}
         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
         <PiCaretDoubleUpDuotone size={30} />
      </div>
   );
}
