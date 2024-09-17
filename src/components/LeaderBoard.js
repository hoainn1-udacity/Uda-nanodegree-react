import { Table, Container, Row, Col, Image } from "react-bootstrap";
import { connect, useSelector } from "react-redux";

export const Leaderboard = () => {
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);

  const createdQuestions = (username) => {
    const createdQuestionsByUser = Object.values(questions).filter(
      (q) => q.author === username
    );
    return createdQuestionsByUser.length;
  };
  const totalPolls = (answered, created) => {
    return answered + created;
  };

  const leaderboard = Object.values(users).sort(
    (a, b) =>
      totalPolls(Object.keys(b.answers).length, b.questions.length) -
      totalPolls(Object.keys(a.answers).length, a.questions.length)
  );

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="text-center mb-4">Leaderboard</h3>
          <Table striped bordered hover>
            <thead>
              <tr className="text-center mb-4">
                <th>Users</th>
                <th>Answered</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user) => (
                <tr key={user.id}>
                  <td>
                    <Image
                      src={user.avatarURL}
                      roundedCircle
                      width="40"
                      height="40"
                      className="me-2"
                    />
                    <strong>{user.name}</strong>
                  </td>
                  <td className="text-center mb-4">
                    {Object.keys(user.answers).length}
                  </td>
                  <td className="text-center mb-4">
                    {createdQuestions(user.id)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default connect()(Leaderboard);
