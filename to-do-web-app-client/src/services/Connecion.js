import axios from 'axios';

const AxiosConncection = axios.create({
  baseURL: 'http://localhost:5000',
});

export default AxiosConncection;
