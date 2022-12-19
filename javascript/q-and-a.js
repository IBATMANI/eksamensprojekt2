const questions = [
  {
    question: "Skal vertikalt landbrug erstatte traditionelt landbrug?",
    answer:
      "Nej. Vertikalt landbrug, hydroponi og vertikalt landbrug skal eksistere i samspil.",
  },
  {
    question: "Kan alle afgrødre gros vertikalt?",
    answer:
      "Nej. Vertikalt er bedst til kortere afgrødre, der kun skal høstes en gang.",
  },
  {
    question: "Kan jeres system betjenes af ikke-gartnere?",
    answer:
      "Ja, vores system er designet til at være intuitivt at bruge og automatiseringen tilpasses brugerens nivau.",
  },
];

function generateDropdown() {
  for (let i = 0; i < questions.length; i++) {
    const item = document.createElement("option");
    item.value = i;
    item.textContent = questions[i].question;

    document.getElementById("dropdown").appendChild(item);
  }
}

function showAnswer() {
  const selectedIndex = document.getElementById("dropdown").value;

  if (selectedIndex === "") {
    document.getElementById("answer").textContent = "";
  } else {
    document.getElementById("answer").textContent =
      questions[selectedIndex].answer;
  }
}

window.onload = generateDropdown;

document.getElementById("dropdown").addEventListener("change", showAnswer);

var popup = null;

var images = [
  "images/infografik.png",
  "images/infografik.png",
  "images/infografik.png",
];

var currentImage = 0;

function showPopup(src) {
  if (popup) {
    popup.classList.remove("show-popup");
    setTimeout(function () {
      popup.remove();
      popup = null;
    }, 500);
  }

  popup = document.createElement("div");
  popup.classList.add("popup");

  var image = document.createElement("img");
  image.src = src;
  popup.appendChild(image);

  popup.addEventListener("click", function () {
    if (popup.classList.contains("show-popup")) {
      popup.classList.remove("show-popup");
      setTimeout(function () {
        popup.remove();
        popup = null;
      }, 500);
    }
  });

  document.body.appendChild(popup);

  setTimeout(function () {
    popup.classList.add("show-popup");
  }, 50);
}

document.getElementById("picture").addEventListener("click", function () {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  } else {
    showPopup(images[currentImage]);
  }
});
