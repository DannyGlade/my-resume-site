import React from 'react'
import styles from './styles.module.css'
import ContactCard from './ContactCard'

export default function Contact() {

    const contacts = [
        {
            name: 'Email',
            link: 'mailto:darshannariya12@gmail.com',
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/darshan-nariya/',
        },
        {
            name: 'GitHub',
            link: 'https://github.com/dannyglade'
        }
    ]

    return (
        <div id='contact' className={styles.contact}>
            <div className={styles.contact__heading}>
                <h2>say hi!...</h2>
            </div>
            <div className={styles.contact__container}>
                {contacts.map((contact, index) => (
                    <ContactCard key={index} name={contact.name} link={contact.link} />
                ))}
            </div>

        </div>
    )
}
