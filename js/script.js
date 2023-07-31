let modal = document.getElementById("myModal");
let closeBtn = document.getElementsByClassName("close")[0];


/*-----------------Open Modal-------------*/
function openModal() {
  modal.style.display = "block";
}


/*-------------------Close Modal------------*/
function closeModal() {
  modal.style.display = "none";
}


/*----------------Adobe App------------------*/
let app = document.getElementById("adobeApp");
app.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);


/*------------------Youtube-----------------*/
document.addEventListener("DOMContentLoaded", function() {
  let image = document.getElementById("popup-image");
  image.addEventListener("click", function() {
  let newWindow = window.open("http://www.youtube.com");
  });
});

/*-------------------Chrome-----------------*/
document.addEventListener("DOMContentLoaded", function() {
  let chrome = document.getElementById("popup-chrome");
  chrome.addEventListener("click", function() {
  let newWindow1 = window.open("http://www.google.com");
 });
});


/*-------------Displaying the Clock-----------*/
// Update the clock every second
const clockContainer = document.querySelector("#section__clock--align");

const updateClock = () => {
  const now = new Date();
  clockContainer.innerHTML = now.toLocaleTimeString();
}

setInterval(updateClock, 1000); 

//To display container for start button
const menuButton = document.getElementById("section__start-button--align");
const menu = document.getElementById("section__menu--flex");

menuButton.addEventListener("click", () => {
  menu.style.display = menu.style.display === "none" ? "flex" : "none";
});


//Display nothing when clicked on the screen

var onTheScreen = document.getElementById("section__background--image");
onTheScreen.addEventListener("click", event =>{

  if (event.target === onTheScreen) {
        menu.style.display = "none";
      }
});