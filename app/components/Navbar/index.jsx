
"use client";

import React, { useState } from 'react'
import styles from './styles.module.css'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const scrollHandler = (e) => {
        e.preventDefault()
        scrollTo(e.target.dataset.to)
    }

    const scrollTo = (id) => {
        // console.log(id);
        const element = document.querySelector(id)
        // console.log(element);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        if (history.pushState) {
            history.pushState(null, null, id);
        }
        else {
            location.hash = id;
        }

    }

    return (
        <>
            <nav className={[styles.navbar, menu ? styles.navbar__expanded : ''].join(' ')}>
                <div className={styles.navbar__top}>
                    <div className={styles.navbar__logo}>D/N</div>
                    <div className={styles.navbar__menu} onClick={toggleMenu}>
                        {!menu ? "V" : "A"}
                    </div>
                </div>
                <div className={[styles.navbar__menu, menu ? styles.menu__expanded : styles.menu__collapsed].join(' ')} >

                    <div className={styles.navbar__menu_items}>
                        <a href="#" data-to="#skills" onClick={(e) => scrollHandler(e)} className={styles.navbar__menu_item}>Skills</a>
                        <a href="#" data-to="#experience" onClick={(e) => scrollHandler(e)} className={styles.navbar__menu_item}>Experience</a>
                        {/* <a href="#" data-to="#projects" onClick={(e) => scrollHandler(e)} className={styles.navbar__menu_item}>Projects</a> */}
                        <a href="#" data-to="#contact" onClick={(e) => scrollHandler(e)} className={styles.navbar__menu_item}>Contact</a>
                        <ThemeToggle className={styles.navbar__menu_item} />
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
