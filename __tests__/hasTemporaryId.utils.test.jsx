import { hasTemporaryId } from "../src/components/Utils/component-utils";

describe('hasTemporaryId', () => {
  it('should return false given a comment without a comment_id', () => {
    const comment = {};
    const result = hasTemporaryId(comment)
    expect(result).toBe(false);
  });
  it('should return true if comment_id starts with "tempId"', () => {
    const comment = { comment_id: 'tempId123' };
    const result = hasTemporaryId(comment)
    expect(result).toBe(true);
  });
  it('should return false if comment_id does not start with "tempId"', () => {
    const comment = { comment_id: 'id123tempId' };
    const result = hasTemporaryId(comment)
    expect(result).toBe(false);
  });
  it('should return false if comment_id is purely numeric', () => {
    const comment = { comment_id: 123456 };
    const result = hasTemporaryId(comment)
    expect(result).toBe(false);
  });
  it('should handle comments where comment_id is undefined', () => {
    const comment = { comment_id: undefined };
    expect(hasTemporaryId(comment)).toBe(false);
  });
  it('should not mutate input object', () => {
    const comment = { comment_id: 'tempId123' };
    const commentCopy = { comment_id: 'tempId123' }
    hasTemporaryId(comment)
    expect(comment).toEqual(commentCopy)
  })
})