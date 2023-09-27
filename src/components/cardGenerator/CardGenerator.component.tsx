import React, { createElement, useState } from "react";
import { injectClassNames } from "utils/css";
import styles from "./CardGenerator.module.scss";
import { BsLightningChargeFill } from "react-icons/bs";

// import { useGPTRequest, useBreakPrompt} from 'hooks/api';
import axios from "axios";
import { type } from "os";

const { loader } = styles;

type CardType = {
  image?: string;
  phrase?: string;
  translation?: string;
  deckId?: string;
};

type Prompt = {
  sentence: string;
  translation: string;
};

type CardGeneratorProps = {
  targetLanguage?: "SPEAKING" | "LEARNING";
  className?: string;
  formStep?: number;
  form: any;
  handleClick: () => void;
  updateForm: (object: any) => void;
};

const Loader = ({ className = "" }: CardGeneratorProps): JSX.Element => (
  <span className={injectClassNames(loader, className)} />
);

const CardGenerator = (props: CardGeneratorProps): JSX.Element => {
  const { className: argClassName = "", form, updateForm } = props;

  const example = `[
    {"sentence": "I need to deposit some money in the bank.", "translation": "Preciso depositar dinheiro no banco."},
    {"sentence": "She works at a bank as a teller.", "translation": "Ela trabalha em um banco como caixa."},
  ]`;
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [dallePrompt, setDallePrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [queryList, setqueryList] = useState<string[]>([]);
  const [promptList, setPromptList] = useState<Prompt[]>([]);
  const [cardList, setCardList] = useState<Object[]>([]);

  var objectValues = {
    imageUrl: "",
    phrase: "",
    translation: "",
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const dalleRequest = async (prompt: string, translation: string) => {
    axios
      .post(
        "https://api.openai.com/v1/images/generations",
        {
          prompt: prompt,
          n: 1,
          size: "256x256",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${form.openAiKey}`,
          },
        }
      )
      .then((res) => {
        cardList.concat({
          imageUrl: res.data.data[0].url,
          phrase: prompt,
          translation: translation,
        });

        console.log("cardList no prompt: ", cardList);

        console.log("ImageUrl: ", res.data.data[0].url);

        objectValues.phrase = prompt;
        objectValues.translation = translation;
        objectValues.imageUrl = res.data.data[0].url;
      })
      .catch((err) => {
        console.log("DALLE post error: ", err);
      })
      .finally(() => {
        updateForm(objectValues);
        setLoading(false);
        props.handleClick();
      });
  };

  const fixDallePrompt = (responseGPT: string) => {
    // let phraseObjectArray = useBreakPrompt(responseGPT)
    let phraseObjectArray = JSON.parse(responseGPT);

    console.log("phraseObjectArray::::: ", phraseObjectArray);

    promptList.concat(phraseObjectArray);

    // objectValues.phrase = phraseObjectArray[0].sentence
    // objectValues.translation = phraseObjectArray[0].translation

    // updateForm(objectValues);

    callAPIsRecursively(phraseObjectArray);

    // console.log("phraseObjectArray[0]: ", phraseObjectArray[0]);

    console.log(
      "cardList:::::::::::::::::::::::::::::::::::::::      ",
      cardList
    );
  };

  const gptRequest = async (
    word: string,
    targetLanguage: string,
    languageToTranslate: string
  ) => {
    const prompt = `Generate sentences for each meaning of the words ${word} in ${targetLanguage} followed by the translation to ${languageToTranslate}. Return as a list of objects containing a sentence paired with its translation. Omit the meaning. Use the following structure as an example: [
      {"sentence": "I need to deposit some money in the bank.", "translation": "Preciso depositar dinheiro no banco."},
      {"sentence": "She works at a bank as a teller.", "translation": "Ela trabalha em um banco como caixa."},
    ] `;

    setLoading(true);

    console.log("GPT API Request: ", prompt);

    axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${form.openAiKey}`,
          },
        }
      )
      .then((res) => {
        console.log("GPT API Response: ", res.data);
        fixDallePrompt(res.data.choices[0].message.content);
      })
      .catch((err) => {
        console.log("GPT post error: ", err);
      })
      .finally(() => {});
  };

  const handleSubmit = () => {
    setLoading(true);

    console.log("form: ", JSON.stringify(form));

    console.log("query: ", query);

    gptRequest(query, form.targetLanguage, form.language);
  };

  const dalleRequestToIterate = async (prompt: string, translation: string) => {
    return axios
      .post(
        "https://api.openai.com/v1/images/generations",
        {
          prompt: prompt,
          n: 1,
          size: "256x256",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${form.openAiKey}`,
          },
        }
      )
      .then((res) => {
        cardList.concat({
          imageUrl: res.data.data[0].url,
          phrase: prompt,
          translation: translation,
        });

        console.log("cardList no prompt: ", cardList);

        console.log("ImageUrl: ", res.data.data[0].url);

        objectValues.phrase = prompt;
        objectValues.translation = translation;
        objectValues.imageUrl = res.data.data[0].url;
      })
      .catch((err) => {
        console.log("DALLE post error: ", err);
      })
      .finally(() => {});
  };

  async function callAPIsRecursively(phraseObjectArray: any) {
    // Base case: If the array is empty, stop recursion
    console.log("promptList:::::: ", promptList);

    if (phraseObjectArray.length === 0) {
      console.log("cardList no fim da recursão: ", cardList);
      updateForm({ deck: cardList });
      setLoading(false);
      props.handleClick();
      return;
    }

    // Get the first API endpoint from the array
    const currentItem = phraseObjectArray[0];

    try {
      // Make the API request
      const response = await axios
        .post(
          "https://api.openai.com/v1/images/generations",
          {
            prompt: currentItem.sentence,
            n: 1,
            size: "256x256",
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${form.openAiKey}`,
            },
          }
        )
        .then((res) => {
          setCardList((cardList) => [
            ...cardList,
            {
              imageUrl: res.data.data[0].url,
              phrase: currentItem.sentence,
              translation: currentItem.translation,
            },
          ]);

          cardList.push({
            image: res.data.data[0].url,
            phrase: currentItem.sentence,
            translation: currentItem.translation,
          });

          console.log("currentItem.sentence no prompt: ", currentItem.sentence);

          console.log("cardList no prompt: ", cardList);

          console.log("ImageUrl: ", res.data.data[0].url);

          objectValues.phrase = currentItem.sentence;
          objectValues.translation = currentItem.translation;
          objectValues.imageUrl = res.data.data[0].url;

          setCardList((cardList) => [...cardList, objectValues]);
        })
        .catch((err) => {
          console.log("DALLE post error: ", err);
        })
        .finally(() => {
          phraseObjectArray.shift();
          callAPIsRecursively(phraseObjectArray);
        });
    } catch (error) {
      console.error(`Error calling ${currentItem}:`, error);
    }
  }

  const className = injectClassNames(argClassName);

  const type = props.targetLanguage === "SPEAKING";

  return (
    <div className={styles.externalContainer}>
      {loading && (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingImage}></div>
          <span className={styles.loadingTurn}></span>
          <span className={styles.loadingButton}></span>
          <img src="/walking.gif" className={styles.imageAnimation} />
        </div>
      )}
      {!loading && (
        <div className={`${styles.wrapContainer} ${styles.gap}`}>
          <div className={styles.container}>
            <h1>Criar deck</h1>
            <p>Você pode escolher entre nossos decks padrão</p>
          </div>
          <div className={styles.container}>
            <select name="deck" id="deck" placeholder="selecione">
              <option value="">Escolha um deck padrão</option>
              <option value="deck1">Deck 1</option>
              <option value="deck2">Deck 2</option>
              <option value="deck3">Deck 3</option>
            </select>
          </div>
          <span className={styles.spanDivider}>OU</span>
          <div className={styles.container}>
            <p>
              Digite uma ou mais palavras separadas por vírgula e vamos gerar
              seu deck!
            </p>
            <input
              type="text"
              name="palavra"
              placeholder="Digite a(s) palavra(s)..."
              onChange={handleChange}
            />
          </div>
          <div>
            <button className={styles.createButton} onClick={handleSubmit}>
              Gerar <BsLightningChargeFill className={styles.iconGenerate} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardGenerator;
