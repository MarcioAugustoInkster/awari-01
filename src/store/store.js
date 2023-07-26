import { configureStore } from '@reduxjs/toolkit';
import { credentialReducer } from './user';
import { storageAdd } from '../utils/locals/Storage';

const store = configureStore({
  reducer: {
    credential: credentialReducer
  }
});

store.subscribe(() => {
  const state = store.getState();
  storageAdd(state);
});

export default store;
