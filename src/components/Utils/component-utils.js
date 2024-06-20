export function hasTemporaryId(comment) {
  return String(comment.comment_id).startsWith("tempId");
}

export function formatDateStamp(timeStamp) {
  let errMsg = "Date unavailable, sorry!";
  if (!timeStamp) return errMsg;

  const date = timeStamp.slice(0, 10).split("-");
  const time = timeStamp.slice(11, 19).split(":");
  const year = Number(date[0]);
  const month = Number(date[1]) - 1;
  const day = Number(date[2]);
  const hour = Number(time[0]);
  const minute = Number(time[1]);
  const second = Number(time[2]);

  switch (true) {
    case month < 0 || month > 11:
      return errMsg;
    case day < 1 || day > 31:
      return errMsg;
    case hour < 0 || hour > 23:
      return errMsg;
    case minute < 0 || minute > 59:
      return errMsg;
    case second < 0 || second > 59:
      return errMsg;
    default:
  }

  const event = new Date(Date.UTC(year, month, day, hour, minute, second));
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
