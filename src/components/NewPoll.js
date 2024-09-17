import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDebouncedCallback } from "use-debounce";
import { OPTION_ONE_INPUT, OPTION_TWO_INPUT } from "../contants/questions";
import { connect } from "react-redux";
import { handleAddQuestion } from "../thunks/questions";
import { useNavigate } from "react-router-dom";

export const NewPoll = (props) => {
  const { dispatch, authedUser } = props;

  const navigate = useNavigate();

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const optionOneInputDebounced = useDebouncedCallback((value) => {
    setOptionOne(value);
  }, 300);

  const optionTwoInputDebounced = useDebouncedCallback((value) => {
    setOptionTwo(value);
  }, 300);

  const handleInputChanges = (e, type) => {
    e.preventDefault();
    if (type === OPTION_ONE_INPUT) {
      optionOneInputDebounced(e.target.value);
    } else {
      optionTwoInputDebounced(e.target.value);
    }
  };

  const handleCreatePoll = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(optionOne, optionTwo, authedUser));
    setOptionOne("");
    setOptionTwo("");
    navigate("/");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col className="text-center" md={6}>
          <h3 className="text-center mb-4">Would You Rather</h3>
          <h5 className="text-center mb-4 text-muted">Create Your Own Poll</h5>
          <Form onSubmit={handleCreatePoll}>
            <Form.Group controlId="option-one-input" className="mt-3">
              <Form.Label className="text-center">First Option</Form.Label>
              <Form.Control
                type="text"
                placeholder="Option One"
                onChange={(e) => handleInputChanges(e, OPTION_ONE_INPUT)}
              />
            </Form.Group>

            <Form.Group controlId="option-two-input" className="mt-3">
              <Form.Label className="text-center">Second Option</Form.Label>
              <Form.Control
                type="text"
                placeholder="Option Two"
                onChange={(e) => handleInputChanges(e, OPTION_TWO_INPUT)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mt-4"
              disabled={!optionOne || !optionTwo}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default connect()(NewPoll);
