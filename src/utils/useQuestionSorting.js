export const useQuestionSorting = (questions) => {
  return questions.sort((a, b) => b.timestamp - a.timestamp)
}

export default useQuestionSorting