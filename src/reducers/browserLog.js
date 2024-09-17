import { createSlice } from "@reduxjs/toolkit";

const initialState = "/";

export const browserLogSlice = createSlice({
  name: "browserLog",
  initialState,
  reducers: {
    setBrowserHistory: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setBrowserHistory } = browserLogSlice.actions;

export const getBrowserHistory = (state) => state.browserLog;

export default browserLogSlice.reducer;
