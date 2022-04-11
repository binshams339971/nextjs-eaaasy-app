import { useState } from 'react';
import styles from '../styles/Feedback.module.css';
const Feedback = () => {
    const [radio, setRadio] = useState('');
    const handleSend = () => {
        alert(radio);
    }
    return (
        <>
            <div className={`${styles.contain} container`}>
                <h2 className="text-center my-4">Teile Dein Feedback mit uns</h2>
                <h3 className='mt-md-5 mt-2 text-justify'>Ist es hilfreich Produktinfos auf einen Blick zu sehen anstatt diese immer lange im Internet zu suchen?</h3>

                <ul className={`${styles.ul}`}>
                    <li className={styles.li}>
                        <input type="radio" className={styles.input} id="f-option" value="yes" onChange={(e) => { setRadio(e.target.value) }} name="selector" />
                        <label for="f-option" className={styles.label}>Ja, ist hilfreich Produktinfos auf einen Blick zu sehen</label>

                        <div className={styles.check}></div>
                    </li>

                    <li className={styles.li}>
                        <input type="radio" id="s-option" value="no" onChange={(e) => { setRadio(e.target.value) }} name="selector" />
                        <label for="s-option">Nein, ist nicht hilfreich</label>

                        <div className={styles.check}></div>
                    </li>
                </ul>
                <div className={styles.wrap}>
                    <button className={styles.sndBtn} onClick={handleSend}>Senden</button>
                </div>
            </div>
        </>
    )
}

export default Feedback;