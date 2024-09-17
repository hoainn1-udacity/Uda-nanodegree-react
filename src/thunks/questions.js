import { saveQuestion, answerQuestion } from "../utils/sharedAPI";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addQuestion, updateAnswerToQuestion } from "../reducers/questions";
import { updateUserAnswer } from "../reducers/users"
import { setBrowserHistory } from "../reducers/browserLog";

export const handleAddQuestion =
  (optionOneText, optionTwoText) => (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(setBrowserHistory(`/question/${question.id}`));
      })
      .then(() => dispatch(hideLoading()));
  };

export const handleAnswerQuestion =
  (questionId, answer) => (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    return answerQuestion({
      authedUser,
      qid: questionId,
      answer,
    })
      .then((result) => {
        if (result === true) {
          dispatch(updateAnswerToQuestion({ questionId, answer, authedUser }));
          dispatch(updateUserAnswer({ questionId, answer, userId: authedUser }));
        }
      })
      .then(() => dispatch(hideLoading()));
  };
