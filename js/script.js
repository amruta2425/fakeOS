
let modal = document.getElementById("myModal");
let closeBtn = document.getElementsByClassName("close")[0];
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
let app = document.getElementById("adobeApp");
app.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

document.addEventListener("DOMContentLoaded", function() {
  let image = document.getElementById("popup-image");
  image.addEventListener("click", function() {
      
      let newWindow = window.open("http://www.youtube.com");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let chrome = document.getElementById("popup-chrome");
  chrome.addEventListener("click", function() {
      let newWindow1 = window.open("http://www.google.com");
     
  });
});





function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

const getCurrentDateTime = () => {
  let currentDateTime = new Date();
  let year = currentDateTime.getFullYear();
  const months = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];
  let month = months[currentDateTime.getMonth()];
  let date = currentDateTime.getDate();
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let day = days[currentDateTime.getDay()];
  let formattedDateTime = day+ " "+date+ " "+month+ " "+ formatDate(currentDateTime);
  document.getElementById("datetime").textContent = formattedDateTime;
};
setInterval(getCurrentDateTime, 1000);






