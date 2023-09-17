import axios from 'axios';
import 'dotenv/config'
require('dotenv').config()

export const useGPTRequest = async (word: String, targetLaguage: String, languageToTranslate: String) => {
    
    const prompt = `Generate sentences for each meaning of the word ${word} in ${targetLaguage} followed by the translation to ${languageToTranslate}. Return as a list of objects containing a sentence paired with its translation. Omit the meaning.`

    console.log("API_KEY: ", process.env.API_KEY);

    // axios
    //   .post(
    //     'https://api.openai.com/v1/chat/completions',
    //     {
    //       model: 'gpt-3.5-turbo',
    //       messages: [
    //         {
    //           role: 'user',
    //           content: prompt,
    //         },
    //       ],
    //     },
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization:
    //         `Bearer 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`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log("GPT API Response: ", res.data);
    //     return res.data.choices[0].message.content;
    //   })
    //   .catch((err) => {
    //     console.log('GPT post error: ', err);
    //   })
    //   .finally(() => {});

};


    