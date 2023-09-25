import {configureStore} from '@reduxjs/toolkit';
// import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import rootReducer from './features/index.ts'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';


const createNoopStorage = () => {
    return {
        getItem(_key: any) {
            return Promise.resolve(null);
        },
        setItem(_key: any, value: any) {
            return Promise.resolve(value);
        },
        removeItem(_key: any) {
            return Promise.resolve();
        },
    };
};
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();


const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [],
});

export const persistor = persistStore(store);
export default store;



