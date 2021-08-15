import { createSelector } from "reselect";

const getContacts = state => state.phonebook.contacts;

const getFilter = state => state.phonebook.filter;

const getFiltredContacts = createSelector(
    [getContacts, getFilter],
    (allContacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return allContacts.filter(({name}) =>
            name.toLowerCase().includes(normalizedFilter)
        );
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getContacts,
    getFilter,
    getFiltredContacts,
};


