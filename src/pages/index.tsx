import React, { useContext, useState } from "react";
import Language from "components/language";
import CardGenerator from "components/cardGenerator";
import Card from "components/card";
import KeyInput from "components/keyInput";
import Welcome from "components/welcome/Welcome.component";
import { idiomas } from "utils/constants";
import { CardType } from "components/card/Card.component";
import { AuthContext } from "contexts/AuthContext";
import RegistrationScreen from "routes/registration/registration";
import Header from "components/header";
import Deck from "components/deck";
import HeaderComponent2 from "components/header/Header.component2";

export default function Home(): JSX.Element {
  // return <Page isLanding />;
  // return  <Language targetLanguage="LEARNING" />;

  const [formStep, setFormStep] = useState(0);
  const [langKey, setLangKey] = useState("english");
  const [generatedDeck, setGeneratedDeck] = useState<CardType[]>([]);
  const [form, setForm] = useState({
    language: "",
    targetLanguage: "",
    imageUrl: "",
    phrase: "",
    translation: "",
    langKey: "",
    apiKey: "",
    deck: [],
  });

  const handleDeckGeneration = (novoCard: CardType) => {
    setGeneratedDeck([...generatedDeck, novoCard]);
    console.log("Deck gerado: " + JSON.stringify(generatedDeck));
  }

  const handleNextStep = () => {
    setFormStep(formStep + 1);
  };

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
      ...object,
    });
    console.log("Updated form: " + JSON.stringify(form));
  };

  const auxDeck: CardType[] = [
    {
      image: form?.imageUrl,
      phrase: form?.phrase,
      translation: form?.translation,
    },
  ];

  // const { isAuthenticated } = useContext(AuthContext);
  const isAuthenticated = true;

  if (isAuthenticated) {
    return (
      <>
        <Header />
        {formStep == 0 && (
          <KeyInput handleClick={handleNextStep} updateForm={updateForm} />
        )}
        {formStep == 1 && (
          <Language
            targetLanguage="SPEAKING"
            handleClick={handleNextStep}
            updateForm={updateForm}
          />
          // <Welcome />
        )}
        {formStep == 2 && (
          <Language
            targetLanguage="LEARNING"
            handleClick={handleNextStep}
            updateForm={updateForm}
          />
        )}
        {formStep == 3 && (
          <CardGenerator
            handleClick={handleNextStep}
            updateForm={updateForm}
            form={form}
          />
        )}
        {formStep >= 4 && (
          <Deck
            cardList={form.deck}
            speechLanguage={form.targetLanguage}
            name="Deck gerado"
          />
        )}
      </>
    );
  } else {
    return (
      <>
        <Header />
        <RegistrationScreen />
      </>
    );
  }
}
