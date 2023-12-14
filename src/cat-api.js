import axios from 'axios';


axios.defaults.headers.common['x-api-key'] =
  'live_EmmfVRSZsDRrgnqoSBOrr065jD4Izmq3zJTGqiFprCCe0PbYudZAmZPO2mV0T0JW';

export const fetchBreeds = () => {
  return axios.get('https://api.thecatapi.com/v1/breeds');
};

export const fetchCatByBreed = (breedId) => {
    
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
};