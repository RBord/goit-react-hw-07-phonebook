import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from './phonebook-actions';

const contacts = createReducer([], {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) => 
        state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
})

export default combineReducers({
    contacts,
    filter,
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