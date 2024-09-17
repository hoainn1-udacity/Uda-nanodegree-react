import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setBrowserHistory } from "../reducers/browserLog";

const ProtectedRoute = (props) => {
  const { authedUser, children, dispatch } = props;
  const location = useLocation();

  if (!authedUser) {
    dispatch(setBrowserHistory(location.pathname));
    return <Navigate to="/login" />;
  }

  return children;
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
