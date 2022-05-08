import styles from '../CSS/TextWave.module.css';

function TextWave(){
    return(
        <main className={styles.body_wave}>
            <div className={styles.wave}>
                <span className={styles.l_1}>C</span>
                <span className={styles.l_2}>a</span>
                <span className={styles.l_3}>r</span>
                <span className={styles.l_4}>r</span>
                <span className={styles.l_5}>e</span>
                <span className={styles.l_6}>g</span>
                <span className={styles.l_7}>a</span>
                <span className={styles.l_8}>n</span>
                <span className={styles.l_9}>d</span>
                <span className={styles.l_10}>o</span>
                <span className={styles.l_11}>.</span>
                <span className={styles.l_12}>.</span>
                <span className={styles.l_13}>.</span>
            </div>
            <div className={styles.waveFlip}>
                <span className={styles.l_1}>C</span>
                <span className={styles.l_2}>a</span>
                <span className={styles.l_3}>r</span>
                <span className={styles.l_4}>r</span>
                <span className={styles.l_5}>e</span>
                <span className={styles.l_6}>g</span>
                <span className={styles.l_7}>a</span>
                <span className={styles.l_8}>n</span>
                <span className={styles.l_9}>d</span>
                <span className={styles.l_10}>o</span>
                <span className={styles.l_11}>.</span>
                <span className={styles.l_12}>.</span>
                <span className={styles.l_13}>.</span>
            </div>
        </main>
    )
}

export default TextWave;