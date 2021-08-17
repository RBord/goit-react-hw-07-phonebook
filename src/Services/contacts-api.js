import axios from 'axios';
axios.defaults.baseURL = 'https://611bddf422020a00175a47b7.mockapi.io/api/v1';

const APIfetchContacts = () => {
  return axios.get('/contacts');
};

const APIaddContact = contact => {
  return axios.post('/contacts', contact);
};

const APIdeleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};

export {APIfetchContacts, APIaddContact, APIdeleteContact };