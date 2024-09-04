import React, { useRef, useState, useEffect, useMemo } from 'react'
import styles from './styles.module.css'
import SkillCard from './SkillCard'



export default function Skills() {

    const skills = [
        { name: 'JavaScript', type: 'plain', colored: true },
        { name: 'TypeScript', type: 'plain', colored: true },
        { name: 'NodeJS', type: 'plain', colored: true },
        { name: 'React', type: 'plain', colored: true },
        { name: 'NextJS', type: 'plain', colored: false },
        { name: 'Express', type: 'original', colored: false },
        { name: 'Php', type: 'plain', colored: true },
        { name: 'Laravel', type: 'plain', colored: true },
        { name: 'Kotlin', type: 'plain', colored: true },
        { name: 'Java', type: 'plain', colored: true },
        { name: 'Swift', type: 'plain', colored: true },
        { name: 'Git', type: 'plain', colored: true },
        { name: 'Docker', type: 'plain', colored: true },
        { name: 'DigitalOcean', type: 'plain', colored: true },
        { name: 'MongoDB', type: 'plain', colored: true },
        { name: 'MySQL', type: 'plain', colored: true },
        { name: 'SQLite', type: 'plain', colored: true },
        { name: 'Firebase', type: 'plain', colored: true },
        { name: 'Figma', type: 'plain', colored: true },
        { name: 'HTML5', type: 'plain', colored: true },
        { name: 'CSS3', type: 'plain', colored: true },
        { name: 'Bootstrap', type: 'plain', colored: true },
    ]

    return (
        <div id='skills' className={styles.skills}>
            <div className={styles.skills__heading}>
                <h2>what i&apos;m good at</h2>
            </div>

            <div className={styles.skills__container} >
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill.name} type={skill.type} colored={skill.colored} />
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
    )
}
