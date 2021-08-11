// import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');



// const addContact = createAction('phonebook/add', ({ name, number }) => ({
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,
//     },
// }));

export const deleteContact = createAction('phonebook/delete');

export const changeFilter = createAction('phonebook/changeFilter');




// REDUX VANILLA

// const addContact = ({name, number}) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,
//     }
// });
// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });
// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// });