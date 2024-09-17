import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center" style={{ padding: "100px 0" }}>
      <Row>
        <Col>
          <h1 style={{ fontSize: "100px", fontWeight: "bold" }}>404</h1>
          <h2>Oops! Page Not Found</h2>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <Button variant="primary" onClick={() => navigate("/")}>
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
