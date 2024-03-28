export const IMG_URL = "https://image.tmdb.org/t/p/w500/";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};
export const SUPPORTED_LANG = [
  {
    identifier: "en",
    name: "English",

  },
  {
    identifier: "hi",
    name: "हिंदी",

  },
  {
    identifier: "es",
    name: "Spanish",

  },
  {
    identifier: "ta",
    name: "தமிழ்",

  },
  {
    identifier: "te",
    name: "తెలుగు",

  },
  {
    identifier: "fr",
    name: "French",

  },
];
