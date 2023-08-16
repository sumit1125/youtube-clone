import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  methods: 'GET',
  url: BASE_URL,

  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '1bace4fb68msh1db7f6b6548cd8dp169719jsn08325bf00904',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}