import React from 'react'
import styles from './styles.module.css'
import 'devicon/devicon.min.css'
import { Card } from '@mantine/core'

export default function SkillCard({ skill, type, colored, category }) {
    return (
        <Card className={[styles.skill_card, category].join(' ')}>
            <div className={styles.skill_card__icon}>
                <i className={`devicon-${skill.toLowerCase()}-${type} ${colored ? 'colored' : ''}`}></i>
            </div>
            <div className={styles.skill_card__name}>
                {skill}
            </div>
        </Card>
    )
}
