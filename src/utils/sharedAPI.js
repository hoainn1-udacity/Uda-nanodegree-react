import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA.js";

export function getUsers() {
  return Promise.all([_getUsers()]).then(([users]) => ({
    users,
  }));
}

export function getInitialDatas() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function answerQuestion(question) {
  return _saveQuestionAnswer(question);
}
