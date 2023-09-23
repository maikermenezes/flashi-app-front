import React, { createElement, useState } from "react";
import { injectClassNames } from "utils/css";
import styles from "./Card.module.scss";
import { GrSync } from "react-icons/gr";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import { useRouter } from "next/router";
import Deck from "components/deck/Deck.component";
import { useTextToSpeech } from "hooks/api";
import { idiomas } from "utils/constants";

const { loader } = styles;

export type CardType = {
  image?: string;
  phrase?: String;
  translation?: String;
  deckId?: String;
};

type CardProps = {
  className?: string;
  formStep?: number;
  deck: Array<CardType>;
  deckName?: string;
  speechLanguage: string;
  initialCard?: number;
  deckGerado?: boolean;
  setComponentToShow?: React.Dispatch<React.SetStateAction<string>>;
  hadleClick?: () => void;
};

const Card = (props: CardProps): JSX.Element => {
  const {
    className: argClassName = "",
    deckName,
    deck,
    speechLanguage,
    initialCard,
    deckGerado,
    setComponentToShow,
  } = props;

  // console.log("deck received: ", deck);

  const [flip, setFlip] = useState(true);

  const router = useRouter();

  const handleRedirect = () => {
    router.push("/decks");
  };

  const [currentIndex, setCurrentIndex] = useState(
    initialCard ? initialCard : 0
  );

  const nextCard = () => {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);

      console.log("currentIndex no next: " + currentIndex);
    }
  };

  const previousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(deck.length - 1);
    }
    console.log("currentIndex no previous: " + currentIndex);
  };

  const className = injectClassNames(argClassName);

  const mockPhrase = "Something went wrong. This is a mock message";

  const handleSpeech = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.lang = idiomas[speechLanguage].key || "en-US";
    msg.text = (deck[0].phrase ? deck[0].phrase : mockPhrase) as string;
    window.speechSynthesis.speak(msg);
  };

  // const handleSpeech = () => {
  //   useTextToSpeech("test phrase", "en-US", "en-US-Wavenet-C")
  // }

  return (
    <div className={styles.externalContainer}>
      <div className={`${styles.cardContainer} ${styles.gap}`}>
        <h1>{deckName || "Deck gerado"}</h1>
        <p className={styles.cardCount}>
          {`Card ${currentIndex + 1}/${deck?.length}`}{" "}
        </p>
        <div className={styles.divCard}>
          <div className={`${styles.frontCard} ${flip ? styles.flipCard : ""}`}>
            {deck[currentIndex].image === "" ? (
              <></>
            ) : (
              <img
                className={`${styles.imageStyling} ${
                  flip ? styles.flipCard : ""
                } `}
                src={deck[currentIndex].image}
                alt="imagem gerada"
              />
            )}

            {/* <span>{phrase || mock.phrase}</span> */}
            <span>{deck[currentIndex].phrase}</span>
          </div>
          <div className={`${styles.cardBack} ${!flip ? styles.flipCard : ""}`}>
            <div className={styles.cardBackPhrase}>
              {/* <span>{translation || mock.translation}</span> */}
              <span>{deck[currentIndex].translation}</span>
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
            <span>
              <HiArrowCircleLeft
                className={styles.iconArrow}
                onClick={previousCard}
              />
              Card anterior{" "}
            </span>
          </button>
          <button onClick={nextCard}>
            <span>
              Próximo card <HiArrowCircleRight className={styles.iconArrow} />
            </span>
          </button>
        </div>
        {deckGerado ? (
          <div className={styles.buttonBackContainer}>
            <button
              onClick={() => {
                if (setComponentToShow) {
                  setComponentToShow("deck");
                }
              }}
            >
              Voltar
            </button>
          </div>
        ) : (
          <div className={styles.buttonBackContainer}>
            <button onClick={handleRedirect}>Voltar para Meus Decks</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
