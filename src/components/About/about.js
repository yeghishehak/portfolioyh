"use client";

import styles from './about.module.css';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function About({marginTop}) {

    const skillsListLeft = useRef(null);
    const skillsListRight = useRef(null);

    useEffect(() => {
        // LEFT SIDE
        gsap.fromTo(
            Array.from(skillsListLeft.current.children), // make a real array
            { opacity: 0, filter: "blur(10px)", x: -10 },
            {
                opacity: 1,
                filter: "blur(0px)",
                x: 10,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: skillsListLeft.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // RIGHT SIDE
        gsap.fromTo(
            Array.from(skillsListRight.current.children),
            { opacity: 0, filter: "blur(10px)", x: -10 },
            {
                opacity: 1,
                filter: "blur(0px)",
                x: 0,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.4,
                scrollTrigger: {
                    trigger: skillsListRight.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <section style={{marginTop: marginTop}}>
            <div className={styles.aboutSection}>

                <div className={styles.aboutHeading}>
                    <h1 className={styles.title}>About</h1>
                    <p className={styles.description}><i>My name is Yeghishe Hakobyan, and I am a self-taught full-stack developer. Below, I show you what I learned, what I am currently learning.</i></p>
                </div>

                <div className={styles.skillsContainer}>

                    <div className={styles.skillsContainerLeft}>
                        <h2 className={styles.developer}>Developer</h2>
                        <div ref={skillsListLeft} className={styles.skillsListLeft}>
                            <img draggable="false" className={styles.skillIcon} src="/development/vsc.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/development/html5.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/development/css.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/development/javascript.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/development/react.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/development/nextdotjs.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/development/nodedotjs.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/development/gsap.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/development/mongodb.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/development/github.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/development/vercel.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/development/render.svg" />
                        </div>
                    </div>

                    <div className={styles.vLine}></div>

                    <div className={styles.skillsContainerRight}>
                        <h2 className={styles.designer}>Designer <br/> (Exploring)</h2>
                        <div ref={skillsListRight} className={styles.skillsListRight}>
                            <img draggable="false" className={styles.skillIcon} src="/design/blender.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/design/figma.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/design/ui.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/design/ux.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/design/after-effects.svg" />
                            <img draggable="false" className={styles.skillIcon} src="/design/photoshop.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}