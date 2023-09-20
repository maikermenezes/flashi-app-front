import React, { MouseEventHandler, createElement, useState } from "react";
import { injectClassNames } from "utils/css";
import styles from "./Deck.module.scss";
import { IoIosArrowDropright } from "react-icons/io";
import { VscBook } from "react-icons/vsc";
import { TiExportOutline } from "react-icons/ti";
import { HiSpeakerWave } from "react-icons/hi2";
import { useRouter } from "next/router";
import { api } from "services/api";

type DeckProps = {
  className?: string;
  cardList?: Array<Object>;
  name?: string;
};

const Deck = (props: DeckProps): JSX.Element => {
  const router = useRouter();
  const { id, deckName } = router.query;

  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  if (id) {
    api
      .get(`/deck/cards/${id}`)
      .then((response) => {
        setCards(response.data);
        console.log("cards: ", cards);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch cards");
        setLoading(false);
      });
  }

  const { className: argClassName = "" } = props;

  const className = injectClassNames(argClassName);

  return (
    <div className={styles.externalContainer}>
      <div className={`${styles.container} ${styles.gap}`}>
        <div className={styles.container}>
          <h1>
            {props.name ? props.name : deckName ? deckName : "Deck sem nome"}
          </h1>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className={styles.containerMiniCards}>
            {cards.map((card) => (
              <MiniCard phrase={card.phrase} imageUrl={card.imageUrl} />
            ))}
          </div>
        )}
        <div className={styles.buttonContainer}>
          <button>
            <VscBook size={26} />
            Estudar
          </button>
        </div>
      </div>
    </div>
  );
};

interface MiniCardProps {
  phrase: string;
  imageUrl: string;
}

const MiniCard = ({ phrase, imageUrl }: MiniCardProps) => {
  return (
    <div className={styles.miniCardContainer}>
      <HiSpeakerWave size={10} className={styles.iconSpeaker} />
      <img src={imageUrl} />
      <span>{phrase}</span>
    </div>
  );
};

export default Deck;
