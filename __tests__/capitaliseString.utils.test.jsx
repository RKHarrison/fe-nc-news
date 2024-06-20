import { capitaliseString } from "../src/components/Utils/component-utils";

describe("capitaliseString", () => {
  it("should capitalise the first letter of a lowercase word", () => {
    const word = "topic";
    const result = capitaliseString(word);
    expect(result).toBe("Topic");
  });
  it("should return the original word if first character is already capitalised", () => {
    const word = "Topic";
    const result = capitaliseString(word);
    expect(result).toBe("Topic");
  });
  it("should not mutate input string", () => {
    const word = "topic";
    const wordCopy = "topic";
    capitaliseString(word);
    expect(word).toEqual(wordCopy);
  });
});
