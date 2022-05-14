import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/query';
import filterReducer from './contacts-reducer';
import { contactsApi } from './contacts-api';

const middleware = [...getDefaultMiddleware(), contactsApi.middleware, logger];

export const store = configureStore({
  reducer: {
    contacts: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
