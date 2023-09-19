type LanguageSet = {
    key: string;
    voice: string;
};

type Idiomas = {
    [key: string]: LanguageSet;
};

export const idiomas: Idiomas = {
    english: {
        key: 'en-US',
        voice:'en-US-Neural2-H',
    },
    portuguese: {
        key: 'pt-BR',
        voice:'pt-BR-Neural2-C',
    },
    spanish: {
        key: 'es-ES',
        voice:'es-ES-Neural2-A',
    },
    french: {
        key: 'fr-FR',
        voice:'fr-FR-Standard-A',
    },
    german: {
        key: 'de-DE',
        voice:'de-DE-Standard-A',
    },
    italian: {
        key: 'it-IT',
        voice:'it-IT-Standard-A',
    },
    japanese: {
        key: 'ja-JP',
        voice:'ja-JP-Standard-A',
    },
    korean: {
        key: 'ko-KR',
        voice:'ko-KR-Standard-A',
    },
    chinese: {
        key: 'cmn-CN',
        voice:'cmn-CN-Standard-A',
    },
    arabic: {
        key: 'ar-XA',
        voice:'ar-XA-Standard-A',
    },
    hindi: {
        key: 'hi-IN',
        voice:'hi-IN-Standard-A',
    },
    indonesian: {
        key: 'id-ID',
        voice:'id-ID-Standard-A',
    },
    turkish: {
        key: 'tr-TR',
        voice:'tr-TR-Standard-A',
    },
    vietnamese: {
        key: 'vi-VN',
        voice:'vi-VN-Standard-A',
    },
    russian: {
        key: 'ru-RU',
        voice:'ru-RU-Standard-A',
    },
    polish: {
        key: 'pl-PL',
        voice:'pl-PL-Standard-A',
    },
    dutch: {
        key: 'nl-NL',
        voice:'nl-NL-Standard-A',
    },
    swedish: {
        key: 'sv-SE',
        voice:'sv-SE-Standard-A',
    },
    norwegian: {
        key: 'nb-NO',
        voice:'nb-NO-Standard-A',
    },
    danish: {
        key: 'da-DK',
        voice:'da-DK-Standard-A',
    },
    finnish: {
        key: 'fi-FI',
        voice:'fi-FI-Standard-A',
    },
    czech: {
        key: 'cs-CZ',
        voice:'cs-CZ-Standard-A',
    },
    hungarian: {
        key: 'hu-HU',
        voice:'hu-HU-Standard-A',
    },
    romanian: {
        key: 'ro-RO',
        voice:'ro-RO-Standard-A',
    },
    catalan: {
        key: 'ca-ES',
        voice:'ca-ES-Standard-A',
    },
    greek : {
        key: 'el-GR',
        voice:'el-GR-Standard-A',
    },
    hebrew: {
        key: 'he-IL',
        voice:'he-IL-Standard-A',
    },
};


export const credenciais = {
    "type": "service_account",
    "project_id": "buoyant-site-394900",
    "private_key_id": "ce075b139faedae9bde8555273aa743d46dde442",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4n6wHkWAcnNhb\nEVbt6/oJkRRn7vWKapPWkyNEQ8gtV0psTmD2J6T8aA+KBlxDX0PG9eM/2tqEKgjH\ng+sisCY/457qrVnduo3LeF/feJTDBvvtN+G6g3pF/9bMUfHfy15tur8RwEiCvAoQ\nWB5WPGmsxxLdCOuc/CLCTJxgGcEBuztHIvDiEEL/7xIKuoKXBH4faOFg4Ddz/dz6\ng5DPnfhJGrm0mtskJ1nggwKW6HDBiFbwnNDnLxcSsREUjudt93HIMEowvzOP+xXn\n5mA4NzZh+GPUQcqX3y9DASf7F9fZIWyM9Jm3fRG3Q2z7Q8zliz3bs5IZ6r26stE+\nkk5H+FmLAgMBAAECggEAPo8kXMAfADMJgPpEKYSfiiRV9M3c99UbWUcsWRJavzpn\n5oE8i8xtNHYSZeO32cBrF/zzzwxapRQVO33w7CUiIN4BWGX7II35RCv62J9kUR2J\nuh0IaQnqIdQKNdvCiOHBko8H9XzhVSNgiZ9CUFhSOpCOTMWcCOrK4GnTRyES7IGv\nPaDK4FIsJ7Evv37imG9IUOeCD8is4wMEWVD/NYufGO0K+sTfJwMbJAtqC/jkLNII\nH3KicpcAJEsCmRKv8/TG5A0vBeejFJZQghzLyt/T1gniKMj0ZmsFh4L/ODR5madE\nsrPosaJYLBwdpIB/JyHWDk3EGdgY9u/PBXdbnUm4OQKBgQD7AXdJTtWDXPrXu+m3\nVVGmGYRpiSrOQtacca3BaWbPQcvFYDXj5/rhogezgPluW23q8/zCQibEAU+XiPdR\nGbZu7QWRw9nSYXcpTirKe223WJ01RUD8PmTuu221mveMbd6LbLV1UNwXQtlAHuYK\nL7rrPaYV4+tmDquztmKi063ILQKBgQC8TBRkKJ5yp6FiGxgav9OkwZ1gQM++kjsZ\nVfhaa2HFgHzwtkp/pV/TINZJOZz5pBYZeePghNpdqJ0NXdWqJlGCZCbqVCBhKucN\nL1mNgqUPVTCeXCb7+/Jle1yifZhQVBGSDnO9SgQhy1H7JTiQZS0ewHQ3lwCc3K2a\nCqeSChHDlwKBgFznaQBwNmT9yDaLbfEWmjbxYOozA+3+HTMgfGCHI694ufRfLPMj\nDN/wugr9pNTs8F0zW42HMJQBrDT5VBjnfHfIMPSH2hqdSp62OO5jCvP+z4lFDc2P\nRop6QxwhtJh8ng9a+Dro592QN5sdFKYWjoe9dLjLeHh426KT0iRUVxEtAoGAGWeC\nUMkSJ5HqOhxBskozOcVNgFD+Nk3wX0i0Cy71r/nX4XoWrwYW2ZtSjeqR/TRgLuu9\nDOufsocvOUBxtVUaJidxAKh8/d8V8Td0M51uu5TYzGTOdazWVU7BfsLHK/9Lp5L/\nlohH6m9ODj5FVWXxIncAtwdOc9tqKKBLX26wWt0CgYEAtlV4eTdY6jej9qccthaD\nxlQTlnAJaIMMkAnO6+IqdWqvJFZPPj5zsP3Js1yTAwRMqsK3CRtNdaGIsslDmW/4\nkrikPjiEiWi4QIhWj8erYYfK31vMoAJJgCHPFejKfywf1cbQ4SVDfQP2a2DmMTzB\nho5/6d3kmvEKdq4OfVDB+CU=\n-----END PRIVATE KEY-----\n",
    "client_email": "teste-1@buoyant-site-394900.iam.gserviceaccount.com",
    "client_id": "105832712893721612401",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/teste-1%40buoyant-site-394900.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }

