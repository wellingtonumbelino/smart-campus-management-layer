import axios from 'axios';

const apiRoom = axios.create({
  baseURL: '/apiOrion',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const apiDevice = axios.create({
  baseURL: '/apiIot/v1',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export { apiRoom, apiDevice };
