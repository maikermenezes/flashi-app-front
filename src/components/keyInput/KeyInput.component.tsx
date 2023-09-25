import React from "react";
import styles from "./KeyInput.module.scss";
import { BsSearch } from "react-icons/bs";
import { GoCheckCircle } from "react-icons/go";
import { FaKey } from "react-icons/fa";

interface KeyInputProps {
  updateForm: (object: Object) => void;
  handleClick: () => void;
}

const KeyInput = (props: KeyInputProps) => {
  const [googleKey, setGoogleKey] = React.useState("");
  const [openAiKey, setOpenAiKey] = React.useState("");

  const handleChange = (event: any) => {
    setOpenAiKey(event.target.value);
    props.updateForm({ openAiKey: `Bearer ${event.target.value}` });
  };
  const handleChange2 = (event: any) => {
    setGoogleKey(event.target.value);
    console.log("googlekey: ", googleKey);
    props.updateForm({ googleKey: event.target.value });
  };

  return (
    <div className={styles.externalComponent}>
      <div className={styles.internalContainer}>
        <h1>Cole aqui sua chave:</h1>
        <div className={styles.containerSearch}>
          <input
            className={styles.input}
            type="text"
            placeholder="OpenAI API Key"
            onChange={handleChange}
          />
          <FaKey className={styles.iconSearch} />
        </div>
        <div className={styles.containerSearch}>
          <input
            className={styles.input}
            type="text"
            placeholder="Google TTS API Key"
            onChange={handleChange2}
          />
          <FaKey className={styles.iconSearch} />
        </div>
        <div>
          <button className={styles.confirm} onClick={props.handleClick}>
            <GoCheckCircle size="16px" />
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyInput;
