import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core';

export default function Hero() {


    return (
        <div className={styles.hero}>
            <div className={styles.hero__image_container}>
                <Image src="/DarshanNariyaMobile.png" alt="Hero" fill objectFit='cover' />
            </div>
            <div className={styles.hero__content}>
                <div className={styles.name__carousal}> Hey, I'm &nbsp;
                    <Splide options={{ type: 'loop', direction: 'ttb', height: '10em', autoHeight: true, pagination: false, arrows: false, autoplay: true, interval: 3000 }}>
                        <SplideSlide>
                            <h1>Darshan</h1>
                        </SplideSlide>
                        <SplideSlide>
                            <h1>Developer</h1>
                        </SplideSlide>
                        <SplideSlide>
                            <h1>Designer</h1>
                        </SplideSlide>
                        <SplideSlide>
                            <h1>Creator</h1>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    )
}
