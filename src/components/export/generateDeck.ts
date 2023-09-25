import axios from "axios";
import { CardType } from "components/card/Card.component";

function decodeBase64(base64: string): ArrayBuffer {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function generateGoogleTTS(
  text: string,
  API_KEY: string,
  languageCode: string
) {
  const GOOGLE_TTS_API_ENDPOINT =
    "https://texttospeech.googleapis.com/v1/text:synthesize";

  console.log("text to speech: ", text);

  try {
    const response = await axios.post(
      GOOGLE_TTS_API_ENDPOINT + "?key=" + API_KEY,
      {
        input: {
          text: text,
        },
        voice: {
          languageCode: languageCode,
          ssmlGender: "NEUTRAL",
        },
        audioConfig: {
          audioEncoding: "MP3",
        },
      }
    );

    const audioContent = response.data.audioContent;

    // Decode base64 string to ArrayBuffer
    const audioData = decodeBase64(audioContent);

    const randomNum = getRandomNumber(0, 1000000000000);

    const file = new File([audioData], `audio${randomNum}.mp3`, {
      type: "audio/mp3",
      lastModified: new Date().getTime(),
    });

    return file;
  } catch (error) {
    console.error("Error generating Google TTS:", error);
    throw error;
  }
}

export const generateDeck = async (
  deck: CardType[],
  API_KEY: string,
  deckName: string,
  languageCode: string
) => {
  try {
    console.log("API KEY: ", API_KEY);
    console.log("language code: ", languageCode);
    const formData = new FormData();

    for (const card of deck) {
      const audioFile = await generateGoogleTTS(
        card.phrase,
        API_KEY,
        languageCode
      );
      console.log("audioblob: ", audioFile);
      formData.append("list_audio", audioFile);
      formData.append("list_image_url", card.image);
      formData.append("list_sentence", card.phrase);
      formData.append("list_translation", card.translation);
    }

    formData.append("deck_name", deckName);
    formData.append("n_flashcard", deck.length.toString());

    function formDataToObject(formData: any) {
      const obj = {};
      formData.forEach((value: never, key: keyof typeof obj) => {
        obj[key] = value;
      });
      return obj;
    }

    // Example usage:
    const dataObj = formDataToObject(formData);
    console.log(dataObj);

    axios
      .post("https://genanki-server.onrender.com/converter", formData, {
        responseType: "arraybuffer", // for receiving the file as a binary stream
      })
      .then((response) => {
        // Create blob from received data
        const blob = new Blob([response.data], {
          type: "application/octet-stream",
        });
        const url = URL.createObjectURL(blob);

        // Create download link and click it to start download
        const a = document.createElement("a");
        a.href = url;
        a.download = "deck_audio_teste14.apkg";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        console.log("Deck created and download initiated!");
      })
      .catch((error) => {
        console.log(`API Error: ${error}}`);
      });
  } catch (error) {
    console.log(error);
  }
};
