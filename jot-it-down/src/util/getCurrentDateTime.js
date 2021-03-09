const getCurrentDateTime = () => {
  // Number.prototype.pad = function (n) {
  //   return new String(n).join("0").slice((n || 2) * -1) + this;
  // };

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()]; // Be careful! January is 0, not 1
  const year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  
  // minutes = ("00" + minutes).substring(minutes.length())
  // minutes.length < 2 ? (minutes = minutes.pad(2)) : (minutes = minutes);
  // console.log(minutes.length)
  let time;

  hours <= 12 ? (time = "AM") : (time = "PM");
  hours <= 12 ? (hours = hours) : (hours = hours - 12);

  const currentTime =
    month + " " + day + ", " + year + " " + hours + ":" + minutes + time;
  return currentTime;
};

export default getCurrentDateTime
