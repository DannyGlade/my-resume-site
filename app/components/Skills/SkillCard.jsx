import React from 'react'
import styles from './styles.module.css'
import 'devicon/devicon.min.css'

export default function SkillCard({ skill, type, colored}) {
    return (
        <div className={styles.skill_card}>
            <div className={styles.skill_card__icon}>
                <i className={`devicon-${skill.toLowerCase()}-${type} ${colored ? 'colored' : ''}`}></i>
            </div>
            <div className={styles.skill_card__name}>
                {skill}
            </div>
        </div>
    )
}
