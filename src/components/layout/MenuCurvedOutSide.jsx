import styles from '../CSS/MenuCurvedOutSide.module.css';
import {AiOutlineHome, 
    AiFillProfile, AiFillMessage, 
    AiOutlineLogout, AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai';
import {IoMdSettings, IoMdHelpCircle} from 'react-icons/io';
import {RiLockPasswordFill} from 'react-icons/ri';
import { useState } from 'react';

function MenuCurvedOutSide() {
    const [active, setActive] = useState('MenuCurvedOutSide_active__EHsuG');
    const [toggle, setToggle] = useState('MenuCurvedOutSide_toggle__GtBt2');
    
    function activedMenu(id){
        let element = document.getElementById(id);
        let elements = document.querySelectorAll('li');
        elements.forEach((item)=>{
            item.classList.remove(active)
        })
        element.classList.add(active);
    }
    function clickToggle(id){
        let nav = document.getElementById('nav');
        let element = document.getElementById(id);
        element.classList.toggle(active);
        nav.classList.toggle(active);
    }
    return(
        <main className={styles.body_menuCurvedOutside} id={'body_menuCurvedOutside'}>
            <div className={styles.container} id={'nav'}>
                <ul>
                    <li 
                        className={`${styles.list} ${styles.active}`} 
                        onClick={()=> activedMenu('home')}
                        id={'home'}
                    >
                        <b></b>
                        <b></b>
                        <a href="#body_menuCurvedOutside">
                            <span className={styles.icon}><AiOutlineHome /></span>                            
                            <span className={styles.title}>Home</span>
                        </a>
                    </li>
                    <li 
                        className={styles.list}
                        onClick={()=> activedMenu('profile')}
                        id={'profile'}
                    >
                        <b></b>
                        <b></b>
                        <a href="#body_menuCurvedOutside">
                            <span className={styles.icon}><AiFillProfile /></span>
                            <span className={styles.title}>Profile</span>
                        </a>
                    </li>
                    <li 
                        className={styles.list}
                        onClick={()=> activedMenu('message')}
                        id={'message'}
                    >
                        <b></b>
                        <b></b>
                        <a href="#body_menuCurvedOutside">
                            <span className={styles.icon}><AiFillMessage /></span>
                            <span className={styles.title}>Message</span>
                        </a>
                    </li>
                    <li 
                        className={styles.list}
                        onClick={()=> activedMenu('settings')}
                        id={'settings'}
                        
                    >
                        <b></b>
                        <b></b>
                        <a href="#body_menuCurvedOutside">
                        <span className={styles.icon}><IoMdSettings /></span>
                            <span className={styles.title}>Settings</span>
                        </a>
                    </li>
                    <li 
                        className={styles.list}
                        onClick={()=> activedMenu('help')}
                        id={'help'}
                    >
                        <b></b>
                        <b></b>
                        <a href="#body_menuCurvedOutside">
                        <span className={styles.icon}><IoMdHelpCircle /></span>
                            <span className={styles.title}>Help</span>
                        </a>
                    </li>
                    <li 
                        className={styles.list}
                        onClick={()=> activedMenu('password')}
                        id={'password'}
                    >
                        <b></b>
                        <b></b>
                        <a href="#body_menuCurvedOutside">
                        <span className={styles.icon}><RiLockPasswordFill /></span>
                            <span className={styles.title}>Password</span>
                        </a>
                    </li>
                    <li 
                        className={styles.list}
                        onClick={()=> activedMenu('singout')}
                        id={'singout'}
                    >
                        <b></b>
                        <b></b>
                        <a href="#body_menuCurvedOutside">
                        <span className={styles.icon}><AiOutlineLogout /></span>
                            <span className={styles.title}>SingOut</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div 
                className={styles.toggle} 
                onClick={()=> clickToggle('toggle')} 
                id={'toggle'}
            >
                <AiOutlineMenu className={styles.open}/>
                <AiFillCloseCircle className={styles.close}/>
            </div>
        </main>
    )
}
export default MenuCurvedOutSide;