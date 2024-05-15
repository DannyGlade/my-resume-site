import React from 'react'
import styles from './styles.module.css'
import './style.css'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core';

export default function Hero() {


    return (
        <div className={styles.hero}>
            <div className={styles.hero__image_container}>
                <Image src="/DarshanNariyaMobile.png" alt="Hero" fill objectFit='contain' className={styles.hero__image} />
            </div>
            <div className={styles.hero__content}>
                <div className={styles.name__carousal}> Hey, I&apos;m &nbsp;
                    <Splide options={{ type: 'loop', direction: 'ttb', autoHeight: true, heightRatio: 1, pagination: false, arrows: false, autoplay: true, interval: 3000, gap: '0em', mediaQuery:'min', breakpoints: {320:{start: 0}, 1440: { start: 3 } } }}>
                        <SplideSlide tabIndex={0}>
                            <h1>Darshan</h1>
                        </SplideSlide>
                        <SplideSlide>
                            <h1>Developer</h1>
                        </SplideSlide>
                        <SplideSlide>
                            <h1>Designer</h1>
                        </SplideSlide>
                        <SplideSlide>
                            <h1>ui/ux Dev</h1>
                        </SplideSlide>
                        <SplideSlide>
                            <h1>Gamer</h1>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    )
}
