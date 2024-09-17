import { Link } from "react-router-dom";
import { NO_USER_AVATAR } from "../contants/users";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { handleDeAuthenticateUser } from "../thunks/users";

export function NavBar(props) {
  const { userInfo, dispatch } = props;

  const onUserLogout = () => {
    dispatch(handleDeAuthenticateUser());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="nav-link" to="/">
          Home
        </Link>

        <Nav className="me-auto">
          <Link className="nav-link" to="/leaderboard">
            Leaderboard
          </Link>
          <Link className="nav-link" to="/add">
            New
          </Link>
        </Nav>

        <Nav>
          <Image
            className="nav-bar-avatar"
            src={
              new URL(
                `${userInfo?.avatarURL ? userInfo?.avatarURL : NO_USER_AVATAR}`
              )
            }
            roundedCircle
          />
          <Navbar.Text className="me-2 avatar-name">
            {userInfo?.name}
          </Navbar.Text>
          <Link onClick={() => onUserLogout()} className="nav-link avatar-name">
            Logout
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = ({ users, authedUser }) => ({
  userInfo: users[authedUser],
});

export default connect(mapStateToProps)(NavBar);
