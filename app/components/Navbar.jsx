
"use client";

import React, { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <nav className={[styles.navbar, menu ? styles.navbar__expanded : ''].join(' ')}>
                <div className={styles.navbar__top}>
                    <div className={styles.navbar__logo}>D/N</div>
                    <div className={styles.navbar__menu} onClick={toggleMenu}>
                        Menu
                    </div>
                </div>
                <div className={[styles.navbar__menu, menu ? styles.menu__expanded : styles.menu__collapsed].join(' ')} >

                    <div className={styles.navbar__menu_items}>
                        <a href="#skills" className={styles.navbar__menu_item}>Skills</a>
                        <a href="#experience" className={styles.navbar__menu_item}>Experience</a>
                        <a href="#projects" className={styles.navbar__menu_item}>Projects</a>
                        <a href="#contact" className={styles.navbar__menu_item}>Contact</a>
                    </div>
                    {/* <div className={styles.navbar__menu_items}>
                        <a href="#skills" className={styles.navbar__menu_item}>Skills</a>
                        <a href="#experience" className={styles.navbar__menu_item}>Experience</a>
                        <a href="#projects" className={styles.navbar__menu_item}>Projects</a>
                        <a href="#contact" className={styles.navbar__menu_item}>Contact</a>
                    </div> */}
                </div>
            </nav>
            {/* <nav className>
                <div style={{ color: 'white', fontSize: 20, fontFamily: 'Major Mono Display', fontWeight: '400', wordWrap: 'break-word' }}>D/N</div>
                <div style={{ paddingTop: 24, paddingBottom: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 28, display: 'flex' }}>
                    <div style={{ color: 'white', fontSize: 20, fontFamily: 'Source Code Pro', fontWeight: '400', wordWrap: 'break-word' }}>Skills</div>
                    <div style={{ color: 'white', fontSize: 20, fontFamily: 'Source Code Pro', fontWeight: '400', wordWrap: 'break-word' }}>Experience</div>
                    <div style={{ color: 'white', fontSize: 20, fontFamily: 'Source Code Pro', fontWeight: '400', wordWrap: 'break-word' }}>Projects</div>
                    <div style={{ color: 'white', fontSize: 20, fontFamily: 'Source Code Pro', fontWeight: '400', wordWrap: 'break-word' }}>Contact</div>
                </div>
            </nav> */}
        </>
    )
}
