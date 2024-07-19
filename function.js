/** @format */
import {getClient} from "@botpress/webchat";

const client = getClient({clientId: "5234523-543254-35342-52345"});

client.on("message", (message) => {
  console.log("Received message", message); // Messages from the bot
});

await client.connect();

await client.sendMessage("Hello, Botpress!"); // Send a message to the bot
let menuToggle = document.querySelector(".menuToggle"); //This will allow my navbar to have it's items
let menu = document.querySelector(".menu");
menuToggle.onclick = function () {
  menu.classList.toggle("active");
};
let text = document.querySelector(".myName");
text.innerHTML = text.innerText
  .split("")
  .map(
    (letters, i) =>
      `<span style="transition-delay:${i * 40}ms;">${letters}</span>`
  )
  .join("");
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
function animate() {
  // if (anime) {
  //   anime = false;
  //   button.textContent = "Animate✔";
  // } else {
  //   anime = true;
  //   button.textContent = "Animate❌";
  // }
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
