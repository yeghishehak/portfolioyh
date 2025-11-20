import styles from './footer.module.css';

export default function Footer({ marginTop }) {
    return (
    <footer style={{ marginTop: marginTop }}>
        <div className={styles.footerDiv}>
            <div className={styles.svgDiv}>
                <svg className={styles.svg} viewBox="0 0 500 150">
                    <text
                        className={styles.text}
                        x="25%"
                        y="90"
                    >
                        Performer
                    </text>
                </svg>
            </div>

            <div className={styles.footerText}>
                <h1 className={styles.h1Y}>By Yeghishe</h1>
                <h1 className={styles.h1C}>© all rights reserved</h1>
            </div>
        </div>
    </footer>

    )
}