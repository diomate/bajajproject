import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitData = (data: object) => {
  return apiClient.post('/bfhl', data);
};
