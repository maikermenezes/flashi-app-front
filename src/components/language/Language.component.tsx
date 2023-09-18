import React, { MouseEventHandler, createElement } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './Language.module.scss';
import Flag from 'react-flagkit';
import { GoCheckCircle } from 'react-icons/go';
import { BsSearch } from 'react-icons/bs';

import { useGPTRequest } from 'hooks/api';

const { loader } = styles;

type LanguageProps = {
    targetLanguage?: 'SPEAKING' | 'LEARNING',
    className?: string,
    formStep?: number,
    appLanguage?: string,
    handleClick: () => void,
    updateForm: (object: Object) => void,
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
  const selectedLanguage = props.appLanguage === "PORTUGUESE"

  const text = {
    title: type ? 'Qual idioma você fala?' : 'Qual idioma você está aprendendo?',
    subtitle: type ? 'What language do you speak' : 'What language are you learning?',
    buttonLabel: selectedLanguage ? 'Confirmar' : 'Confirm',
  }


  const [language, setLanguage] = React.useState('');


  const handleClick = () => { 

    props.handleClick();
  
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Selected Language:  ', language);
    setLanguage(event.target.value);
  };

  const handleSelectLanguage = (selectedLanguage: string) => {
    console.log('Selected Language:  ', selectedLanguage);
    setLanguage(selectedLanguage);
  }

  const handleLanguageChange = async() => {

    if(type){
      props.updateForm({'language': language});
      console.log('Language:  ', language);
    }else{
      props.updateForm({'targetLanguage': language});
      console.log('Target Language:  ', language);
    }

    handleClick();
  }

  return (
    <div className={styles.externalContainer}>
        <div className={`${styles.container} ${styles.gap}`}>
            <div className={styles.container}>
                <h1>{text.title}</h1>
            </div>
            <div className={styles.container}>
                <button className={styles.spanLanguage} value='portuguese' onClick={() =>{
                  handleSelectLanguage('portuguese');
                }}><Flag country="BR" />Português (Brasil)</button>
                <button className={styles.spanLanguage} value='english' onClick={() =>{
                  handleSelectLanguage('english');
                }}><Flag country="US" />English (USA)</button>
                <button className={styles.spanLanguage} value='spanish' onClick={() =>{
                  handleSelectLanguage('spanish');
                }}><Flag country="ES" />Español (España)</button>
                <button className={styles.spanLanguage} value='french' onClick={() =>{
                  handleSelectLanguage('french');
                }}><Flag country="FR" />Français (France)</button>
                <button className={styles.spanLanguage} value='italian' onClick={() =>{
                  handleSelectLanguage('italian');
                }}><Flag country="IT" />Italiano (Italia)</button>
                <div className={styles.containerSearch}>
                  <input className={styles.input} type="text" placeholder='Digite a língua desejada' onChange={handleChange} />
                  <BsSearch className={styles.iconSearch}/>
                </div>
            </div>
            <div>
              <button className={styles.confirm} onClick={handleLanguageChange}><GoCheckCircle size='16px'/>{text.buttonLabel}</button>
            </div>
        </div>
    </div>

  );
}

export default Language;
