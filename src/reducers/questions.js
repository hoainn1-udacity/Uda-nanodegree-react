import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    fetchQuestions: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    getCurrentQuestions: (state) => {
      return { ...state };
    },
    addQuestion: (state, action) => {
      const question = action.payload;

      return {
        ...state,
        [question.id]: question,
      };
    },
    updateAnswerToQuestion: (state, action) => {
      return {
        ...state,
        [action.payload.questionId]: {
          ...state[action.payload.questionId],
          [action.payload.answer]: {
            ...state[action.payload.questionId][action.payload.answer],
            votes: state[action.payload.questionId][
              action.payload.answer
            ].votes.concat(action.payload.authedUser),
          },
        },
      };
    },
  },
});

export const {
  fetchQuestions,
  getCurrentQuestions,
  addQuestion,
  updateAnswerToQuestion,
} = questionSlice.actions;

export default questionSlice.reducer;
