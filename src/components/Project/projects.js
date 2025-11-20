
import styles from "./projects.module.css";

export default function Projects() {
    return (
        <section>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsTitleDiv}>
                    <h1 className={styles.title}>Projects</h1>
                    <p className={styles.description}>I made a lot of projects, but these are the best projects I made so far.</p>
                </div>

                <div className={styles.projectsGrid}>
                    <div className={styles.projectCards}>
                        <div className={styles.projectCard}>
                            <div className={styles.imageDiv}>
                                <img draggable="false" src="/cards/seatcraft.png" alt="SeatCraft Project" className={styles.projectImage} />
                            </div>
                            <div className={styles.text}>
                                <h1 className={styles.seatcraft}>SeatCraft</h1>
                                <p className={styles.seatcraftD}>SeatCraft - A fully responsive, non-realistic business website — the biggest project I&apos;ve built so far. Designed in Figma and developed using React.js, Node.js, CSS, GSAP, and Stripe, with a validated contact form. It includes four pages: Home, About, Store, and Contact. This project reflects my ability to create visually engaging, interactive experiences that feel premium and modern.</p>
                                <div className={styles.bottomPart1}>
                                    <p className={styles.tags}>#react  #css  #gsap  #stripe  #nodejs  #contactform  #render</p>
                                    <div className={styles.buttonDiv1}>
                                        <a className={styles.link} href="https://seatcraft.onrender.com" target="_blank"><button className={styles.button}><span className={styles.span}>website</span></button></a>
                                        <a className={styles.link} href="https://www.figma.com/design/tCc7jraAxtOCJS7cOHEHLD/Mockups?node-id=13-2&t=PdIyHwxTP7d3uTcT-1" target="_blank"><button className={styles.button}><span className={styles.span}>design</span></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectCard}>
                            <div className={styles.imageDiv}>
                                <img src="/cards/rova.png" alt="Rova Project" className={styles.projectImage} />
                            </div>
                            <div className={styles.text}>
                                <h1 className={styles.rova}>Rova</h1>
                                <p className={styles.rovaD}>Rova - A fully responsive, non-realistic business website. Website was designed in Figma and developed using React.js, CSS, and GSAP. It includes four pages: Home, About, Store, and Contact. This project was built to show my further skills in front-end development and design integration.</p>
                                <div className={styles.bottomPart2}>
                                    <p className={styles.tags}>#react  #css  #gsap <br /> #contactform  #render  #scrub</p>
                                    <div className={styles.buttonDiv2}>
                                        <a className={styles.link} href="https://rova-motors.vercel.app" target="_blank"><button className={styles.button}><span className={styles.span}>website</span></button></a>
                                        <a className={styles.link} href="https://www.figma.com/design/xBh64IP4d29AhjI9Bxus8V/Rova?node-id=0-1&t=YDty4iXf7Ap6IxTF-1" target="_blank"><button className={styles.button}><span className={styles.span}>design</span></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectCard}>
                            <div className={styles.imageDiv}>
                                <img src="/cards/tintzone.png" alt="Tintzone Project" className={styles.projectImage} />
                            </div>
                            <div className={styles.text}>
                                <h1 className={styles.tintzone}>Tintzone</h1>
                                <p className={styles.tintzoneD}>Tint Zone is a modern, responsive website built for a window tinting company using Next.js, React.js, and CSS. It includes sections for services, about, and a contact form where visitors can send inquiries directly. The site was designed to be clean, fast, and mobile-friendly to help the business connect with customers easily.</p>
                                <div className={styles.bottomPart3}>
                                    <p className={styles.tags}>#bussinesswebsite  #react  #nextjs  #css  #contactform  #vercel</p>
                                    <div className={styles.buttonDiv3}>
                                        <a className={styles.link} href="https://tint-zone-beta.vercel.app" target="_blank"><button className={styles.button}><span className={styles.span}>website</span></button></a>
                                        <a className={styles.linkGithub} href="https://github.com/yeghishehak/TintZone"><img className={styles.githubIcon} src="other/github.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectCard}>
                            <div className={styles.imageDiv}>
                                <img src="/cards/golddrive.png" alt="golddrive Project" className={styles.projectImage} />
                            </div>
                            <div className={styles.text}>
                                <h1 className={styles.golddrive}>Gold drive</h1>
                                <p className={styles.golddriveD}>A responsive business website built with HTML, CSS, and JavaScript for all devices. It features a unique design that allows users to easily view and manage driving lesson information across all screen sizes. The interface is clean and user-friendly, making it simple for anyone to navigate.</p>
                                <div className={styles.bottomPart4}>
                                    <p className={styles.tags}>#drivinglessons  #html  #css  #javascript  #contactform  #vercel</p>
                                    <div className={styles.buttonDiv4}>
                                        <a className={styles.link} href="https://golddrive.vercel.app" target="_blank"><button className={styles.button}><span className={styles.span}>website</span></button></a>
                                        <a className={styles.linkGithub} href="https://github.com/yeghishehak/Gold-Drive"><img className={styles.githubIcon} src="other/github.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}