import styles from '../CSS/Home.module.css';
import TextWave from '../layout/TextWave';

function Home(){
    return(
        <main className={styles.body_home}>
            <section className={styles.section}>
                <h2>Efeitos frontend</h2>
                <TextWave />
            </section>
            
        </main>
    )
}

export default Home;