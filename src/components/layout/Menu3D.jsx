import styles from '../CSS/Menu3D.module.css';

function Menu3D() {
    return(
        <main className={styles.body_menu3d}>
            <div className={styles.container}>
                <ul>
                    <li style={{'--i': 6}}><span>Home </span></li>
                    <li style={{'--i': 5}}><span>About</span></li>
                    <li style={{'--i': 4}}><span>Services</span></li>
                    <li style={{'--i': 3}}><span>Portifolio</span></li>
                    <li style={{'--i': 2}}><span>Our Team</span></li>
                    <li style={{'--i': 1}}><span>Contact</span></li>

                </ul>
            </div>
            
        </main>
    )
}
export default Menu3D;