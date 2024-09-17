import { useState } from "react";
import { QuestionList } from "./QuestionList";
import { useUserQuestions } from "../utils/useUserQuestion";
import { QUESTION_LIST_TYPES } from "../contants/questions";
import { connect, useSelector } from "react-redux";
import { Container, Tabs, Tab } from "react-bootstrap";

export function Dashboard(props) {

  const { authedUser, userInfo } = props;

  const userQuestions = useSelector((state) => state.questions)
  const { answeredQuestionIds, newQuestionIds } = useUserQuestions(
    authedUser,
    userQuestions,
    userInfo
  );

  const [selectedTab, setSelectedTab] = useState("unAnswered");

  return (
    <Container>
      <Tabs
        id="polls-tabs"
        activeKey={selectedTab}
        onSelect={(tab) => setSelectedTab(tab)}
        className="mb-3"
      >
        <Tab eventKey="unAnswered" title="Un Answerd">
          <QuestionList
            answeredQuestions={answeredQuestionIds}
            newQuestions={newQuestionIds}
            questions={userQuestions}
            listType={QUESTION_LIST_TYPES.new}
          />
        </Tab>
        <Tab eventKey="answerd" title="Answerd">
          <QuestionList
            answeredQuestions={answeredQuestionIds}
            newQuestions={newQuestionIds}
            questions={userQuestions}
            listType={QUESTION_LIST_TYPES.done}
          />
        </Tab>
      </Tabs>
    </Container>
  );
}

const mapStateToProps = ({ questions, users, authedUser }) => ({
  questions,
  authedUser,
  userInfo: users[authedUser],
});

export default connect(mapStateToProps)(Dashboard);
