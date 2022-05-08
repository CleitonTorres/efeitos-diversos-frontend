import styles from '../CSS/ParallaxBGScrolling.module.css';
import bg from '../imgs/parallax-bg-scrolling/bg.jpg';
import moon from '../imgs/parallax-bg-scrolling/moon.png';
import mountain from '../imgs/parallax-bg-scrolling/mountain.png';
import road from '../imgs/parallax-bg-scrolling/road.png';

function ParallaxBGScrolling(){    
    window.addEventListener('scroll', function(){
        const bg_obj = document.getElementById('bg');
        const moon_obj = document.getElementById('moon');
        const mountain_obj = document.getElementById('mountain');
        const road_obj = document.getElementById('road');
        const text_obj = document.getElementById('text');
        var value = window.scrollY;

        bg_obj.style.top = value * 0.5 + 'px';
        moon_obj.style.left = -value * 0.5 + 'px';
        mountain_obj.style.top = -value * 0.15 + 'px';
        road_obj.style.top = value * 0.15 + 'px';
        text_obj.style.top = value * 1 + 'px';
    })

    return(
        <main className={styles.body_parallax01}>
            <section className={styles.section01}>
                <img src={bg} className={styles.bg} alt="" id="bg" />
                <img src={moon} alt="" id="moon" />
                <img src={mountain} alt="" id="mountain" />
                <img src={road} alt="" id="road"  className={styles.road} />
                <h2 id="text" className={styles.text}>Titulo Aqui!</h2>
            </section>
            <section className={styles.section02}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus 
                    reprehenderit dicta veritatis totam quisquam quae magnam ipsam molestiae 
                    earum harum. Rerum maxime dicta iure recusandae est reiciendis temporibus 
                    cumque laudantium?
                </p>
            </section>
        </main>
    )
}

export default ParallaxBGScrolling;