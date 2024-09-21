import axios from 'axios';

export const fetchExamData = async () => {
  const response = await axios.get('http://localhost:5000/api/exam');
  return response.data;
};
