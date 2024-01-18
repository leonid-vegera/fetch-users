import { client } from '@/api/httpClient';

export const getUsers = () => {
  // return client.get('/users');
  return client.get('');
}

export const deleteUser = (userId) => {
  // return client.delete(`/users/${userId}`);
  return client.delete(`/${userId}`);
}

export const createUser = (userData) => {
  return client.post('', userData);
}