import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

const addContact = todo => {
  return axios.post('/contacts', todo).then(({ data }) => data);
};

const deleteContact = todoId => {
  return axios.delete(`/contacts/${todoId}`);
};

export { fetchContacts, addContact, deleteContact };