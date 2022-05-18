import styles from '../CSS/Home.module.css';
import fotoProfile from '../imgs/perfil/foto2.jpg';
import Dice3D from '../layout/Dice3D';
import EmailValidation from '../layout/EmailValidation';
import EyesLooking from '../layout/EyesLooking';
import Menu3D from '../layout/Menu3D';
import Rain from '../layout/Rain';
import RainColors from '../layout/RainColors';
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
                            Também tenho afinidade com React Native e C# (jogos em Unity), tenho alguns projetos nessas linguagens na fila para conclusão.
                            Todos os projetos deste portifolio foram desenvolvidos com React.
                        </p>
                    </div>
                </div>
                <h2>Efeitos frontend</h2>
                <TextWave />
                <Rain />
                <EmailValidation />
                <EyesLooking />
                <RainColors />
                <Menu3D />
                <Dice3D />
            </section>
            
        </main>
    )
}

export default Home;