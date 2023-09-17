import axios from 'axios';
import 'dotenv/config'
require('dotenv').config();

export const useDALLERequest = async (prompt: String) => {

    const API_KEY = process.env.API_KEY;

    axios
    .post(
      'https://api.openai.com/v1/images/generations',
      {
        prompt: prompt,
        n: 1,
        size: '256x256',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            `Bearer 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`,
        },
      }
    )
    .then((res) => {
        console.log("DALLE API Response: ", res.data);
    })
    .catch((err) => {
        console.log('DALLE post error: ', err);
    })
    .finally(() => {
    });
};
    