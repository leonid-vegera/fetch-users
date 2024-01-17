import axios from 'axios';

export const client = axios.create({
  // baseURL: 'https://reqres.in/api',
  baseURL: 'https://65141e918e505cebc2eac3e0.mockapi.io/players/',
})