import React, { createElement, useState } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './Card.module.scss';
import { GrSync } from "react-icons/gr";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import { useRouter } from 'next/router';
import Deck from 'components/deck/Deck.component';
import { useTextToSpeech } from 'hooks/api';
import { idiomas } from 'utils/constants';


const { loader } = styles;

type CardType = {
    imageUrl?: string,
    phrase?: String,
    translation?: String,
};

type CardProps = {
    imageUrl?: string,
    phrase?: string,
    translation?: String,
    className?: string,
    formStep?: number,
    deck: Array<CardType>,
    deckName?: string,
    speechLanguage: string,
    hadleClick?: () => void,
};


const Card = (props: CardProps): JSX.Element => {
  const {
    className: argClassName = '',
    imageUrl,
    phrase,
    translation,
    deckName,
    deck,
    speechLanguage,
  } = props;

  const [flip, setFlip] = useState(true);

  const router = useRouter();

  const handleRedirect = () => {  
    router.push('/decks');
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const mockDeck = [{
        phrase: 'She is cutting some herbs',
        translation: 'Ela está cortando ervas',
        imageUrl: 'https://source.unsplash.com/yWG-ndhxvqY',
    },
    {
        phrase: 'She is cutting some herbs 2',
        translation: 'Ela está cortando ervas 2',
        imageUrl: 'https://source.unsplash.com/yWG-ndhxvqY',
    },
    {
        phrase: 'She is cutting some herbs 3',
        translation: 'Ela está cortando ervas 3',
        imageUrl: 'https://source.unsplash.com/bs_1FvLrVfk',
    },
    {
        phrase: 'She is cutting some herbs 4',
        translation: 'Ela está cortando ervas 4',
        imageUrl: 'https://source.unsplash.com/a-white-card-with-a-red-youtube-logo-on-it-D_HuvYppkQ4',
    },
    {
        phrase: 'She is cutting some herbs 5',
        translation: 'Ela está cortando ervas 5',
        imageUrl: 'https://source.unsplash.com/a-person-riding-a-surfboard-on-a-wave-in-the-ocean-gIkI4_WvF1g',
    },
    {
        phrase: 'She is cutting some herbs',
        translation: 'Ela está cortando ervas',
        imageUrl: 'https://source.unsplash.com/three-potted-plants-are-sitting-on-a-shelf-cRVk9LLVYuk',
    },
    {
        phrase: 'She is cutting some herbs',
        translation: 'Ela está cortando ervas',
        imageUrl: 'https://source.unsplash.com/yWG-ndhxvqY',
    },
    {
        phrase: 'She is cutting some herbs',
        translation: 'Ela está cortando ervas',
        imageUrl: 'https://source.unsplash.com/yWG-ndhxvqY',
    },
    {
        phrase: 'She is cutting some herbs',
        translation: 'Ela está cortando ervas',
        imageUrl: 'https://source.unsplash.com/yWG-ndhxvqY',
    },
]
    

  const mock = {
    imageUrl: 'https://source.unsplash.com/yWG-ndhxvqY',
    phrase: 'She is cutting some herbs',
    translation: 'Ela está cortando ervas',
  };

  const nextCard = () => {
    if(currentIndex < mockDeck.length - 1){
      setCurrentIndex(currentIndex + 1);
    }else{
      setCurrentIndex(0);

      console.log("currentIndex no next: " + currentIndex)

    }
  }

  const previousCard = () => {
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
    }else{
      setCurrentIndex(mockDeck.length - 1);
    }
      console.log("currentIndex no previous: " + currentIndex)
  }
  
  const className = injectClassNames(argClassName);


  const handleSpeech = () => {

    const msg = new SpeechSynthesisUtterance();
    msg.lang = idiomas[speechLanguage].key || 'en-US';
    msg.text = phrase || mock.phrase;
    window.speechSynthesis.speak(msg);
  }

  // const handleSpeech = () => {
  //   useTextToSpeech("test phrase", "en-US", "en-US-Wavenet-C")
  // }

  return (
    <div className={styles.externalContainer}>
        <div className={`${styles.cardContainer} ${styles.gap}`}>
            <h1>{deckName || 'Deck gerado'}</h1>
            <p className={styles.cardCount}>{`Card ${currentIndex+1}/${mockDeck.length}`} </p>
            <div className={styles.divCard}>
                <div className={`${styles.frontCard} ${flip? styles.flipCard : '' }`}>
                  <img className={`${styles.imageStyling} ${flip? styles.flipCard : '' } `} src={imageUrl || deck[currentIndex].imageUrl || mock.imageUrl} alt="imagem gerada" />
                  {/* <span>{phrase || mock.phrase}</span> */}
                  <span>{phrase || deck[currentIndex].phrase || mock.phrase}</span>
                </div>
                <div className={`${styles.cardBack} ${!flip? styles.flipCard : '' }`}>
                    <div className={styles.cardBackPhrase}>
                        {/* <span>{translation || mock.translation}</span> */}
                        <span>{translation || deck[currentIndex].translation || mock.translation}</span>
                    </div>
                </div> 
            </div>

            <button className={styles.iconSpeaker} onClick={handleSpeech}>
                <HiSpeakerWave size={20} />
            </button>

            <div className={styles.turnContainer}>
                <span onClick={() => setFlip(!flip)}>
                    <GrSync size={30} />
                    <span>VIRAR</span>
                </span>
            </div>

             <div className={styles.buttonContainer}>
                <button onClick={previousCard}>
                    <span><HiArrowCircleLeft className={styles.iconArrow} onClick={previousCard}/>Card anterior </span>
                </button>
                <button onClick={nextCard}>
                    <span>Próximo card <HiArrowCircleRight className={styles.iconArrow} /></span>
                </button>
             </div>
             <div className={styles.buttonBackContainer}>
              <button onClick={handleRedirect}>
                Voltar para Meus Decks
              </button>
             </div>
        </div>
    </div>

  );
}

export default Card;
