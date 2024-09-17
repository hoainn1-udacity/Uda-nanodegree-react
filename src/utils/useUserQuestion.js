export const useUserQuestions = (userName, questions = [], userInfo = []) => {
  if (!userName) {
    return {
      answeredQuestionIds: [],
      newQuestionIds: [],
    };
  }

  const answeredQuestionIds = Object.keys(userInfo?.answers);

  const newQuestionIds = Object.keys(questions).filter((q) =>
    !answeredQuestionIds.includes(q)
  );

  return {
    answeredQuestionIds,
    newQuestionIds,
  };
};

export default useUserQuestions;
