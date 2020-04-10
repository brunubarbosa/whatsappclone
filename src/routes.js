import axios from 'axios';

export default async function route(url) {
  const {data} = await axios.get(url);
  return data.results;
}