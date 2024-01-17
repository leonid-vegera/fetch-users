// import {request} from "./api";
// import {endpoints} from "./endpoints";
import { client } from '@/api/httpClient';

// export const getUsers = () => {
//   const {users} = endpoints;
//   return request(`/${users}`)
// }
//
// export const removeUser = (id) => {
//   return request()
// }

export const getUsers = () => {
  // return client.get('/users');
  return client.get('');
}

export const deleteUser = (userId) => {
  // return client.delete(`/users/${userId}`);
  return client.delete(`/${userId}`);
}