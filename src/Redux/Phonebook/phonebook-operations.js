import {APIdeleteContact, APIfetchContacts, APIaddContact} from '../../Services/contacts-api'
import { createAsyncThunk } from '@reduxjs/toolkit';

// const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactRequest());
//     try {
//         const { data } = await APIfetchContacts();
//         dispatch(fetchContactSuccess(data));
//     } catch (error) {
//         dispatch(fetchContactError(error));
//     }
// }
const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const { data } = await APIfetchContacts();
        return data;
    }

);

const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }) => {
        const contact = { name, number };
        const { data } = await APIaddContact(contact);
        return data;
    }
);
// const addContact = ({ name, number }) => async dispatch => {
//     const contact = {
//         name,
//         number,
//     };

//     dispatch(addContactRequest());

//     try {
//         const { data } = await APIaddContact(contact);
//         dispatch(addContactSuccess(data));
//     } catch (error) {
//         dispatch(addContactError(error));
//     } 
// }
const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId) => {
        const { data } = await APIdeleteContact(contactId);
        return data;
    }
)
// const deleteContact = contactId => async dispatch => {
//     dispatch(deleteContactRequest());
//     try {
//         await APIdeleteContact(contactId);
//         dispatch(deleteContactSuccess(contactId));
//     } catch (error) {
//         dispatch(deleteContactError(error))
//     }
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addContact,
    deleteContact,
    fetchContacts,
};
