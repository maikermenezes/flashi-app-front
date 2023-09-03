import React, { MouseEventHandler, createElement } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './Language.module.scss';

import { useGPTRequest } from 'hooks/api';

const { loader } = styles;

type LanguageProps = {
    targetLanguage?: 'SPEAKING' | 'LEARNING',
    className?: string,
    formStep?: number,
    handleClick: () => void,
    updateForm: (key: string, value: string) => void,
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

const Language = (props: LanguageProps): JSX.Element => {
  const {
    className: argClassName = ''
  } = props;

 
  const className = injectClassNames( argClassName);

  const type = props.targetLanguage === 'SPEAKING';

  const text = {
    title: type ? 'QUAL IDIOMA VOCÊ FALA?' : 'QUAL IDIOMA VOCÊ ESTÁ APRENDENDO?',
    subtitle: type ? 'WHAT LANGUAGE DO YOU SPEAK?' : 'WHAT LANGUAGE ARE YOU LEARNING?',
  }

  const [language, setLanguage] = React.useState('');

  const handleClick = () => {
  
    console.log(this);

    // if(type){
    //   props.updateForm('language', language);
    // }
    // else{
    //   props.updateForm('targetLanguage', language);
    // }

    props.handleClick();
    // useGPTRequest('tear', 'english', 'portuguese').then((response) => {
    //   console.log("Response: ", response);
    // }); 
  }
  

  return (
    <div className={styles.externalContainer}>
        <div className={`${styles.container} ${styles.gap}`}>
            <div className={styles.container}>
                <h1>{text.title}</h1>
                <h2>{text.subtitle}</h2>
            </div>
            <div className={styles.container}>
                <span className={styles.spanLanguage} onClick={handleClick}>PT-BR</span>
                <span className={styles.spanLanguage} onClick={handleClick}>EN-US</span>
                <span className={styles.spanLanguage} onClick={handleClick}>ES-ES</span>
            </div>
        </div>
    </div>

  );
}

export default Language;
