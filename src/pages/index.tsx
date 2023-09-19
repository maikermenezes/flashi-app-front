import React, { useState } from 'react';
import Page from 'routes/page';
import Language from 'components/language';
import CardGenerator from 'components/cardGenerator';
import Card from 'components/card';
import { updateFor } from 'typescript';
import Welcome from 'components/welcome/Welcome.component';
import { idiomas } from 'utils/constants';

export default function Home(): JSX.Element {
  // return <Page isLanding />;
  // return  <Language targetLanguage="LEARNING" />;


  const [formStep, setFormStep] = useState(0);
  const [langKey, setLangKey] = useState('english');
  const [form, setForm] = useState({
    language: '',
    targetLanguage: '',
    imageUrl: '',
    phrase: '',
    translation: '',
    langKey: '',
  });

  const handleNextStep = () => {
    setFormStep(formStep + 1);
  }

  // const updateForm = (key: string, value: string) => {
  //   console.log("Chave: " +key+" e novo valor: "+value);
  //   setForm({
  //     ...form,
  //     [key]: value
  //   });
  // }


  const updateForm = (object: any) => {
    
    setForm({
      ...form,
      ...object
    });
    console.log('Updated form: ' + JSON.stringify(form));
  }


  return (
    <>
            {formStep == 0 && (
              <Language targetLanguage="SPEAKING" handleClick={handleNextStep} updateForm={updateForm}/>
              // <Welcome />
            )}
            {formStep == 1 && (
              <Language targetLanguage="LEARNING" handleClick={handleNextStep} updateForm={updateForm}/>
            )}
            {formStep == 2 && (
              <CardGenerator handleClick={handleNextStep} updateForm={updateForm} form={form}/>
            )}
            {formStep >= 3 && (
              <Card imageUrl={form.imageUrl} deck={[]} phrase={form.phrase} speechLanguage={form.targetLanguage} translation={form.translation} />
            )}

    </>
  );



}
