export function hasTemporaryId(comment) {
  return String(comment.comment_id).startsWith("tempId");
}

export function formatDateStamp(timeStamp) {
  if (!timeStamp) return "Date unavailable, sorry!";
  
  const event = new Date(timeStamp);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return event.toLocaleDateString("en-GB", options);
}

export function capitaliseString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
