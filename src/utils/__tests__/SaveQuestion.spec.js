import { _saveQuestion } from "../_DATA";

describe("_saveQuestion", () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
  });
  const mockAddQuestion = {
    optionOneText: "Option 1",
    optionTwoText: "Option 2",
    author: "author",
  };
  it("return formatted question object when resolve", async () => {
    const result = await _saveQuestion(mockAddQuestion);

    expect(result).toHaveProperty("id");
    expect(typeof result.id).toBe("string");
    expect(result).toHaveProperty("timestamp");
    expect(typeof result.timestamp).toBe("number");
    expect(result).toHaveProperty("optionOne");
    expect(result).toHaveProperty("optionTwo");
    expect(result).toHaveProperty("author");
  });

  it("add correct option to question object", async () => {
    const expectedOption1 = {
      text: "Option 1",
      votes: [],
    };

    const expectedOption2 = {
      text: "Option 2",
      votes: [],
    };

    const result = await _saveQuestion(mockAddQuestion);

    expect(result.optionOne).toEqual(expectedOption1);
    expect(result.optionTwo).toEqual(expectedOption2);
  });

  it("not adding any vote because new question still not voted yet", async () => {
    const result = await _saveQuestion(mockAddQuestion);

    expect(result.optionOne.votes).toEqual([]);
    expect(result.optionOne.votes.length).toEqual(0);
    expect(result.optionTwo.votes).toEqual([]);
    expect(result.optionTwo.votes.length).toEqual(0);
  });

  it("return an error if incorrect data is passed", async () => {
    const invalidQuestion = {
      optionOneText: "",
      optionTwoText: "",
      author: "",
    };

    await expect(_saveQuestion(invalidQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
