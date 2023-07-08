import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
});

export default axiosApi;
