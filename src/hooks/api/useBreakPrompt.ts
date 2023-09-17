
export const useBreakPrompt = (text: string) => {

    const entries = text.split(/\d+\.\s+/).filter(Boolean);
    // Initialize an array to store the objects
    const data = [];

    // Iterate through the entries and extract the data
    for (let i = 0; i < entries.length; i++) {
    const entry = entries[i].split('.')[0];
    const translation = entries[i].replace('Translation:', '').trim().split('.')[1];

    const obj = {
        originalLanguage: entry,
        translation: translation
    };

    data.push(obj);
    }

    console.log(data);

    return data;
};
