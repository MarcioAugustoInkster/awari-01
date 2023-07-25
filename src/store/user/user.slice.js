import { createSlice } from '@reduxjs/toolkit';

const credentialSlice = createSlice({
  name: 'credential',
  initialState: {},
  reducers: {
    init: (state, action) => {
      return action.payload;
    },
    add: (state, action) => {
      return action.payload;
    },
    remove: (state, action) => {
      const cred = action.payload;
      const exists = state.includes(user => user.id === cred.id && !cred.logged);
      if (exists) {
        return {};
      }
    }
  }
});

export const actions = credentialSlice.actions;
export const reducer = credentialSlice.reducer;

export default credentialSlice;
