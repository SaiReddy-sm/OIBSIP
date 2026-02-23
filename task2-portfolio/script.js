// Typing Animation
const typingText = "Frontend Developer | Full Stack Developer";
let index = 0;

function typeEffect() {
  if (index < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();


// Counter Animation
function animateCounter(id, target) {
  let count = 0;
  let interval = setInterval(() => {
    count++;
    document.getElementById(id).innerText = count + "+";
    if (count === target) {
      clearInterval(interval);
    }
  }, 50);
}

animateCounter("exp", 1);
animateCounter("projectsDone", 6);
animateCounter("Languages", 3);



// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
