import React, { createElement, useState } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './Card.module.scss';
import { GrSync } from "react-icons/gr";
import { HiSpeakerWave } from "react-icons/hi2";

const { loader } = styles;

type CardProps = {
    imageUrl?: string,
    phrase?: String,
    translation?: String,
    className?: string,
    formStep?: number,
    hadleClick?: () => void,
};


const Card = (props: CardProps): JSX.Element => {
  const {
    className: argClassName = '',
    imageUrl,
    phrase,
    translation
  } = props;

  const [flip, setFlip] = useState(true);

  const mock = {
    imageUrl: 'https://source.unsplash.com/yWG-ndhxvqY',
    phrase: 'She is cutting some herbs',
    translation: 'Ela está cortando ervas',
  };
  
  const className = injectClassNames(argClassName);

  return (
    <div className={styles.externalContainer}>
        <div className={`${styles.cardContainer} ${styles.gap}`}>

            <div className={styles.divCard}>
                <img className={`${styles.imageStyling} ${flip? styles.flipCard : '' }`} src={imageUrl || mock.imageUrl} alt="imagem gerada" />
                <div className={`${styles.cardBack} ${!flip? styles.flipCard : '' }`}>
                    <div className={styles.cardBackPhrase}>
                        <span>{phrase || mock.phrase}</span>
                        <hr style={{'width':"80%", "height": "0.5px"}}/>
                        <span>{translation || mock.translation}</span>
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
