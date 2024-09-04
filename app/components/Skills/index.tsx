import React, { useRef, useState, useEffect, useMemo } from "react";
import styles from "./styles.module.css";
import SkillCard from "./SkillCard";
import { type } from "os";

export type Skill = {
   name: string;
   type: string;
   colored: boolean;
   category?:
      | "frontend"
      | "backend"
      | "frontend-backend"
      | "design"
      | "framework"
      | "database"
      | "tools"
      | "other";
};

export default function Skills() {
   const skills: Skill[] = [
      {
         name: "JavaScript",
         type: "plain",
         colored: true,
         category: "frontend",
      },
      {
         name: "TypeScript",
         type: "plain",
         colored: true,
         category: "frontend",
      },
      { name: "NodeJS", type: "plain", colored: true, category: "backend" },
      { name: "React", type: "plain", colored: true, category: "frontend" },
      { name: "NextJS", type: "plain", colored: false, category: "frontend" },
      {
         name: "Express",
         type: "original",
         colored: false,
         category: "backend",
      },
      { name: "Php", type: "plain", colored: true, category: "backend" },
      { name: "Laravel", type: "plain", colored: true, category: "backend" },
      {
         name: "Kotlin",
         type: "plain",
         colored: true,
         category: "frontend-backend",
      },
      {
         name: "Java",
         type: "plain",
         colored: true,
         category: "frontend-backend",
      },
      {
         name: "Swift",
         type: "plain",
         colored: true,
         category: "frontend-backend",
      },
      { name: "Git", type: "plain", colored: true, category: "tools" },
      { name: "Docker", type: "plain", colored: true, category: "tools" },
      { name: "DigitalOcean", type: "plain", colored: true, category: "tools" },
      { name: "MongoDB", type: "plain", colored: true, category: "database" },
      { name: "MySQL", type: "plain", colored: true, category: "database" },
      { name: "SQLite", type: "plain", colored: true, category: "database" },
      { name: "Firebase", type: "plain", colored: true, category: "database" },
      { name: "Figma", type: "plain", colored: true, category: "design" },
      { name: "HTML5", type: "plain", colored: true, category: "frontend" },
      { name: "CSS3", type: "plain", colored: true, category: "frontend" },
      { name: "Bootstrap", type: "plain", colored: true, category: "frontend" },
      {
         name: "TailwindCSS",
         type: "plain",
         colored: true,
         category: "frontend",
      },
      { name: "SASS", type: "plain", colored: true, category: "frontend" },
      {
         name: "MaterialUI",
         type: "plain",
         colored: true,
         category: "frontend",
      },
   ];

   const [isotope, setIsotope] = useState(null);

   return (
      <div id="skills" className={styles.skills}>
         <div className={styles.skills__heading}>
            <h2>what i&apos;m good at</h2>
         </div>

         <div className={styles.skills__container}>
            {skills.map((skill, index) => (
               <SkillCard
                  key={index}
                  skill={skill.name}
                  type={skill.type}
                  colored={skill.colored}
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
