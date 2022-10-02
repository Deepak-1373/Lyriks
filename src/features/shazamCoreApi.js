import axios from 'axios';

const baseURL = 'https://shazam-core.p.rapidapi.com/v1';
const headers = {
  'X-RapidAPI-Key': import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
};

export const getTopCharts = axios.get(`${baseURL}/charts/world`, { headers });
