import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

const APIfetchContacts = () => {
  return axios.get('/contacts');
};

const APIaddContact = contact => {
  return axios.post('/contacts', contact);
};

const APIdeleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};

export { APIfetchContacts, APIaddContact, APIdeleteContact };