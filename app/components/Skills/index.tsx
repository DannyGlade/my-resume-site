"use client";
import React, { useRef, useState, useEffect, useMemo, use } from "react";
import styles from "./styles.module.css";
import SkillCard from "./SkillCard";
import { Button, useComputedColorScheme } from "@mantine/core";
import { MdFilterAlt } from "react-icons/md";
import type Isotope from "isotope-layout";
import skills, { FilterKey } from "../../../data/Skills";

export default function Skills() {
   const computedColorScheme = useComputedColorScheme("dark", {
      getInitialValueInEffect: true,
   });

   const isotope = useRef<Isotope | null>(null);

   const [filterKey, setFilterKey] = useState<FilterKey>(FilterKey["*"]);

   useEffect(() => {
      (async () => {
         const Isotope = (await import("isotope-layout")).default;
         await import("isotope-packery");

         setTimeout(() => {
            setIsotope(Isotope);
         }, 600);
      })();

      return () => {
         isotope.current?.destroy();
      };
   }, []);

   const setIsotope = (Isotope) => {
      try {
         if (typeof window === "undefined") return;
         isotope.current = new Isotope(`.${styles.skills__container}`, {
            itemSelector: `.${styles.skill_card}`,
            percentagePosition: true,
            layoutMode: "packery",
            packery: {
               gutter: 8,
            },
         });
         //  isotope.current.arrange({ filter: "*" });
      } catch (error) {
         //  if (error.message === "No layout mode: packery") {
         //     isotope.current = new Isotope(`.${styles.skills__container}`, {
         //        itemSelector: `.${styles.skill_card}`,
         //        percentagePosition: true,
         //     });
         //     console.error(error);
         //  }
      }
   };

   useEffect(() => {
      if (filterKey === FilterKey["*"]) {
         isotope.current?.arrange({ filter: "*" });
      } else {
         isotope.current?.arrange({ filter: `.${FilterKey[filterKey]}` });
      }
   }, [filterKey, isotope.current]);

   return (
      <div id="skills" className={styles.skills}>
         <div className={styles.skills__heading}>
            <h2>what i&apos;m good at</h2>
         </div>
         <div className={styles.skills__filters}>
            {/* <ButtonGroup> */}
            <Button
               variant="default"
               onClick={() => setFilterKey(FilterKey["*"])}
            >
               <MdFilterAlt style={{ minWidth: "2em", minHeight: "2em" }} />
            </Button>
            {Object.keys(FilterKey)
               .filter((key) => isNaN(Number(key)))
               .map((key) => (
                  <Button
                     key={key}
                     variant={
                        filterKey === FilterKey[key]
                           ? computedColorScheme === "dark"
                              ? "white"
                              : "dark"
                           : "default"
                     }
                     onClick={() => setFilterKey(FilterKey[key])}
                  >
                     {key === "*" ? "All" : key}
                  </Button>
               ))}
            {/* </ButtonGroup> */}
         </div>

         <div className={styles.skills__container}>
            {skills.map((skill, index) => (
               <SkillCard
                  key={index}
                  skill={skill.name}
                  type={skill.type}
                  colored={skill.colored}
                  category={
                     Array.isArray(skill.category)
                        ? skill.category.map((key) => FilterKey[key]).join(" ")
                        : FilterKey[skill.category]
                  }
               />
            ))}
         </div>

         {/* <Isotope options={{ itemSelector: '.grid-item', layoutMode: 'masonary' }}>
                <div className={styles.skills__grid}>
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </Isotope> */}

         {/* <div className={styles.skills__container}>
                <div className={styles.skills__filter}>
                    <button data-filter="*" className={styles.active} onClick={() => setFilterKey('*')}>All</button>

                    <button data-filter=".frontend" onClick={() => setFilterKey('frontend')}
                    >Frontend</button>
                    <button data-filter=".backend">Backend</button>
                    <button data-filter=".design">Design</button>
                </div>
                <div className={styles.skills__grid} ref={ele}>
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div> */}
      </div>
   );
}
