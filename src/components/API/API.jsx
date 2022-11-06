import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export const FetchImages = async query => {
  const responce = await axios.get(BASE_URL, {
    params: {
      q: query,
      page: '1',
      key: '30252226-b18deeaa358b5519991542b67',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
    },
  });
  return responce;
};
