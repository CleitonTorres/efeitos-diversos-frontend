import styles from '../CSS/Rain.module.css';

function Rain(){
    return(
        <main className={styles.body_rain}>
            <div className={styles.container}>
                <div className={styles.cloud}></div>
                <div className={styles.rain}>
                    <span style={{'--i': 11}}></span>
                    <span style={{'--i': 13}}></span>
                    <span style={{'--i': 15}}></span>
                    <span style={{'--i': 18}}></span>
                    <span style={{'--i': 12}}></span>
                    <span style={{'--i': 16}}></span>
                    <span style={{'--i': 13}}></span>
                    <span style={{'--i': 17}}></span>
                    <span style={{'--i': 20}}></span>
                    <span style={{'--i': 19}}></span>
                    <span style={{'--i': 11}}></span>
                    <span style={{'--i': 13}}></span>
                    <span style={{'--i': 15}}></span>
                    <span style={{'--i': 14}}></span>
                    <span style={{'--i': 12}}></span>
                    <span style={{'--i': 16}}></span>
                    <span style={{'--i': 13}}></span>
                    <span style={{'--i': 17}}></span>
                    <span style={{'--i': 20}}></span>
                    <span style={{'--i': 12}}></span>
                </div>                
            </div>
        </main>
    )
}

export default Rain;