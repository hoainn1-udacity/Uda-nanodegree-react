import { Container, Row, Image } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { NO_USER_AVATAR } from "../contants/users";
import { PollOption } from "./PollOption";
import { handleAnswerQuestion } from "../thunks/questions";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

export const Poll = (props) => {
  const { userInfo, authedUser, questionInfo, dispatch, router } = props;

  const pollOptions = [questionInfo?.optionOne, questionInfo?.optionTwo];
  const totalVotes =
    questionInfo.optionOne.votes.length + questionInfo.optionTwo.votes.length;
  const isAnswerd =
    questionInfo.optionOne.votes.includes(authedUser) ||
    questionInfo.optionTwo.votes.includes(authedUser);

  const onVoteSubmitted = (option) => {
    const answer =
      questionInfo.optionOne.text === option.text ? "optionOne" : "optionTwo";

    dispatch(handleAnswerQuestion(questionInfo.id, answer));
    router.navigate("/");
  };

  return (
    <Container className="mt-4 text-center">
      <h3>Poll by {userInfo?.name}</h3>

      <div className="my-4">
        <Image
          src={
            new URL(
              `${userInfo?.avatarURL ? userInfo?.avatarURL : NO_USER_AVATAR}`
            )
          }
          roundedCircle
          style={{ width: "150px", height: "150px" }}
        />
      </div>

      <h4>Would You Rather</h4>

      <Row className="mt-4">
        {pollOptions.map((option, index) => (
          <PollOption
            key={`poll_option_${index}`}
            option={option}
            isAnswerd={isAnswerd}
            totalVotes={totalVotes}
            onVote={(e) => onVoteSubmitted(e)}
          />
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { question_id } = props.router.params;
  const questionInfo = questions[question_id];
  const userInfo = users[questionInfo.author];

  return {
    userInfo,
    questionInfo,
    authedUser,
  };
};

export default withRouter(connect(mapStateToProps)(Poll));
