import React, { createElement, useState } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './CardGenerator.module.scss';

import { useGPTRequest } from 'hooks/api';

const { loader } = styles;

type CardGeneratorProps = {
    targetLanguage?: 'SPEAKING' | 'LEARNING',
    className?: string,
    formStep?: number,
    handleClick?: () => void,
    updateForm?: (key: string, value: string) => void,
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
    className: argClassName = ''
  } = props;

  const [query, setQuery] = useState('');

  const  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const handleSubmit = () => {
    console.log("Query: ", query);
    props.handleClick;
  }
  
  const className = injectClassNames( argClassName);

  const type = props.targetLanguage === 'SPEAKING';

  return (
    <div className={styles.externalContainer}>
        <div className={`${styles.wrapContainer} ${styles.gap}`}>
            <div className={styles.container}>
                <h1>Criar Deck</h1>
            </div>
            <div className={styles.container}>
              <label htmlFor="palavra">SELECIONE SEU DECK</label>
              <select name="deck" id="deck" placeholder='selecione'>
                <option value="deck1">Deck 1</option>
              </select>
            </div>
            <span className={styles.spanDivider}>OU</span>
            <div className={styles.container}>
              <label htmlFor="palavra">DIGITE UMA OU MAIS PALAVRAS SEPARADAS POR VÍRGULAS</label>
              <input type="text" name='palavra' placeholder='DIGITE...' onChange={handleChange}/>
            </div>
            <div>
              <button className={styles.createButton} onClick={handleSubmit}>Criar</button>
            </div>
        </div>
    </div>

  );
}

export default CardGenerator;
