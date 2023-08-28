import axios from 'axios';
import 'dotenv/config'
require('dotenv').config();

export const useGPTRequest = async (word: String, targetLaguage: String, languageToTranslate: String) => {
    
    const prompt = `Generate sentences for each meaning of the word ${word} in ${targetLaguage} followed by the translation to ${languageToTranslate}:`

    const API_KEY = process.env.API_KEY;

   return axios
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
            `Bearer ${API_KEY}`,
          },
        }
      )
      .then((res) => {
        console.log("GPT API Response: ", res.data);
      })
      .catch((err) => {
        console.log('GPT post error: ', err);
      })
      .finally(() => {});

};


    