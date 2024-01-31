import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import loggerMiddleware from './loggerMiddleware';

import rootReducer from './wishlistReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['yourPersistedReducer'], 
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(loggerMiddleware),
});


export const persistor = persistStore(store);
