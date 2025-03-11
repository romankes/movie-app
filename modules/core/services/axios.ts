import { appConfig } from '@config';
import axios from 'axios';

export const initAxios = (): void => {
  axios.defaults.baseURL = appConfig.apiUrl;
  axios.defaults.headers['Authorization'] = `Bearer ${appConfig.apiKey}`;
  axios.defaults.timeout = 12000;
  axios.defaults.withCredentials = false;
};
