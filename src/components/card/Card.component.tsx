import React, { createElement, useState } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './Card.module.scss';

import { useGPTRequest } from 'hooks/api';

const { loader } = styles;

type CardProps = {
    imageUrl?: String,
    phrase?: String,
    translation?: String,
    className?: string,
};


const Card = (props: CardProps): JSX.Element => {
  const {
    className: argClassName = '',
    imageUrl,
    phrase,
    translation
  } = props;

  const [query, setQuery] = useState('');

  const  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const handleSubmit = () => {
    console.log("Query: ", query);
  }
  
  const className = injectClassNames( argClassName);

  return (
    <div className={styles.externalContainer}>
        <div className={`${styles.cardContainer} ${styles.gap}`}>
            <img className={styles.imageStyling} src="https://source.unsplash.com/yWG-ndhxvqY" alt="imagem gerada" />
        </div>
    </div>

  );
}

export default Card;
