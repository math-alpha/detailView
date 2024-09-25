import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchExamData = async () => {
  const response = await axios.get(`${API_URL}/exam`);
  return response.data;
};
