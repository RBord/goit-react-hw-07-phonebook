import { APIdeleteContact, APIfetchContacts, APIaddContact } from '../../Services/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, {rejectWithValue}) => {
        try {
            const { data } = await APIfetchContacts();
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, {rejectWithValue}) => {
        try {
            const contact = { name, number };
            const { data } = await APIaddContact(contact);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            await APIdeleteContact(contactId);
            return contactId;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

