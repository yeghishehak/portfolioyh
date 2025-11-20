'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useRef } from "react";
import styles from "./herosection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Herosection() {
    const maskRef = useRef(null);

    // useEffect(() => {
    //     const mask = maskRef.current;
    //     gsap.fromTo(
    //         {}
    //     )

    // }) 

    return (
        <section>

            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>PERFORMER</h1>
                </div>
                <div className={styles.imageContainer}>
                    <img draggable="false" className={styles.image} src="/images/image.png" />
                </div>
            </div>
        </section>
    )
}