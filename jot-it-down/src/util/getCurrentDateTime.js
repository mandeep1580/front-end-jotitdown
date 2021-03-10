const getCurrentDateTime = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let time, hrs;

  hours <= 12 ? (time = "AM") : (time = "PM");
  hours <= 12 ? (hrs = hours) : (hrs = hours - 12);

  const currentTime =
    month + " " + day + ", " + year + " " + hrs + ":" + minutes + time;
  return currentTime;
};

export default getCurrentDateTime;
