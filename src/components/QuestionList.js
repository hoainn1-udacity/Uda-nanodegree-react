import { useMemo } from "react";
import { Question } from "./Question";
import { useQuestionSorting } from "../utils/useQuestionSorting"
import {
  QUESTION_LIST_TYPES,
  NEW_QUESTION_TITLE,
  ANSWERD_QUESTION_TITLE,
} from "../contants/questions";
import { Container, Row, Col } from "react-bootstrap";

export const QuestionList = (props) => {
  const { answeredQuestions, newQuestions, questions, listType } = props;
  const title =
    listType === QUESTION_LIST_TYPES.new
      ? NEW_QUESTION_TITLE
      : ANSWERD_QUESTION_TITLE;

  const questionList = useMemo(() => {
    if (listType === QUESTION_LIST_TYPES.new) {
      return newQuestions.map((newQuestionId) => questions[newQuestionId]);
    }

    return answeredQuestions.map(
      (answeredQuestionId) => questions[answeredQuestionId]
    );
  }, [listType, newQuestions, answeredQuestions, questions]);

  return (
    <Container className="mt-4 border rounded">
      <h2 className="text-center border-bottom pb-2">{title}</h2>
      <Row className="mt-3">
        {useQuestionSorting(questionList).map((question) => {
          return (
            <Col key={question.id} md={4} className="mb-4">
              <Question question={question} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default QuestionList;
