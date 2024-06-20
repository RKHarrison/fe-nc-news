function hasTemporaryId(comment) {
    return String(comment.comment_id).startsWith('tempId');
  }

module.exports = hasTemporaryId