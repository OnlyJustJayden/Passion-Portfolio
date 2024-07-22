/** @format */

let menuToggle = document.querySelector(".menuToggle"); //This will allow my navbar to have it's items
let menu = document.querySelector(".menu");
menuToggle.onclick = function () {
  menu.classList.toggle("active");
};
var viewpoints = document.getElementsByClassName("Viewpoint");
var views = document.getElementsByClassName("View");
function show(thingy) {
  /* YeS... I am naming this variable thingy😀*/
  for (viewpoint of viewpoints) {
    viewpoint.classList.remove("Activepoint");
  }
  for (view of views) {
    view.classList.remove("Activeview");
  }
  event.currentTarget.classList.add("Activepoint");
  document.getElementById(thingy).classList.add("Activeview");
}
let anime = true;
const button = document.getElementById("Anime");
button.addEventListener("click", animate);
let language = document.getElementsByClassName("language");
function animate() {
  if (anime) {
    language.style.animationPlayState = "paused";
    anime = false;
    button.textContent = "Animate✔";
    window.location.assign("/index.html#ContactSection");
    setTimeout(backHome, 2000);
  } else {
    anime = true;
    button.textContent = "Animate✖";
    window.location.assign("/index.html#ContactSection");
    setTimeout(backHome, 2000);
  }
}
function backHome() {
  window.location.assign("/index.html#");
}
//This is an Intersection Observer ... Duh🤣, in plain english, a method (function) of checking if each section is currently visisble
// on the user's screen, if not the item is hidden, if so then it loads in//
var observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (anime) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    } else {
      entry.target.classList.add("show");
    }
  });
});
var hiddenElements = document.querySelectorAll(
  ".Projects, .AboutMe, .Services"
);
hiddenElements.forEach((el) => observer.observe(el));
var loader = document.getElementById("preloader");
window.addEventListener("load", function (load) {
  // Lazy Loading :) //
  this.window.removeEventListener("load", load, false);
  this.setTimeout(function () {
    loader.style.display = "none";
    this.document.body.style.overflowY = "scroll";
  }, 2000);
});
