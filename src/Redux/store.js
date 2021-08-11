import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import phonebookReducer  from '../Redux/Phonebook/phonebook-reducer';

// const contactPersistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['filter'],
// };
 
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

// const persistor = persistStore(store);

export default store;

    
// REDUX VANILLA    
// const rootReducer = combineReducers({
//     phonebook: phonebookReducer,
// })