import { createAction } from "@reduxjs/toolkit";

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('phonebook/changeFilter');
