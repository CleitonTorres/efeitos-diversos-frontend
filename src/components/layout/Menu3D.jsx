import styles from '../CSS/Menu3D.module.css';

function Menu3D() {
    return(
        <main className={styles.body_menu3d}>
            <div className={styles.container}>
                <ul>
                    <li style={{'--i': 6}}><a href="#">Home</a></li>
                    <li style={{'--i': 5}}><a href="#">About</a></li>
                    <li style={{'--i': 4}}><a href="#">Services</a></li>
                    <li style={{'--i': 3}}><a href="#">Portifolio</a></li>
                    <li style={{'--i': 2}}><a href="#">Our Team</a></li>
                    <li style={{'--i': 1}}><a href="#">Contact</a></li>

                </ul>
            </div>
            
        </main>
    )
}
export default Menu3D;