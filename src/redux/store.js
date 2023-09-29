import { configureStore } from '@reduxjs/toolkit';

import phonebook from './phonebookReducer';

const store = configureStore({
  reducer: {
    phonebook: phonebook,
  },
});

export default store;
