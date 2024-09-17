import React, { useEffect, Fragment } from "react";
import "../App.css";
import { connect } from "react-redux";
import { fetchInitialDatasAsync } from "../thunks/shared";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Poll from "./Poll";
import NewPoll from "./NewPoll";
import Leaderboard from "./LeaderBoard";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";

function App(props) {
  const { dispatch, authedUser } = props;

  useEffect(() => {
    dispatch(fetchInitialDatasAsync());
  }, [dispatch]);

  return (
    <Fragment>
      <LoadingBar />
      <div className="employee-polls-container">
        {authedUser && <NavBar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/questions/:question_id"
            element={
              <ProtectedRoute>
                <Poll />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <NewPoll />
              </ProtectedRoute>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <NotFound />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser,
});

export default connect(mapStateToProps)(App);
