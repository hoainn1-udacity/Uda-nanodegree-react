import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const authedUserSlice = createSlice({
  name: "authedUser",
  initialState,
  reducers: {
    authenticateUser: (_state, action) => {
      return action.payload;
    },
    deAuthenticateUser: () => {
      return null;
    },
  },
});

export const { authenticateUser, deAuthenticateUser } =
  authedUserSlice.actions;

export default authedUserSlice.reducer;
