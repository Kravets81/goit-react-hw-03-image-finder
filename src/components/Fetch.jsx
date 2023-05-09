import axios from 'axios';

export const fatchImages = async (query, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    method: 'get',
    params: {
      key: '34695453-1e6d3abe8c76f1bde8697ab1b',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });

  return response.data.hits;
};
