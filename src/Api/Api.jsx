import axios from "axios";

export const getBooksList = () => {
  const API_KEY = 'Your_API_Key'; 
  const url = 'https://api.nytimes.com/svc/books/v3/lists.json';

  return axios.get(url, {
    params: {
      'api-key': API_KEY,
      'list': 'hardcover-fiction',
    },
  })
  .then(response => {
    return response.data.results;
  })
  .catch(error => {
    console.error('Error fetching the data:', error);
    throw error; 
  });
};