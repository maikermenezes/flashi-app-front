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
import Export from "components/export";

type DeckProps = {
  className?: string;
  cardList?: Array<Object>;
  name?: string;
  speechLanguage?: string;
};

const Deck = (props: DeckProps): JSX.Element => {
  const router = useRouter();
  let { id, deckName } = router.query;

  const [initialCard, setInitialCard] = useState<number | undefined>(undefined);
  const [componentToShow, setComponentToShow] = useState<string>("deck");
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id && !props.cardList) {
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
  }, [id]);

  useEffect(() => {
    if (props.cardList) {
      // console.log("cards list: ", props.cardList);
      setCards(props.cardList);
      setLoading(false);
    }
  }, []);

  const { className: argClassName = "" } = props;

  const className = injectClassNames(argClassName);

  if (componentToShow === "deck") {
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
                    setComponentToShow("card");
                    setInitialCard(index);
                  }}
                />
              ))}
            </div>
          )}
          {props.cardList ? (
            <div className={styles.buttonContainer}>
              <button
                onClick={() => {
                  setComponentToShow("export");
                }}
              >
                <VscBook size={26} />
                Continuar
              </button>
            </div>
          ) : (
            <div className={styles.buttonContainer}>
              <button
                onClick={() => {
                  setComponentToShow("card");
                  setInitialCard(0);
                }}
              >
                <VscBook size={26} />
                Estudar
              </button>
            </div>
          )}
        </div>
      </div>
    );
  } else if (componentToShow === "card") {
    return (
      <Card
        deckName={
          (props.name
            ? props.name
            : deckName
            ? deckName
            : "Deck sem nome") as string
        }
        deckGerado={true}
        setComponentToShow={setComponentToShow}
        speechLanguage={props.speechLanguage ? props.speechLanguage : "pt-Br"}
        deck={cards}
        initialCard={initialCard}
      />
    );
  } else if (componentToShow === "export") {
    return <Export cardList={cards} />;
  } else return <></>;
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


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const cardList = [{
    imageUrl: "https://source.unsplash.com/yWG-ndhxvqY",
    phrase: "She is cutting some herbs",
    translation: "Ela está cortando ervas",
  }];

  const user = {
    name: "User Name",
    email: "",
    id: "",
  }


 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      cardList,
      user
    },
  }
}

export default Deck;
