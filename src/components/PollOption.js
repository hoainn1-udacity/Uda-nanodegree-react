import { Col, Card, Button } from "react-bootstrap";

export const PollOption = (props) => {
  const { option, isAnswerd, totalVotes, onVote } = props;

  const optionVote = option.votes.length
  const percentage = ((optionVote / totalVotes) * 100).toFixed(0)

  const onVoteSubmit = (_event) => {
    onVote(option)
  }

  return (
    <Col md={6} className="mb-4">
      <Card className="h-100">
        {isAnswerd && (
          <Card.Header>
            <Card.Text>{`Number of people who chose this is: ${optionVote}`}</Card.Text>
            <Card.Text>{`Percentage of people who chose this is: ${percentage}%`}</Card.Text>
          </Card.Header>
        )}

        <Card.Body>
          <Card.Text>{option.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button disabled={isAnswerd} variant="info" onClick={(event) => onVoteSubmit(event)}>
            {isAnswerd ? 'Voted' : 'Vote'}
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default PollOption;
