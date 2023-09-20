import React, {
  MouseEventHandler,
  createElement,
  useEffect,
  useState,
} from "react";
import { injectClassNames } from "utils/css";
import styles from "./Deck.module.scss";
import { IoIosArrowDropright } from "react-icons/io";
import { VscBook } from "react-icons/vsc";
import { TiExportOutline } from "react-icons/ti";
import { HiSpeakerWave } from "react-icons/hi2";
import { useRouter } from "next/router";
import { api } from "services/api";
import Card from "components/card";

type DeckProps = {
  className?: string;
  cardList?: Array<Object>;
  name?: string;
};

const Deck = (props: DeckProps): JSX.Element => {
  const router = useRouter();
  const { id, deckName } = router.query;

  const [initialCard, setInitialCard] = useState<number | undefined>(undefined);
  const [showDeck, setshowDeck] = useState<boolean>(true);
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      api
        .get(`/deck/cards/${id}`)
        .then((response) => {
          setCards(response.data);
          console.log("cards: ", response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to fetch cards");
          setLoading(false);
        });
    }
  }, [id]); // Add user to the dependency array

  const { className: argClassName = "" } = props;

  const className = injectClassNames(argClassName);

  if (showDeck) {
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
              {cards.map((card, index) => (
                <MiniCard
                  phrase={card.phrase}
                  imageUrl={card.image}
                  onClick={() => {
                    setshowDeck(false);
                    setInitialCard(index);
                  }}
                />
              ))}
            </div>
          )}
          <div className={styles.buttonContainer}>
            <button
              onClick={() => {
                setshowDeck(false);
                setInitialCard(0);
              }}
            >
              <VscBook size={26} />
              Estudar
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Card
        deckName={deckName as string}
        speechLanguage="pt-Br"
        deck={cards}
        initialCard={initialCard}
      />
    );
  }
};

interface MiniCardProps {
  phrase: string;
  imageUrl: string;
  onClick?: () => void; // <-- Add this line
}

const MiniCard = ({ phrase, imageUrl, onClick }: MiniCardProps) => {
  return (
    <div className={styles.miniCardContainer} onClick={onClick}>
      <HiSpeakerWave size={10} className={styles.iconSpeaker} />
      <img src={imageUrl} alt="Mini Card Image" />
      <span>{phrase}</span>
    </div>
  );
};

export default Deck;
