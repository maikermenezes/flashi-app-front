import React, { MouseEventHandler, createElement } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './DeckList.module.scss';
import { IoIosArrowDropright } from 'react-icons/io';
import { VscBook } from 'react-icons/vsc';
import { TiExportOutline } from 'react-icons/ti';


type DeckListProps = {
    className?: string,
};

const DeckList = (props: DeckListProps): JSX.Element => {
  const {
    className: argClassName = ''
  } = props;

  const className = injectClassNames( argClassName);

  return (
    <div className={styles.externalContainer}>
        <div className={`${styles.container} ${styles.gap}`}>
            <div className={styles.container}>
                <h1>Meus Decks</h1>
            </div>
            <div className={styles.containerDeckButtons}>
                <button className={styles.deckOption}>Deck 1 <IoIosArrowDropright size={24} /></button>
                <button className={styles.deckOption}>Deck 2 <IoIosArrowDropright size={24} /></button>
                <button className={styles.deckOption}>Deck 3 <IoIosArrowDropright size={24} /></button>
            </div>
            <div className={styles.buttonContainer}>
              <button><VscBook size={24}/>todos</button>
              <button><TiExportOutline size={24}/>todos</button>
            </div>
        </div>
    </div>

  );
}

export default DeckList;
