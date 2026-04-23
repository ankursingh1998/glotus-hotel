// SAFE SCROLL ANIMATION

window.addEventListener("scroll", function () {
  let elements = document.querySelectorAll(".fade-in");

  elements.forEach(function (el) {
    let position = el.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      el.classList.add("show");
    }
    // BACKGROUND SLIDER
let slides = document.querySelectorAll(".slide");
let i = 0;

function changeSlide() {
  slides.forEach(s => s.classList.remove("active"));

  slides[i].classList.add("active");

  i = (i + 1) % slides.length;
}

setInterval(changeSlide, 4000);
  });
});
// BOOKING FORM TO WHATSAPP
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;
  let room = document.getElementById("room").value;

  let message = `Hello, I want to book a room:
Name: ${name}
Check-in: ${checkin}
Check-out: ${checkout}
Room Type: ${room}`;

  let url = "https://wa.me/919582079791?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
});
// SCROLL PROGRESS
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  let progress = (scrollTop / height) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});
// NAVBAR EFFECT
window.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});