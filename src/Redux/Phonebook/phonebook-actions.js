import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction('phonebook/add', ({ name, number }) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
}));

const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/changeFilter');

export { addContact, deleteContact, changeFilter };


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