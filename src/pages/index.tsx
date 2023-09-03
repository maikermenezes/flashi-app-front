import React, { useState } from 'react';
import Page from 'routes/page';
import Language from 'components/language';
import CardGenerator from 'components/cardGenerator';
import Card from 'components/card';
import { updateFor } from 'typescript';

export default function Home(): JSX.Element {
  // return <Page isLanding />;
  // return  <Language targetLanguage="LEARNING" />;


  const [formStep, setFormStep] = useState(0);
  const [form, setForm] = useState({
    language: '',
    targetLanguage: '',
    imageUrl: '',
    phrase: '',
    translation: '',
  });

  const handleNextStep = () => {
    console.log("FormStep: ", formStep);
    setFormStep(formStep + 1);
    console.log("Updated FormStep: ", formStep);
  }

  const updateForm = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value
    });
  }


  return (
    <>
            {formStep == 0 && (
              <Language targetLanguage="SPEAKING" handleClick={handleNextStep} updateForm={updateForm}/>
            )}
            {formStep == 1 && (
              <Language targetLanguage="LEARNING" handleClick={handleNextStep} updateForm={updateForm}/>
            )}
            {formStep == 2 && (
              <CardGenerator handleClick={handleNextStep} updateForm={updateForm}/>
            )}
            {formStep >= 3 && (
              <Card imageUrl={form.imageUrl} phrase={form.phrase} translation={form.translation} />
            )}

    </>
  );



}
