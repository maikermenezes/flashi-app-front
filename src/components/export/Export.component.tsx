import React from 'react';
import styles from './Export.module.scss';
import { TiExportOutline } from 'react-icons/ti';
import { TfiSave } from 'react-icons/tfi';


const Export = () => {
    return (
        <div className={styles.externalComponent}>
            <div className={styles.internalContainer}>
               <h1>Tudo Pronto</h1>
               <div className={styles.saveContainer}>
                    <button><TfiSave size={22}/> Guarde seu deck</button>
                    <p>Veja o deck gerado em "Decks"</p>
               </div>
               <div className={styles.exportContainer}>
                    <button><TiExportOutline size={30}/> Exportar .apkg</button>
                    <p>Exporte seu deck em formato compatível com o Anki. 
                        Ao importar na plataforma, você consegue utilizar repetição 
                        espaçada e personalização de estilo</p>
               </div>
            </div>
        </div>
    )
} 

export default Export;