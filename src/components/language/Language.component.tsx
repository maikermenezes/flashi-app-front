import React, { createElement } from 'react';
import dynamic from 'next/dynamic';
import { injectClassNames } from 'utils/css';
import styles from './Language.module.scss';

const { loader } = styles;

type LanguageProps = {
    targetLanguage?: 'SPEAKING' | 'LEARNING',
    className?: string,
};

const Loader = ({ className = '' }: LanguageProps): JSX.Element => (
  <span
    className={
      injectClassNames(
        loader,
        className
      )
    }
  />
);

export default function Language(props: LanguageProps): JSX.Element {
  const {
    className: argClassName = ''
  } = props;
  
  const className = injectClassNames( argClassName);

  return (
    <div className={styles.externalContainer}>
        <div className={`${styles.container} ${styles.gap}`}>
            <div className={styles.container}>
                <h1>QUAL IDIOMA VOCÊ FALA?</h1>
                <h2>WHAT LANGUAGE DO YOU SPEAK?</h2>
            </div>
            <div className={styles.container}>
                <span className={styles.spanLanguage}>PT-BR</span>
                <span className={styles.spanLanguage}>EN-US</span>
                <span className={styles.spanLanguage}>ES-ES</span>
            </div>
        </div>
    </div>
   

  );
}
