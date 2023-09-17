import axios from 'axios';
import 'dotenv/config'
import { credenciais } from '../../utils/constants';
import { idiomas } from '../../utils/constants';

require('dotenv').config()

// Configure as credenciais
process.env.GOOGLE_APPLICATION_CREDENTIALS = "C:\\Users\\Samsung\\Documents\\Text do Speech\\.venv\\uoyant-site-394900-ce075b139fae.json";
// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');


export const useTextToSpeech = async (word: String, cuttingtargetLaguage: String, languageToTranslate: String) => {
    
    const client = new textToSpeech.TextToSpeechClient();
    async function quickStart() {
  // The text to synthesize
    let text = "She is some herbs";

  // Construct the request
    const request = {
        input: {text: text},
        // Select the language and SSML voice gender (optional)
        voice: {languageCode: 'en-US', name: idiomas['inglês'],ssmlGender: 'FEMALE'},
        // select the type of audio encoding
        audioConfig: {audioEncoding: 'MP3'},
    };

    //file's name
    let filename = 'new4'

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);
    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(filename + '.ogg', response.audioContent, 'binary');
    console.log('Audio content written to file: '+filename+'.ogg');
    }
    quickStart();

};


    