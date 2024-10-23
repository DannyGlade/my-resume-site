import React from "react";
import { PiSuitcaseSimpleFill, PiGraduationCapFill } from "react-icons/pi";
import { SiFreelancer } from "react-icons/si";
import styles from "./styles.module.css";

export type Experience = {
   title: string;
   company: string;
   description?: string;
   startDate: Date;
   endDate?: Date;
   current: boolean;
   location?: string;
   url?: string;
   icon?: React.ReactNode;
};

const experiences: Experience[] = [
   {
      title: "Full Stack Developer",
      company: "Freelancer",
      description:
         "I am a Full Stack Developer with experience in building web applications using NodeJS, Laravel, React and React Native.",
      startDate: new Date(Date.parse("04-01-2020")),
      current: true,
      location: "Canada",
      icon: <SiFreelancer size={36} className={styles.icon} />,
   },
   {
      title: "Mobile Application Development",
      company: "Fanshawe College",
      description:
         "I have completed a Mobile Application Development course at Fanshawe College.",
      startDate: new Date(Date.parse("09-01-2023")),
      current: true,
      location: "London, Canada",
      icon: <PiGraduationCapFill size={36} className={styles.icon} />,
   },
   {
      title: "Full Stack Web Developer",
      company: "KG Krunch Solutions",
      description:
         "I am a Full Stack Developer with experience in building web applications using NodeJS, Laravel, React and React Native.",
      startDate: new Date(Date.parse("12-01-2020")),
      current: false,
      endDate: new Date(Date.parse("09-01-2023")),
      location: "Surat, India",
      icon: <PiSuitcaseSimpleFill size={36} className={styles.icon} />,
   },
   {
      title: "PHP Developer Intern",
      company: "KG Krunch Solutions",
      description:
         "I have worked as a PHP Developer Intern and developed web applications using PHP.",
      startDate: new Date(Date.parse("06-01-2020")),
      current: false,
      endDate: new Date(Date.parse("11-01-2020")),
      location: "Surat, India",
      icon: <PiSuitcaseSimpleFill size={36} className={styles.icon} />,
   },
   // {
   //    title: "Computer Teacher",
   //    company: "ABC Computer Education",
   //    description:
   //       "I have worked as a Computer Teacher and taught computer programming to students.",
   //    startDate: new Date(Date.parse("04-01-2020")),
   //    current: false,
   //    endDate: new Date(Date.parse("04-01-2021")),
   //    location: "Surat, India",
   //    icon: <PiSuitcaseSimpleFill size={36} className={styles.icon} />,
   // },
   {
      title: "Bachelor of Computer Applications",
      company: "VNSGU (Veer Narmad South Gujarat University)",
      startDate: new Date(Date.parse("08-01-2019")),
      current: false,
      endDate: new Date(Date.parse("04-01-2022")),
      location: "Surat, India",
      icon: <PiGraduationCapFill size={36} className={styles.icon} />,
   },
   {
      title: "Assistant Computer Teacher",
      company: "ABC Computer Education",
      description:
         "I have worked as an Assistant Computer Teacher and taught computer programming to students.",
      startDate: new Date(Date.parse("11-01-2019")),
      current: false,
      endDate: new Date(Date.parse("05-01-2020")),
      location: "Surat, India",
      icon: <PiSuitcaseSimpleFill size={36} className={styles.icon} />,
   },
];

export default experiences;
