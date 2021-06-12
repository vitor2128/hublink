import axios from 'axios';

// import { getToken } from '../hooks/auth';

export const api = axios.create({
  baseURL: 'http://192.168.0.141:3333',
  headers: {
    'Content-type': 'application/json',
  },
});

// export const apiAuth = axios.create({
//   baseURL: 'https://localhost:5001/api',
//   headers: {
//     'Content-type': 'application/json',
//   },
// });

// api.interceptors.request.use(async (config) => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
