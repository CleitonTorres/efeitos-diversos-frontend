import { useState } from 'react';
import styles from '../CSS/Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';

function Navbar({nav}){
    const [active, setActive] = useState('');
    const navigate = useNavigate()

    function activeToggleMenu(){
        //const toggleMenu = document.getElementById('toggleMenu');
        //toggleMenu.classList.toggle(active);
        active === '' ? setActive('active') : setActive('')
    }
    return(
        <header id='header' className={styles.header}>
            <Link 
                to="/"
                className={styles.logo}
            >
                CM
            </Link>
            <div 
                className={`${styles.toggle} ${styles[active]}`} 
                onClick={()=> activeToggleMenu()}
                id="toggleMenu"
            ></div>
            <ul className={`${styles.navigation} ${styles[active]}`}>
                <li>
                    <Link 
                        to="/" 
                        className={styles.active}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/parallax01" 
                    >
                        Parallax 01
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/parallax02" 
                    >
                        Parallax 02
                    </Link>
                </li>
            </ul>
        </header>
    )
}
export default Navbar;