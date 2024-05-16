import React, { useRef, useState, useEffect, useMemo } from 'react'
import styles from './styles.module.css'
import SkillCard from './SkillCard'



export default function Skills() {

    const skills = [
        { name: 'HTML5', type: 'plain' },
        { name: 'CSS3', type: 'plain' },
        { name: 'JavaScript', type: 'plain' },
        { name: 'TypeScript', type: 'plain' },
        { name: 'NodeJS', type: 'plain' },
        { name: 'React', type: 'plain' },
        { name: 'NextJS', type: 'plain' },
        { name: 'Express', type: 'original' },
        { name: 'MongoDB', type: 'plain' },
        { name: 'Firebase', type: 'plain' },
        { name: 'Figma', type: 'plain' },
        { name: 'XD', type: 'plain' },
        { name: 'Photoshop', type: 'plain' },
        { name: 'Illustrator', type: 'plain' },
        { name: 'Bootstrap', type: 'plain' },
        { name: 'TailwindCSS', type: 'plain' },
        { name: 'MaterialUI', type: 'plain' },
        { name: 'Sqlite', type: 'plain' }
    ]

    return (
        <div id='skills' className={styles.skills}>
            <div className={styles.skills__heading}>
                <h2>what i&apos;m good at</h2>
            </div>

            <div className={styles.skills__container} >
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill.name} type={skill.type} />
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
