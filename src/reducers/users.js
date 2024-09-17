import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsers: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    getCurrentUsers: (state) => {
      return { ...state };
    },
    updateUserAnswer: (state, action) => {
      return {
        ...state,
        [action.payload.userId]: {
          ...state[action.payload.userId],
          answers: {
            ...state[action.payload.userId].answers,
            [action.payload.questionId]: action.payload.answer
          }
        }
      }
    }
  },
});

export const { fetchUsers, getCurrentUsers, updateUserAnswer } = userSlice.actions;

export default userSlice.reducer;
