import React, {
  MouseEventHandler,
  createElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { injectClassNames } from "utils/css";
import styles from "./DeckList.module.scss";
import { IoIosArrowDropright } from "react-icons/io";
import { VscBook } from "react-icons/vsc";
import { TiExportOutline } from "react-icons/ti";
import { AuthContext } from "contexts/AuthContext";
import { api } from "services/api";
import { useRouter } from "next/router";

type DeckListProps = {
  className?: string;
};

const DeckList = (props: DeckListProps): JSX.Element => {
  const router = useRouter();
  const { className: argClassName = "" } = props;

  const className = injectClassNames(argClassName);

  const { user } = useContext(AuthContext);

  console.log("user: ", user);

  const [decks, setDecks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  if (user) {
    api
      .get(`/user/decks/${user.id}`)
      .then((response) => {
        setDecks(response.data);
        console.log("decks: ", decks);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch decks");
        setLoading(false);
      });
  }

  return (
    <div className={styles.externalContainer}>
      <div className={`${styles.container} ${styles.gap}`}>
        <div className={styles.container}>
          <h1>Meus Decks</h1>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className={styles.containerDeckButtons}>
            {decks.map((deck) => (
              <button
                key={deck.id}
                className={styles.deckOption}
                onClick={() =>
                  router.push(`/deckView/${deck.id}?deckName=${deck.name}`)
                }
              >
                {deck.name} <IoIosArrowDropright size={24} />
              </button>
            ))}
          </div>
        )}
        <div className={styles.buttonContainer}>
          <button>
            <VscBook size={24} />
            todos
          </button>
          <button>
            <TiExportOutline size={24} />
            todos
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeckList;
