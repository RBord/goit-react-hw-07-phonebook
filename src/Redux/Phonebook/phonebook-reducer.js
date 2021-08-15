import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact} from './phonebook-operations';
import {
    changeFilter,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './phonebook-actions';

const contacts = createReducer([], {
    [fetchContacts.fulfilled]: (_, {payload}) => payload,
    [addContact.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => 
        state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
})

const loading = createReducer(false, {
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
})

export default combineReducers({
    contacts,
    filter,
    loading,
})
