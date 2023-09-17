import React, { createElement, useState } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './Card.module.scss';
import { GrSync } from "react-icons/gr";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";

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

    console.log("phrase: " + phrase)
    console.log("translation: " + translation) 
    console.log("imageUrl: " + imageUrl)  
 

  return (
    <div className={styles.externalContainer}>
        <div className={`${styles.cardContainer} ${styles.gap}`}>
            <h1>Deck 1</h1>
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
                    <GrSync size={30} />
                    <span>VIRAR</span>
                </span>
            </div>

             <div className={styles.buttonContainer}>
                <button>
                    <span><HiArrowCircleLeft className={styles.iconArrow}/>Card anterior </span>
                </button>
                <button>
                    <span>Próximo card <HiArrowCircleRight className={styles.iconArrow}/></span>
                </button>
             </div>
             <div className={styles.buttonBackContainer}>
              <button>
                Voltar para Meus Decks
              </button>
             </div>

        </div>
    </div>

  );
}

export default Card;
