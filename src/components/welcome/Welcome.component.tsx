import React from 'react';
import styles from './Welcome.module.scss';
import { GoCheckCircle } from 'react-icons/go';
import internal from 'stream';

const Welcome = () => {

    return (
        <div className={styles.externalComponent}>
            <div className={styles.internalContainer}>
                <div className={styles.titleContainer}>
                    <h1>Welcome to flAshI</h1>
                    <p>Revolutionize your language leaning</p>
                </div>
                <div className={styles.imageContainer}>
                    <img src="/flashi_redondo.png" alt="" />
                </div>
                <div className={styles.languageSelectionContainer}>
                    <h2>Choose your language:</h2>
                    <div>
                        <button>Português</button>
                        <button>English</button>
                    </div>
                </div>
                <div className={styles.confirmContainer}>
                    <button className={styles.confirm}><GoCheckCircle size='16px'/>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome;