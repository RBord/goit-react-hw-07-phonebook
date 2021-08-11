import axios from "axios";
import {addContactRequest, addContactSuccess, addContactError} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:3000';

const addContact = ({ name, number }) => dispatch => {
    const contact = {
        name,
        number,
    };

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
    
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addContact,
};