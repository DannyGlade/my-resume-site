import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'


export default function ContactCard({ name, link }) {
    return (
        <Link className={styles.contact_card} href={link} onClick={() => console.log("hi")} target='_blank'>
            <SocialIcon style={{ height: 50, width: 50 }} url={link} />
            <p>{name}</p>
        </Link>
    )
}
