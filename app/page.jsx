"use client";

import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Skills from './components/Skills';
import styles from './styles.module.css'



export default function Page() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <Hero />
                <Skills />
            </main>
        </>
    )
}
