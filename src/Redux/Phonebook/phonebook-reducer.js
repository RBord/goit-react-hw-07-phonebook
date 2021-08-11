import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './phonebook-actions';

const contacts = createReducer([], {
    [fetchContactSuccess]: (_, {payload}) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => 
        state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
})

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
})

export default combineReducers({
    contacts,
    filter,
    loading,
})

// REDUX VANILLA

// const contacts = (state = [], {type, payload}) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];
        
//         case types.DELETE:
//             return state.filter(contact => contact.id !== payload);
        
//         default:
//             return state;
//     }
// };
// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case [actions.changeFilter]:
//             return payload;
        
        
//         default:
//             return state;
//     }
// };