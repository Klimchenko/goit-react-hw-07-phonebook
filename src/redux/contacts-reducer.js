import { createSlice } from '@reduxjs/toolkit';

const filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changesFilter: (_, action) => action.payload,
  },
});

export const { changesFilter } = filter.actions;
export default filter.reducer;

//---------------------------------------
//----createSlice------
//---------------------------------------
/* import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export const items = createSlice({
  name: 'items',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },
    deleteContacts(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

const filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changesFilter: (_, action) => action.payload,
  },
});

export const { addContacts, deleteContacts } = items.actions;
export const { changesFilter } = filter.actions;

export default combineReducers({
  filter: filter.reducer,
  items: items.reducer,
}); */
