import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import phonebookReducer  from '../Redux/Phonebook/phonebook-reducer';
const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
    
];

const store = configureStore({
    reducer: {
        phonebook: phonebookReducer,
    },
    middleware,
});

export default store;
