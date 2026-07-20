// Typing Animation

const text = [
  "Software Developer",
  "Java Programmer",
  "AWS Community Member",
  "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {

    setTimeout(() => {

      index = 0;
      count++;

      setTimeout(type, 300);

    }, 1500);

  } else {

    setTimeout(type, 100);

  }

})();


// Navbar Background Change

window.addEventListener("scroll", function () {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {

    header.style.background = "#08111f";

  } else {

    header.style.background = "rgba(15,23,42,.8)";

  }

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });

  });

});