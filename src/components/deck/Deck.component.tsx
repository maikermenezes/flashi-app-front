import React, { MouseEventHandler, createElement } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './Deck.module.scss';
import { IoIosArrowDropright } from 'react-icons/io';
import { VscBook } from 'react-icons/vsc';
import { TiExportOutline } from 'react-icons/ti';
import { HiSpeakerWave } from 'react-icons/hi2';


type DeckProps = {
    className?: string,
    cardList?: Array<Object>,
    name?: string,
};

const Deck = (props: DeckProps): JSX.Element => {
  const {
    className: argClassName = ''
  } = props;

  const className = injectClassNames( argClassName);

  const mockDeck = [{
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

  return (
    <div className={styles.externalContainer}>
        <div className={`${styles.container} ${styles.gap}`}>
            <div className={styles.container}>
                <h1>{props.name ? props.name: 'Deck sem nome'}</h1>
            </div>
            <div className={styles.containerMiniCards}>
                {mockDeck.map((card) => (
                    <MiniCard phrase={card.phrase} imageUrl={card.imageUrl}/>
                ))}
            </div>
            <div className={styles.buttonContainer}>
              <button><VscBook size={26}/>Estudar</button>
            </div>
        </div>
    </div>

  );
}

interface MiniCardProps {
    phrase: string;
    imageUrl: string;
}

const MiniCard = ({phrase, imageUrl}: MiniCardProps) => {

    return (
        <div className={styles.miniCardContainer}>
            <HiSpeakerWave size={10}  className={styles.iconSpeaker}/>
            <img src={imageUrl}/>
            <span>{phrase}</span>
        </div>
    )

}

export default Deck;
