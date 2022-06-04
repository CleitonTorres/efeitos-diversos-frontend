import {useState} from 'react';

import styles from '../CSS/GameJump.module.css';
import pipe from '../imgs/GameJump/pipe.png';
import mario from '../imgs/GameJump/mario.gif';
import marioGameOver from '../imgs/GameJump/game-over.png'
import clouds from '../imgs/GameJump/clouds.png';

function GameJump() {
    const [jump, setJump] = useState('run');
    const [paused, setPaused] = useState('paused'); //inicia a cena pausada.
    const [stop, setStop] = useState(true); //inicia a cena pausada.

    //loop que verifica a colisão com o pipe.
    const loop = setInterval(()=>{
        if(!stop){
        let pipe = document.getElementById('pipe');
        let mario = window.getComputedStyle(document.getElementById('mario'));
        let marioObj = document.getElementById('mario');

        const pipePosition = pipe.offsetLeft;
        const marioPositionBottom = +mario.bottom.replace('px', '');

        //colidiu
        if(pipePosition <= 170 && pipePosition > 90 && marioPositionBottom < 80){
            pipe.style.left = `${pipePosition}px`;

            setPaused('paused'); //seta o status das animações para pausado.

            marioObj.src = marioGameOver;
            marioObj.style.width = '50px';
            marioObj.style.bottom = `${marioPositionBottom}px`;
            
            setStop(true);
            clearInterval(loop);
        }}
        
    }, 10);

    //função que faz o pulo e o reset da corrida.
    function marioJump(){
        if(stop){
            setJump('run');
            let pipe = document.getElementById('pipe');
            let marioObj = document.getElementById('mario');
            
            pipe.style.left = 'auto';

            setPaused('running');

            marioObj.src = mario;
            marioObj.style.bottom = `0px`;
            marioObj.style.width = '100px';
            setTimeout(()=>{setStop(false);}, 300)
        }else{
            setJump('jump');
            setTimeout(()=> setJump(''), 800);
        }
    }

    return(
        <main 
            className={styles.game_board} 
            onClick={marioJump} 
            id='gameBoard'
        >
            <div className={styles.launcher} id='launcher'>
                <img 
                    src={clouds} 
                    alt="by Cleiton Machado"
                    className={`${styles.clouds} ${styles[paused]}`}
                />
                <img 
                    src={pipe} 
                    alt="by Cleiton Machado" 
                    className={`${styles.pipe} ${styles[paused]}`}
                    id='pipe'
                />
                <img 
                    src={mario}
                    alt="by Cleiton Machado" 
                    className={`${styles.mario} ${styles[paused]} ${styles[jump]}`}
                    id='mario'
                />
            </div>
        </main>
    );
}
export default GameJump;