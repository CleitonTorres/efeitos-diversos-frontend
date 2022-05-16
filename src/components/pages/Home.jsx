import styles from '../CSS/Home.module.css';
import fotoProfile from '../imgs/perfil/foto2.jpg';
import EmailValidation from '../layout/EmailValidation';
import EyesLooking from '../layout/EyesLooking';
import Rain from '../layout/Rain';
import TextWave from '../layout/TextWave';

function Home(){
    return(
        <main className={styles.body_home}>
            <section className={styles.section}>
                <div className={styles.profileContainer}>
                    <div className={styles.profileContent}>
                        <h2>Cleiton Torres Machado</h2>
                        <img src={fotoProfile} alt="Cleiton Torre Machado" />
                        <p>
                            Desenvolvedor amador desde 2013. Atualmente estou estudando React, Typescript, CSS, ou seja, estou mais focado no frontend,
                            mas tenho experiência no backend com PHP, trabalhos com SQL e javascript.
                            Este portifolio esta em contrução e vou melhora-lo ao passo que desenvolvo meus projetos.
                            Também tenho afinidade com React Native e C# (jogo em Unity), tenho alguns projetos nessas linguagens na fila para conclusão.
                        </p>
                    </div>
                </div>
                <h2>Efeitos frontend</h2>
                <TextWave />
                <Rain />
                <EmailValidation />
                <EyesLooking />
            </section>
            
        </main>
    )
}

export default Home;