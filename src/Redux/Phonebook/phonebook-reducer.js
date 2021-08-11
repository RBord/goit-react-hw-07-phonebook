import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContactRequest, addContactSuccess, addContactError, deleteContact, changeFilter } from './phonebook-actions';

const contacts = createReducer([], {
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) => 
        state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
})

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
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