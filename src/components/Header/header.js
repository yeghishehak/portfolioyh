'use client';

import styles from "./header.module.css"
import Link from "next/link"
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";


export default function Header() {
        const pathname = usePathname();
        const isHomePage = pathname === "/";
        

      const [isMenuOpen, setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
            setIsMenuOpen((prev) => !prev);
        };

        const sloganRef = useRef(null);
        const maskRef = useRef(null);
        const [mask, setMask] = useState(true);

        const text = "Perform beyond all limits.";
        const words = text.split(" ");

        useEffect(() => {
            if (!isHomePage) return; // exit early if not homepage

            const html = document.documentElement;
            const body = document.body;

            html.style.overflow = "hidden";
            html.style.width = "100%"; // prevents scrollbar space
            body.style.overflow = "hidden";
            body.style.width = "100%";

            gsap.fromTo(
            sloganRef.current.children, // each <span>
            {
                opacity: 0,
                x: 200,
                filter: "blur(10px)",
            },
            {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                duration: 2,
                ease: "power3.out",
                stagger: 0.1, // each word delayed
                onComplete: () => {
                    gsap.fromTo(
                        sloganRef.current.children,
                        {x: 0},
                        {x: -20, delay: 1.2, duration: 2}
                    )
                }
            }
            );

            gsap.fromTo(
                maskRef.current,
                {opacity: 1, filter: "blur(0px)"},
                {opacity: 0, filter: "blur(10px)", duration: 0.8, delay: 3.5, onStart: () => {
                    html.style.overflow = "";
                    html.style.width = "";
                    body.style.overflow = "";
                    body.style.width = "";
                },
                onComplete: () => {
                    setMask(false);
                }
            }
            )
        }, []);



    return (
        <header className={styles.header}>
        {isHomePage && mask && (
        <div ref={maskRef} className={styles.herosectionMask}>
            <h1 className={styles.slogan} ref={sloganRef}>
            {words.map((word, index) => (
                <span
                key={index}
                style={{ display: "inline-block", marginRight: "0.3em", opacity: 0 }}
                >
                {word}
                </span>
            ))}
            </h1>
        </div>
        )}


            <nav className={styles.headerTop}>
                <div className={styles.menuDiv} onClick={toggleMenu}>
                <button className={styles.buttonMenu}>
                    <div className={styles.iconWrapper}>
                    <img
                        src="./text-indent.svg"
                        alt="Menu Open"
                        className={`${styles.icon} ${!isMenuOpen ? styles.visible : styles.hidden}`}
                    />
                    <img
                        src="./text-outdent.svg"
                        alt="Menu Close"
                        className={`${styles.icon} ${isMenuOpen ? styles.visible : styles.hidden}`}
                    />
                    </div>
                </button>
                </div>

                <div className={styles.resumeDiv}>
                    <Link className={styles.link} href="./Yeghishe's Resume For Website.pdf" download><button className={styles.buttonR}>Resume</button></Link>
                </div>

                <div className={styles.buttonsCenter}>
                    <Link className={styles.link} href="/"><button className={styles.button}>home</button></Link>
                    <Link className={styles.link} href="/about"><button className={styles.button}>about</button></Link>
                    <Link className={styles.link} href="/projects"><button className={styles.button}>projects</button></Link>
                    <Link className={styles.link} href="/contact"><button className={styles.button}>contact</button></Link>
                </div>

                <div className={styles.yDiv}>
                    <h1 className={styles.y}>Y*</h1>
                </div>

                <div
                className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
                >
                    <div className={styles.linkContainer}><Link className={`${styles.link} ${styles.linkHomeMobile}`} href="/" onClick={toggleMenu}>home</Link></div>
                    <div className={styles.linkContainer}><Link className={`${styles.link} ${styles.linkAboutMobile}`} href="/about" onClick={toggleMenu}>about</Link></div>
                    <div className={styles.linkContainer}><Link className={`${styles.link} ${styles.linkProjectsMobile}`} href="/projects" onClick={toggleMenu}>projects</Link></div>
                    <div className={styles.linkContainer}><Link className={`${styles.link} ${styles.linkContactMobile}`} href="/contact" onClick={toggleMenu}>contact</Link></div>
                    <div className={styles.linkContainer}><Link className={`${styles.link} ${styles.linkContactMobile}`} href="/resume" onClick={toggleMenu}>resume</Link></div>
                </div>
            </nav>
            <div className={styles.dashedLine}></div>
        </header>
    )
}