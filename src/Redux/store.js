import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer  from '../Redux/Phonebook/phonebook-reducer';

const contactPersistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter'],
};

const store = configureStore({
    reducer: {
        phonebook: persistReducer (contactPersistConfig, phonebookReducer),
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

const persistor = persistStore(store);

export { store, persistor };

    
// REDUX VANILLA    
// const rootReducer = combineReducers({
//     phonebook: phonebookReducer,
// })