import { useEffect, useState } from 'react';
import styles from '../CSS/EyesLooking.module.css';

function EyesLooking() {
    function movEyes(e){
            let eye = document.querySelectorAll('i');
            let eyes = [document.getElementById('eye1'), 
                        document.getElementById('eye2'), 
                        document.getElementById('eye3'),
                        document.getElementById('eye4')]

            eyes.forEach((item) => {
                let x = (item.getBoundingClientRect().left) + (item.clientWidth / 2);
                let y = (item.getBoundingClientRect().top) + (item.clientHeight / 2);
                let radian = Math.atan2(e.clientX - x, e.clientY - y);
                let rot =  Math.round((radian * (180 / Math.PI) * -1) + 270);
                item.style.transform = `rotate(${rot}deg)`;
        })
    }
    function movEyesOut(e){
        let eye = document.querySelectorAll('i');
        let eyes = [document.getElementById('eye1'), 
                    document.getElementById('eye2'), 
                    document.getElementById('eye3'),
                    document.getElementById('eye4')]

        eyes.forEach((item) => {
            item.style.transform = `rotate(${0}deg)`;
        })
    }

    return(
        <main className={styles.body_eyesLooking} onMouseMove={movEyes} onMouseLeave={movEyesOut}>
            <div className={styles.container} >
                <div className={styles.hair}></div>
                <div className={styles.bottomBody}>
                    <span></span>
                </div>
                <div className={styles.head}>
                    <div className={styles.neck}></div>
                    <div className={styles.face}>
                        <div className={styles.eyes}>
                            <span className={styles.eye} id='eye1'><i></i></span>
                            <span className={styles.eye} id='eye2'><i></i></span>
                        </div>
                        <div className={styles.mouth}></div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.hair}></div>
                <div className={styles.bottomBody}>
                    <span></span>
                </div>
                <div className={styles.head}>
                    <div className={styles.neck}></div>
                    <div className={styles.face}>
                        <div className={styles.eyes}>
                            <span className={styles.eye} id='eye3'><i></i></span>
                            <span className={styles.eye} id='eye4'><i></i></span>
                        </div>
                        <div className={styles.mouth}></div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default EyesLooking;