"use client";

import React from "react";
import styles from "./styles.module.css";
import { Timeline, Text } from "@mantine/core";
import experiences from "../../../data/Experiences";

export default function Experiences() {
   const getDurationInWords = (startDate: Date, endDate: Date) => {
      const years = endDate.getFullYear() - startDate.getFullYear();
      const months = endDate.getMonth() - startDate.getMonth();

      let opString = [];

      if (years > 0) {
         opString.push(`${years} years`);
      }
      if (months > 0) {
         opString.push(`${months} months`);
      }

      return opString.join(" ");
   };

   return (
      <div id="experience" className={styles.experience}>
         <div className={styles.experience__heading}>
            <h2>experience</h2>
         </div>
         <div className={styles.experience__container}>
            <Timeline
               active={1}
               bulletSize={48 + 24}
               lineWidth={6}
               color="#ddd"
               className={styles.experience__timeline}
            >
               {experiences.map((experience, index) => (
                  <Timeline.Item
                     key={index}
                     title={
                        <Text className={styles.experience__title}>
                           {experience.title}
                        </Text>
                     }
                     bullet={experience.icon}
                  >
                     <Text className={styles.experience__company}>
                        {experience.company} - {experience.location}
                     </Text>
                     <Text className={styles.experience__date}>
                        {experience.startDate.toLocaleDateString("en-locale", {
                           month: "short",
                           year: "numeric",
                        })}
                        {" - "}
                        {experience.current
                           ? "Present"
                           : experience.endDate?.toLocaleDateString(
                                "en-locale",
                                {
                                   month: "short",
                                   year: "numeric",
                                }
                             )}
                        <Text>
                           {`(${getDurationInWords(
                              experience.startDate,
                              experience.endDate ?? new Date()
                           )})`}
                        </Text>
                     </Text>
                     {/* <Card shadow="xs" padding="md" radius="md">
                        {experience.description}
                     </Card> */}
                  </Timeline.Item>
               ))}
            </Timeline>
         </div>
      </div>
   );
}
