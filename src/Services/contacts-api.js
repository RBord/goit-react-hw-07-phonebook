import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

const APIfetchContacts = () => {
  return axios.get('/contacts');
};

const APIaddContact = todo => {
  return axios.post('/contacts', todo);
};

const APIdeleteContact = todoId => {
  return axios.delete(`/contacts/${todoId}`);
};

export { APIfetchContacts, APIaddContact, APIdeleteContact };