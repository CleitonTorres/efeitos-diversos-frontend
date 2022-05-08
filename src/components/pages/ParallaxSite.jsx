import styles from '../CSS/ParallaxSite.module.css';
import stars01 from '../imgs/parallax-site/stars1.png';
import stars02 from '../imgs/parallax-site/stars2.png';
import moon from '../imgs/parallax-site/lua.png';
import castle from '../imgs/parallax-site/castle.png';
import ground from '../imgs/parallax-site/frontground.png';
import lamp from '../imgs/parallax-site/lamp.png';

function ParallaxSite(){
    window.addEventListener('scroll', function(){
        const stars01 = document.getElementById('stars01');
        const moon = document.getElementById('moon');
        const text = document.getElementById('text');
        const castle = document.getElementById('castle');
        const ground = document.getElementById('ground');
        const lamp = document.getElementById('lamp');
        let value = window.scrollY;

        stars01.style.bottom = value * 0.05 + '%';
        moon.style.bottom = value * -0.5 + 'px';
        moon.style.left = value * -0.5 + 'px';
        castle.style.bottom = (value * 0.05) - 40 + 'px';
        text.style.right =  (value * 0.8) - 400 + 'px';
    });

    return(
        <main className={styles.body_parallax02}>
            <section className={styles.section01}>
                <img 
                    src={stars01} 
                    alt="" 
                    id="stars01"
                />
                <img 
                    src={stars01} 
                    alt="" 
                    id="stars02"
                    className={styles.stars02}
                />
                <img 
                    src={moon} 
                    alt="" 
                    id="moon"
                />
                <h2 
                    id='text' 
                    className={styles.text}
                >
                    By Cleiton Machado
                </h2>
                <img 
                    src={castle} 
                    alt=""  
                    className={styles.taj} 
                    id="castle"
                />
                <img 
                    src={ground} 
                    alt="" className={styles.ground} 
                    id="ground"
                />
                <img 
                    src={lamp} 
                    alt="" 
                    className={styles.lamp} 
                    id="lamp"
                />
            </section>
            <div className={styles.textBx}>
                <h2>Título</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid rem quia iusto pariatur earum nostrum. Ex id dicta unde quibusdam dolorem amet, praesentium quisquam nulla tempore magni ad, vel ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero fugiat quia consectetur non asperiores distinctio maiores nihil laborum ipsam sapiente ea, nam a possimus eveniet fuga illum dolorem officia?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In rerum nobis expedita totam cumque, quo explicabo corrupti harum architecto ullam veritatis, veniam aut quis obcaecati vitae, sapiente molestiae nihil excepturi.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid rem quia iusto pariatur earum nostrum. Ex id dicta unde quibusdam dolorem amet, praesentium quisquam nulla tempore magni ad, vel ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero fugiat quia consectetur non asperiores distinctio maiores nihil laborum ipsam sapiente ea, nam a possimus eveniet fuga illum dolorem officia?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In rerum nobis expedita totam cumque, quo explicabo corrupti harum architecto ullam veritatis, veniam aut quis obcaecati vitae, sapiente molestiae nihil excepturi.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid rem quia iusto pariatur earum nostrum. Ex id dicta unde quibusdam dolorem amet, praesentium quisquam nulla tempore magni ad, vel ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero fugiat quia consectetur non asperiores distinctio maiores nihil laborum ipsam sapiente ea, nam a possimus eveniet fuga illum dolorem officia?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In rerum nobis expedita totam cumque, quo explicabo corrupti harum architecto ullam veritatis, veniam aut quis obcaecati vitae, sapiente molestiae nihil excepturi.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid rem quia iusto pariatur earum nostrum. Ex id dicta unde quibusdam dolorem amet, praesentium quisquam nulla tempore magni ad, vel ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero fugiat quia consectetur non asperiores distinctio maiores nihil laborum ipsam sapiente ea, nam a possimus eveniet fuga illum dolorem officia?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In rerum nobis expedita totam cumque, quo explicabo corrupti harum architecto ullam veritatis, veniam aut quis obcaecati vitae, sapiente molestiae nihil excepturi.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid rem quia iusto pariatur earum nostrum. Ex id dicta unde quibusdam dolorem amet, praesentium quisquam nulla tempore magni ad, vel ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero fugiat quia consectetur non asperiores distinctio maiores nihil laborum ipsam sapiente ea, nam a possimus eveniet fuga illum dolorem officia?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In rerum nobis expedita totam cumque, quo explicabo corrupti harum architecto ullam veritatis, veniam aut quis obcaecati vitae, sapiente molestiae nihil excepturi.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid rem quia iusto pariatur earum nostrum. Ex id dicta unde quibusdam dolorem amet, praesentium quisquam nulla tempore magni ad, vel ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero fugiat quia consectetur non asperiores distinctio maiores nihil laborum ipsam sapiente ea, nam a possimus eveniet fuga illum dolorem officia?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In rerum nobis expedita totam cumque, quo explicabo corrupti harum architecto ullam veritatis, veniam aut quis obcaecati vitae, sapiente molestiae nihil excepturi.
                </p>
            </div>
        </main>
    )
}
export default ParallaxSite;