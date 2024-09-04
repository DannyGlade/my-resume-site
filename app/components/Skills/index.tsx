import React, { useRef, useState, useEffect, useMemo, use } from "react";
import styles from "./styles.module.css";
import SkillCard from "./SkillCard";
import { Button, ButtonGroup, useComputedColorScheme } from "@mantine/core";
import { MdFilterAlt } from "react-icons/md";
import Isotope from "isotope-layout";
import "isotope-packery";

export type Skill = {
   name: string;
   type: string;
   colored: boolean;
   category: FilterKey[] | FilterKey;
};

export enum FilterKey {
   "*",
   "frontend",
   "backend",
   "design",
   "framework",
   "database",
   "tools",
   //    "other",
}

export default function Skills() {
   const computedColorScheme = useComputedColorScheme("dark", {
      getInitialValueInEffect: true,
   });
   const skills: Skill[] = [
      {
         name: "JavaScript",
         type: "plain",
         colored: true,
         category: FilterKey.frontend,
      },
      {
         name: "TypeScript",
         type: "plain",
         colored: true,
         category: FilterKey.frontend,
      },
      {
         name: "NodeJS",
         type: "plain",
         colored: true,
         category: FilterKey.backend,
      },
      {
         name: "React",
         type: "plain",
         colored: true,
         category: FilterKey.frontend,
      },
      {
         name: "NextJS",
         type: "plain",
         colored: false,
         category: [FilterKey.frontend, FilterKey.framework],
      },
      {
         name: "Express",
         type: "original",
         colored: false,
         category: [FilterKey.backend, FilterKey.framework],
      },
      {
         name: "Php",
         type: "plain",
         colored: true,
         category: FilterKey.backend,
      },
      {
         name: "Laravel",
         type: "plain",
         colored: true,
         category: [FilterKey.backend, FilterKey.framework],
      },
      {
         name: "Kotlin",
         type: "plain",
         colored: true,
         category: [FilterKey.frontend, FilterKey.backend],
      },
      {
         name: "Java",
         type: "plain",
         colored: true,
         category: [FilterKey.frontend, FilterKey.backend],
      },
      {
         name: "Swift",
         type: "plain",
         colored: true,
         category: [FilterKey.frontend, FilterKey.backend],
      },
      { name: "Git", type: "plain", colored: true, category: FilterKey.tools },
      {
         name: "Docker",
         type: "plain",
         colored: true,
         category: FilterKey.tools,
      },
      {
         name: "DigitalOcean",
         type: "plain",
         colored: true,
         category: FilterKey.tools,
      },
      {
         name: "MongoDB",
         type: "plain",
         colored: true,
         category: FilterKey.database,
      },
      {
         name: "MySQL",
         type: "plain",
         colored: true,
         category: FilterKey.database,
      },
      {
         name: "SQLite",
         type: "plain",
         colored: true,
         category: FilterKey.database,
      },
      {
         name: "Firebase",
         type: "plain",
         colored: true,
         category: FilterKey.database,
      },
      {
         name: "Figma",
         type: "plain",
         colored: true,
         category: FilterKey.design,
      },
      {
         name: "HTML5",
         type: "plain",
         colored: true,
         category: FilterKey.frontend,
      },
      {
         name: "CSS3",
         type: "plain",
         colored: true,
         category: FilterKey.frontend,
      },
      {
         name: "Bootstrap",
         type: "plain",
         colored: true,
         category: FilterKey.frontend,
      },
      {
         name: "TailwindCSS",
         type: "plain",
         colored: true,
         category: FilterKey.frontend,
      },
      {
         name: "SASS",
         type: "plain",
         colored: true,
         category: FilterKey.frontend,
      },
      {
         name: "MaterialUI",
         type: "plain",
         colored: true,
         category: FilterKey.frontend,
      },
   ];

   const isotope = useRef<Isotope | null>(null);

   const [filterKey, setFilterKey] = useState<FilterKey>(FilterKey["*"]);

   useEffect(() => {
      setTimeout(() => {
         setIsotope();
      }, 600);

      return () => {
         isotope.current?.destroy();
      };
   }, []);

   const setIsotope = () => {
      isotope.current = new Isotope(`.${styles.skills__container}`, {
         itemSelector: `.${styles.skill_card}`,
         percentagePosition: true,
         layoutMode: "packery",
         packery: {
            gutter: 8,
         },
      });
      isotope.current.arrange({ filter: "*" });
   };

   useEffect(() => {
      if (!isotope.current) {
         setIsotope();
      }

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
