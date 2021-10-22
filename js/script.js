// Clock-Time code start
startTime = () => {
  const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  minute1 = modifyMinSec(minute);
  second1 = modifyMinSec(second);
  document.querySelector(".clock-container").innerHTML =
    hour + ":" + minute1 + ":" + second1;
  setTimeout(startTime, 1000);
};

modifyMinSec = (i) => {
  if (i < 10) {
    i = "0" + i; //add zero in front of numbers < 10
    return i;
  } else {
    return i;
  }
};

startTime();

// Clock-Time code end

//Clock-Date code start
currentDate = () => {
  const today = new Date();
  let day = today.getDate();
  let year = today.getFullYear();
  day = modifyDay(day);
  let month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  month = month[today.getMonth()];
  let date = day + " " + month + " " + year;
  document.querySelector(".date-container").innerHTML = date;
};

modifyDay = (i) => {
  if (i < 10) {
    i = "0" + i;
    return i;
  } else {
    return i;
  }
};

currentDate();
//Clock-Date code end

// Waiting-timer code start
var timeleft = 9;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 9 - timeleft;
  timeleft -= 1;
  document.querySelector(".timer").innerHTML = 9 - timeleft;
}, 1000);

// Waiting-timer code end
