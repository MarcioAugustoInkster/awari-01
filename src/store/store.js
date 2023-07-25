import { configureStore } from '@reduxjs/toolkit';
import { credentialReducer } from './user';

const store = configureStore({
  reducer: {
    credential: credentialReducer
  }
});

export default store;
