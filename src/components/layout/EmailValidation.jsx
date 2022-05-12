import {useState} from 'react';
import styles from '../CSS/EmailValidation.module.css';

function EmailValidation() {
    const [check, setCheck] = useState('');
    
    // const handleChange = (e) => {
    //     validation(e.target.value);
    // }

    function validation(){
        //const form = document.getElementById('form');
        const email = document.getElementById('email').value;
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(email.match(pattern)) {
            //form.classList.add('valid');
            setCheck('valid')
        }else{
            //form.classList.remove('valid');
            setCheck('invalid');
        }
        email === '' && setCheck('')
    }
    return(
        <main className={styles.body_emailValidation}>
            <div className={styles.container}>
                <h3>Validação de e-mail</h3>
                <form 
                    action="#" 
                    className={`${styles.form} ${styles[check]}`}
                    id="form"
                >
                    <div className={styles.inputBox}>
                        <input 
                            type="text" 
                            id="email" 
                            placeholder="digite seu email..." 
                            className={styles.email}
                            onKeyUp={validation}
                        />
                        <span className={styles.indicator}></span>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default EmailValidation;