import styles from '../CSS/BussolaRadical.module.css';
import imgBGBussola from '../imgs/bussolaRadical/Animation_logoBackground.png';
import imgFGBussola from '../imgs/bussolaRadical/Animation_logoFrontground.png';

function BussolaRadical(){
    function movIn(e){
            let img = document.getElementById('imgBG');

            let x = (img.getBoundingClientRect().left) + (img.clientWidth / 2);
            let y = (img.getBoundingClientRect().top) + (img.clientHeight / 2);
            let radian = Math.atan2(e.clientX - x, e.clientY - y);
            let rot =  Math.round((radian * (180 / Math.PI) * -1) + 270);
            img.style.transform = `rotate(${rot}deg)`;
    }
    function movOut(e){
        let img = document.getElementById('imgBG');
        img.style.transform = `rotate(${0}deg)`;
    }
    return(
        <main className={styles.body_bussolaRadical} onMouseMove={movIn} onMouseLeave={movOut}>
            <div className={styles.container}>
                <img src={imgBGBussola} alt="" id='imgBG'/>
                <img src={imgFGBussola} alt="" />
            </div>
        </main>
    )
}
export default BussolaRadical;