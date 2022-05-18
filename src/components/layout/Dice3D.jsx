import {useState} from 'react';
import styles from '../CSS/Dice3D.module.css';
    
function Dice3D() {
    const [rot, setRot] = useState([]);

    function rotateRandon(){
        let numbers = [90, 180, 270, 360, 450, 540, 630]
        let degRandon = []
        degRandon = [`${numbers[Math.floor(Math.random() * numbers.length)]}deg`, 
                    `${numbers[Math.floor(Math.random() * numbers.length)]}deg`, 
                    `${numbers[Math.floor(Math.random() * numbers.length)]}deg`, 
                    `${numbers[Math.floor(Math.random() * numbers.length)]}deg`];
        setRot(degRandon);
    }

    return(
        <main 
            className={styles.body_dice3d}
            onMouseEnter={rotateRandon}
            onMouseLeave={()=> setRot([0, 0, 0, 0])}
        >
            <div className={styles.container}>
                <div className={styles.text} style={{'--j': 0, '--r': rot[0]}}>
                    <span style={{'--i': 0}}>2</span>
                    <span style={{'--i': 1}}>3</span>
                    <span style={{'--i': 2}}>4</span>
                    <span style={{'--i': 3}}>5</span>
                </div>  
                <div className={styles.text} style={{'--j': 1, '--r': rot[1]}}>
                    <span style={{'--i': 0}}>0</span>
                    <span style={{'--i': 1}}>1</span>
                    <span style={{'--i': 2}}>2</span>
                    <span style={{'--i': 3}}>3</span>
                </div>
                <div className={styles.text} style={{'--j': 2, '--r': rot[2]}}>
                    <span style={{'--i': 0}}>2</span>
                    <span style={{'--i': 1}}>3</span>
                    <span style={{'--i': 2}}>4</span>
                    <span style={{'--i': 3}}>5</span>
                </div>
                <div className={styles.text} style={{'--j': 3, '--r': rot[3]}}>
                    <span style={{'--i': 0}}>1</span>
                    <span style={{'--i': 1}}>2</span>
                    <span style={{'--i': 2}}>3</span>
                    <span style={{'--i': 3}}>4</span>
                </div>              
            </div>
        </main>
    )
}
export default Dice3D;