//   1. Afrikaans (África do Sul): ‘af-ZA-Standard-A’
// 2. Árabe: ‘ar-XA-Wavenet-D’
// 3. Basco (Espanha): ‘eu-ES-Standard-A’
// 4. Bengali (Índia): ‘bn-IN-Wavenet-A’
// 5. Búlgaro (Bulgária): ‘bg-BG-Standard-A’
// 6. Catalão (Espanha): ‘ca-ES-Standard-A’
// 7. Chinês (Hong Kong): ‘yue-HK-Standard-A’
// 8. Tcheco (República Tcheca): ‘cs-CZ-Wavenet-A’
// 9. Dinamarquês (Dinamarca): ‘da-DK-Neural2-D’
// 10. Holandês (Bélgica): ‘nl-BE-Wavenet-A’
// 11. Holandês (Países Baixos): ‘nl-NL-Wavenet-D’
// 12. Inglês (Austrália): ‘en-AU-Neural2-C’
// 13. Inglês (Índia): ‘en-AU-Wavenet-C’
// 14. Inglês (Reino Unido): ‘en-GB-Neural2-C’
// 15. Inglês (EUA): ‘en-US-Neural2-H’
// 16. Filipino (Filipinas): ‘fil-ph-Neural2-A’
// 17. Finlandês (Finlândia): ‘fi-FI-Wavenet-A’
// 18. Francês (Canadá): ‘fr-CA-Neural2-A’
// 19. **Francês (França):** ‘’
// 20. Galego (Espanha): ‘gl-ES-Standard-A’
// 21. Alemão (Alemanha): ‘de-DE-Neural2-C’
// 22. Grego (Grécia): ‘el-GR-Wavenet-A’
// 23. Gujarati (Índia): ‘gu-IN-Wavenet-A’
// 24. Hebraico (Israel): ‘he-IL-Wavenet-A’
// 25. Hindi (Índia): ‘hi-IN-Neural2-D’
// 26. Húngaro (Hungria): ‘hu-HU-Wavenet-A’
// 27. Islandês (Islândia): ‘is-IS-Standard-A’
// 28. Indonésio (Indonésia): ‘id-ID-Wavenet-A’
// 29. Italiano (Itália): ‘it-IT-Neural2-A’
// 30. Japonês (Japão): ‘ja-JP-Neural2-B’
// 31. Kannada (Índia): ‘kn-IN-Wavenet-A’
// 32. Coreano (Coreia do Sul): ‘ko-KR-Neural2-A’
// 33. Letão (Letônia): ‘lv-LV-Standard-A’
// 34. Lituano (Lituânia): ‘t-LT-Standard-A’
// 35. Malaio (Malásia): ‘ms-MY-Wavenet-C’
// 36. Malaiala (Índia): ‘ml-IN-Wavenet-C’
// 37. Mandarim Chinês: ‘cmn-CN-Wavenet-D’
// 38. Marathi (Índia): ‘mr-IN-Wavenet-C’
// 39. Norueguês (Noruega): ‘nb-NO-Wavenet-E’
// 40. Polonês (Polônia): ‘pl-PL-Wavenet-E’
// 41. Português (Brasil): ‘pt-BR-Neural2-C’
// 42. Português (Portugal): ‘pt-PT-Wavenet-D’
// 43. Punjabi (Índia): ‘pa-IN-Wavenet-C’
// 44. Romeno (Romênia): ‘ro-RO-Wavenet-A’
// 45. Russo (Rússia): ‘ru-RU-Wavenet-A’
// 46. Sérvio (Cirílico): ‘sr-RS-Standard-A’
// 47. Eslovaco (Eslováquia): ‘sk-SK-Wavenet-A’
// 48. Espanhol (Espanha): ‘es-ES-Neural2-A’
// 49. Espanhol (EUA): ‘es-US-Neural2-A’
// 50. Sueco (Suécia): ‘sv-SE-Wavenet-D’
// 51. Tâmil (Índia): ‘ta-IN-Wavenet-C’
// 52. Telugu (Índia): ‘te-IN-Standard-A’
// 53. Tailandês (Tailândia): ‘th-TH-Neural2-C’
// 54. Turco (Turquia): ‘tr-TR-Wavenet-A’
// 55. Ucraniano (Ucrânia): ‘uk-UA-Wavenet-A’
// 56. Vietnamita (Vietnã): ‘vi-VN-Neural2-A’