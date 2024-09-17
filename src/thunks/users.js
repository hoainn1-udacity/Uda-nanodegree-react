import { authenticateUser, deAuthenticateUser } from "../reducers/authedUser";

export const handleAuthenticateUser =
  (username, password, users) => (dispatch) => {
    const isAuthed = users[username]?.password === password;
    if(isAuthed) {
      return dispatch(authenticateUser(username));
    }
    dispatch(authenticateUser(null));
  };

export const handleDeAuthenticateUser =
  () => (dispatch) => {
    dispatch(deAuthenticateUser());
  };
