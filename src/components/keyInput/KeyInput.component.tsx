import React from 'react';
import styles from './KeyInput.module.scss';
import { BsSearch } from 'react-icons/bs';
import { GoCheckCircle } from 'react-icons/go';
import { FaKey } from 'react-icons/fa';


interface KeyInputProps {
    updateForm: (object: Object) => void,
    handleClick: () => void,
}

const KeyInput = ( props: KeyInputProps ) => {

    const [apiKey, setApiKey] = React.useState('');

    const handleChange = (event: any) => {
        setApiKey(event.target.value);
        props.updateForm({apiKey: `Bearer ${event.target.value}`});
    }

    return (
        <div className={styles.externalComponent}>
            <div className={styles.internalContainer}>
                <h1>Cole aqui sua chave:</h1>
                <div className={styles.containerSearch}>
                  <input className={styles.input} type="text" placeholder='API Key' onChange={handleChange} />
                  <FaKey className={styles.iconSearch}/>
                </div>
                <div>
                    <button className={styles.confirm} onClick={props.handleClick}><GoCheckCircle size='16px'/>Confirm</button>
                </div>

            </div>
        </div>
    )
} 

export default KeyInput;