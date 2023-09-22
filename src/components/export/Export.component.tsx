import React, { useContext, useState } from "react";
import styles from "./Export.module.scss";
import { TiExportOutline } from "react-icons/ti";
import { TfiSave } from "react-icons/tfi";
import { api } from "services/api";
import { AuthContext } from "contexts/AuthContext";

const Export = ({ cardList }: any) => {
  const { user } = useContext(AuthContext);
  const [deckName, setDeckName] = useState("");

  const handleSaveDeck = async () => {
    console.log("starting");
    console.log("user: ", user);
    if (!user?.id) return;
    try {
      console.log("starting 2");
      // Create a new deck
      const deckResponse = await api.post("/deck", {
        name: deckName,
        userId: user?.id, // Assuming the user object has an id property
      });

      const deckId = deckResponse.data.id; // Assuming the response returns the created deck with an id

      // Create cards for the deck
      for (let card of cardList) {
        await api.post("/card", {
          phrase: card.phrase ? card.phrase : "",
          translation: card.translation ? card.translation : "",
          image: card?.image ? card.image : "",
          deckId: deckId,
        });
      }

      // You might want to provide some feedback to the user that everything was saved successfully
    } catch (error) {
      console.error("Error saving deck and cards:", error);
      // Handle the error appropriately, maybe show a message to the user
    }
  };

  console.log("cardList:", cardList);
  console.log("deckName: ", deckName);
  return (
    <div className={styles.externalComponent}>
      <div className={styles.internalContainer}>
        <h1>Tudo Pronto</h1>
        <div className={styles.saveContainer}>
          <button onClick={handleSaveDeck}>
            <TfiSave size={22} /> Guarde seu deck
          </button>
          <input
            className={styles.input}
            type="text"
            value={deckName}
            onChange={(e) => setDeckName(e.target.value)}
            placeholder="Enter deck name"
          />
          <p>Veja o deck gerado em "Decks"</p>
        </div>
        {/* <div className={styles.exportContainer}>
          <button>
            <TiExportOutline size={30} /> Exportar .apkg
          </button>
          <p>
            Exporte seu deck em formato compatível com o Anki. Ao importar na
            plataforma, você consegue utilizar repetição espaçada e
            personalização de estilo
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Export;
