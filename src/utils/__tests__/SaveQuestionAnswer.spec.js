import { _saveQuestionAnswer } from "../_DATA";
jest.setTimeout(5000);
describe("_saveQuestionAnswer", () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
  });

  it("return true when parsing valid data", async () => {
    const mockQuestionAnswer = {
      authedUser: "sarahedo",
      qid: "6ni6ok3ym7mf1p33lnez",
      answer: "optionOne",
    };
    const result = await _saveQuestionAnswer(mockQuestionAnswer);

    expect(result).toBe(true);
  });

  it("return false when parsing invalid data", async () => {
    const mockInvalidQuestionAnswer = {
      authedUser: "User A",
      qid: "id_1",
      anser: "optionOne",
    };

    await expect(_saveQuestionAnswer(mockInvalidQuestionAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
