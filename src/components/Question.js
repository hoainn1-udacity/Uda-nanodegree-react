import { useTimeStampFormat } from "../utils/useTimeStampFormat";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Question = (props) => {
  const { question } = props;
  const navigate = useNavigate();
  const time = useTimeStampFormat(question.timestamp);
  const onClickQuestion = () => {
    navigate(`questions/${question.id}`)
  }

  return (
    <Card className="h-100 border rounded">
      <Card.Body className="text-center">
        <Card.Title className="border-bottom pb-2">{question.author}</Card.Title>
        <Card.Text className="mb-3">{time}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button onClick={() => onClickQuestion()} variant="outline-success">Show</Button>
      </Card.Footer>
    </Card>
  );
};

export default Question;
