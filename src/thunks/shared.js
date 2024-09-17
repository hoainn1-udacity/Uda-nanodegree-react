import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getInitialDatas } from "../utils/sharedAPI";
import { fetchUsers } from "../reducers/users";
import { fetchQuestions } from "../reducers/questions";

export const fetchInitialDatasAsync = () => async (dispatch) => {
  dispatch(showLoading());
  return await getInitialDatas().then(({ users, questions }) => {
    dispatch(fetchUsers(users));
    dispatch(fetchQuestions(questions));
    dispatch(hideLoading());
  });
};
