const getCurrentDateTime = () => {
  Number.prototype.pad = function (n) {
    return new Array(n).join("0").slice((n || 2) * -1) + this;
  };
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth(); // Be careful! January is 0, not 1
  const year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  minutes.length < 2 ? (minutes = minutes.pad(2)) : (minutes = minutes);
  let time;

  hours <= 12 ? (time = "AM") : (time = "PM");
  hours <= 12 ? (hours = hours) : (hours = hours - 12);

  const currentTime =
    day + "-" + (month + 1) + "-" + year + " " + hours + ":" + minutes + time;
  return currentTime;
};

export default getCurrentDateTime
