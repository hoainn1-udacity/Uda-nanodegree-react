import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import userReducer from "../reducers/users";
import questionReducer from "../reducers/questions";
import authedUserSlice from "../reducers/authedUser";
import browserLogSlice from "../reducers/browserLog";
import { logger } from "../middlewares/logger";

export const store = configureStore({
  reducer: {
    loadingBar: loadingBarReducer,
    users: userReducer,
    questions: questionReducer,
    authedUser: authedUserSlice,
    browserLog: browserLogSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
