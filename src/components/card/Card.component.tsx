import React, { createElement, useState } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './Card.module.scss';
import { GrSync } from "react-icons/gr";
import { HiSpeakerWave } from "react-icons/hi2";

const { loader } = styles;

type CardProps = {
    imageUrl?: String,
    phrase?: String,
    translation?: String,
    className?: string,
};


const Card = (props: CardProps): JSX.Element => {
  const {
    className: argClassName = '',
    imageUrl,
    phrase,
    translation
  } = props;

  const [flip, setFlip] = useState(true);
  
  const className = injectClassNames( argClassName);

  return (
    <div className={styles.externalContainer}>
        <div className={`${styles.cardContainer} ${styles.gap}`}>

            <div className={styles.divCard}>
                <img className={`${styles.imageStyling} ${flip? styles.flipCard : '' }`} src="https://source.unsplash.com/yWG-ndhxvqY" alt="imagem gerada" />
                <div className={`${styles.cardBack} ${!flip? styles.flipCard : '' }`}>
                    <div className={styles.cardBackPhrase}>
                        <span>She is cutting some herbs</span>
                        <span>Ela está cortando ervas</span>
                    </div>
                </div> 
            </div>

            <span className={styles.iconSpeaker}>
                <HiSpeakerWave size={25} />
            </span>

            <div className={styles.turnContainer}>
                <span onClick={() => setFlip(!flip)}>
                    <GrSync size={40} />
                    <span>VIRAR</span>
                </span>
            </div>

             <div className={styles.buttonContainer}>
                <button>
                    <span>PRÓXIMO CARD</span>
                </button>
             </div>

        </div>
    </div>

  );
}

export default Card;
