import {useEffect, useState} from 'react';
import styles from '../CSS/RainColors.module.css';
import hulk from '../imgs/RainColors/HulkBaladeiro.gif';

function RainColors(params) {
    function rain(){
        let amount = 50;
        let body = document.getElementById('bodyRainColors');
        let i = 0;

        while (i < amount) {
            let drop = document.createElement('i');
            let size = Math.random() * 5;
            let posX = Math.floor(Math.random()* (body.clientLeft + body.clientWidth))
            let posY = body.clientTop - 200;
            let delay = Math.random() * -20;
            let duration = Math.random() * 5 + 1;

            drop.style = `--px: ${posX}px; --py: ${posY}px; --z: ${size}px; --de: ${delay}s; --du: ${duration}s`;
            body.appendChild(drop);
            i++
        }
    }

    useEffect(()=>{
        rain();
    });

    return(
        <main className={styles.body_RainColors} id='bodyRainColors'>
            <img src={hulk} alt="" />
        </main>
    )
}
export default RainColors;