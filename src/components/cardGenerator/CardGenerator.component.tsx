
import React, { createElement, useState } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './CardGenerator.module.scss';
import { BsLightningChargeFill } from 'react-icons/bs';

// import { useGPTRequest, useBreakPrompt} from 'hooks/api';
import axios from 'axios';

const { loader } = styles;

type CardGeneratorProps = {
    targetLanguage?: 'SPEAKING' | 'LEARNING',
    className?: string,
    formStep?: number,
    form: any,
    handleClick: () => void,
    updateForm: (object: any) => void,
};

const Loader = ({ className = '' }: CardGeneratorProps): JSX.Element => (
  <span
    className={
      injectClassNames(
        loader,
        className
      )
    }
  />
);

const CardGenerator = (props: CardGeneratorProps): JSX.Element => {
  const {
    className: argClassName = '',
    form,
    updateForm
  } = props;

  const example = `[
    {"sentence": "I need to deposit some money in the bank.", "translation": "Preciso depositar dinheiro no banco."},
    {"sentence": "She works at a bank as a teller.", "translation": "Ela trabalha em um banco como caixa."},
  ]`
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [dallePrompt, setDallePrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  var objectValues = {
    imageUrl: '',
    phrase: '',
    translation: '',
  }

  const  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }


 const dalleRequest = async (prompt: string) => {

  axios
    .post(
      'https://api.openai.com/v1/images/generations',
      {
        prompt: prompt,
        n: 1,
        size: '256x256',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            ``,
        },
      }
    )
    .then((res) => {
        console.log("DALLE API Response: ", res.data);
        objectValues.imageUrl = res.data.data[0].url
    })
    .catch((err) => {
        console.log('DALLE post error: ', err);
    })
    .finally(() => {
      updateForm(objectValues);
      setLoading(false);
      props.handleClick();
    });

 }

const fixDallePrompt = ( responseGPT:string ) => {
  // let phraseObjectArray = useBreakPrompt(responseGPT)
  let phraseObjectArray = JSON.parse(responseGPT)

  objectValues.phrase = phraseObjectArray[0].sentence
  objectValues.translation = phraseObjectArray[0].translation

  updateForm(objectValues);

  console.log("phraseObjectArray[0]: ", phraseObjectArray[0]);

  dalleRequest(phraseObjectArray[0].sentence)

}



const gptRequest = async (word: string, targetLanguage: string, languageToTranslate: string) => {

  const prompt = `Generate sentences for each meaning of the word ${word} in ${targetLanguage} followed by the translation to ${languageToTranslate}. Return as a list of objects containing a sentence paired with its translation. Omit the meaning. Use the following structure as an example: [
    {"sentence": "I need to deposit some money in the bank.", "translation": "Preciso depositar dinheiro no banco."},
    {"sentence": "She works at a bank as a teller.", "translation": "Ela trabalha em um banco como caixa."},
  ] `;

  setLoading(true);

  console.log("GPT API Request: ", prompt);

  axios
  .post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
        ``,
      },
    }
  )
  .then((res) => {
    console.log("GPT API Response: ", res.data);
    fixDallePrompt(res.data.choices[0].message.content);
  })
  .catch((err) => {
    console.log('GPT post error: ', err);
  })
  .finally(() => {});
}

  const handleSubmit = () => {

    setLoading(true);

    console.log("form: ", JSON.stringify(form));

    gptRequest(query, form.targetLanguage, form.language);

  }
  
  const className = injectClassNames( argClassName);

  const type = props.targetLanguage === 'SPEAKING';

  return (
    <div className={styles.externalContainer}>
        {loading && 
        <div className={styles.loadingContainer}>
          <div className={styles.loadingImage}></div>
          <span className={styles.loadingTurn}></span>
          <span className={styles.loadingButton}></span>
          <img src='/walking.gif' className={styles.imageAnimation} />
        </div>
      } 
        { !loading && <div className={`${styles.wrapContainer} ${styles.gap}`}>
            <div className={styles.container}>
                <h1>Criar deck</h1>
                <p>Você pode escolher entre nossos decks padrão</p>
            </div>
            <div className={styles.container}>
              <select name="deck" id="deck" placeholder='selecione'>
                <option value="">Escolha um deck padrão</option>
                <option value="deck1">Deck 1</option>
                <option value="deck2">Deck 2</option>
                <option value="deck3">Deck 3</option>
              </select>
            </div>
            <span className={styles.spanDivider}>OU</span>
            <div className={styles.container}>
              <p>Digite uma ou mais palavras separadas por vírgula e vamos gerar seu deck!</p>
              <input type="text" name='palavra' placeholder='Digite a(s) palavra(s)...' onChange={handleChange}/>
            </div>
            <div>
              <button className={styles.createButton} onClick={handleSubmit}>Gerar <BsLightningChargeFill className={styles.iconGenerate} /></button>
            </div>
        </div> }
    </div>

  );
}

export default CardGenerator;
