import React, { useState } from "react";
import loginImg from "../login.svg";
import { USERNAME_INPUT, PASSWORD_INPUT } from "../contants/login";
import { useDebouncedCallback } from "use-debounce";
import { connect } from "react-redux";
import { handleAuthenticateUser } from "../thunks/users";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

export function Login(props) {
  const { users, dispatch, browserLog } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userNameInputDebounced = useDebouncedCallback((value) => {
    setUserName(value);
  }, 200);

  const passwordInputDebounced = useDebouncedCallback((value) => {
    setPassword(value);
  }, 200);

  const handleInputChanges = (e, type) => {
    e.preventDefault();
    if (type === USERNAME_INPUT) {
      userNameInputDebounced(e.target.value);
    } else {
      passwordInputDebounced(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAuthenticateUser(userName, password, users));
    setUserName("");
    setPassword("");
    navigate(browserLog);
  };

  return (
    <Container className="mt-5">
      <div className="employee-polls-login-section">
        <header className="employee-polls-login-main">
          <h1>Employee Polls</h1>
          <img
            src={loginImg}
            className="employee-polls-login-section-logo"
            alt="Login-logo"
          />
          <Form onSubmit={handleSubmit}>
            <Form.Label className="text-center fs-3">Login</Form.Label>
            <Form.Group controlId="input-username-credentials" className="mt-3">
              <Form.Control
                type="text"
                placeholder="User name"
                onChange={(e) => handleInputChanges(e, USERNAME_INPUT)}
              />
            </Form.Group>

            <Form.Group controlId="input-password-credentials" className="mt-3">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => handleInputChanges(e, PASSWORD_INPUT)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Submit
            </Button>
          </Form>
        </header>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ users, authedUser, browserLog }) => ({
  users,
  authedUser,
  browserLog,
});

export default connect(mapStateToProps)(Login);
