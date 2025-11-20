import styles from './about.module.css';

export default function About() {
    return (
        <section>
            <div className={styles.aboutSection}>

                <div className={styles.aboutHeading}>
                    <h1 className={styles.title}>About</h1>
                    <p className={styles.description}><i>My name is Yeghishe Hakobyan, and I am a self-taught full-stack developer. Below, I show you what I learned, what I am currently learning.</i></p>
                </div>

                <div className={styles.skillsContainer}>

                    <div className={styles.skillsContainerLeft}>
                        <h2 className={styles.developer}>Developer</h2>
                        <div className={styles.skillsListLeft}>
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
                        <div className={styles.skillsListRight}>
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