import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './phonebook-actions';
import {APIdeleteContact, APIfetchContacts, APIaddContact} from '../../Services/contacts-api'

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactRequest());
    try {
        const { data } = await APIfetchContacts();
        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error));
    }
    // БЕЗ async await
    // axios.get('/contacts')
    //     .then(({ data }) => dispatch(fetchContactSuccess(data)))
    //     .catch(error => dispatch(fetchContactError(error)));
}

const addContact = ({ name, number }) => async dispatch => {
    const contact = {
        name,
        number,
    };

    dispatch(addContactRequest());

    try {
        const { data } = await APIaddContact(contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error));
    }

    // БЕЗ async await
    // axios
    //     .post('/contacts', contact)
    //     .then(({ data }) => dispatch(addContactSuccess(data)))
    //     .catch(error => dispatch(addContactError(error)));
    
};
const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest());
    try {
        await APIdeleteContact(contactId);
        dispatch(deleteContactSuccess(contactId));
    } catch (error) {
        dispatch(deleteContactError(error))
    }

    // БЕЗ async await
    // axios
    //     .delete(`/contacts/${contactId}`)
    //     .then(() => dispatch(deleteContactSuccess(contactId)))
    //     .catch(error => dispatch(deleteContactError(error)));
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addContact,
    deleteContact,
    fetchContacts,
};