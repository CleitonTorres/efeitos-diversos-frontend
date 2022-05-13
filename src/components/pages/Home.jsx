import styles from '../CSS/Home.module.css';
import EmailValidation from '../layout/EmailValidation';
import EyesLooking from '../layout/EyesLooking';
import Rain from '../layout/Rain';
import TextWave from '../layout/TextWave';

function Home(){
    return(
        <main className={styles.body_home}>
            <section className={styles.section}>
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