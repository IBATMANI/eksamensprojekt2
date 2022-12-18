  // Create an array of objects containing the questions and answers
  const questions = [
    {
      question: "Skal vertikalt landbrug erstatte traditionelt landbrug?",
      answer: "Nej. Vertikalt landbrug, hydroponi og vertikalt landbrug skal eksistere i samspil."
    },
    {
      question: "Kan alle afgrødre gros vertikalt?",
      answer: "Nej. Vertikalt er bedst til kortere afgrødre, der kun skal høstes en gang."
    },
    {
      question: "Kan jeres system betjenes af ikke-gartnere?",
      answer: "Ja, vores system er designet til at være intuitivt at bruge og automatiseringen tilpasses brugerens nivau."
    }
  ];

  // Create a function that generates the dropdown menu
  function generateDropdown() {
    // Use a loop to iterate over the questions array
    for (let i = 0; i < questions.length; i++) {
      // Create a dropdown item for each question
      const item = document.createElement("option");
      item.value = i;
      item.textContent = questions[i].question;
      // Add the dropdown item to the select element
      document.getElementById("dropdown").appendChild(item);
    }
  }

  // Create a function that displays the answer to the selected question
  function showAnswer() {
    // Get the selected index from the dropdown menu
    const selectedIndex = document.getElementById("dropdown").value;
    // Use an if-else statement to determine whether a question has been selected
    if (selectedIndex === "") {
      // If no question has been selected, clear the answer text
      document.getElementById("answer").textContent = "";
    } else {
      // If a question has been selected, display the corresponding answer
      document.getElementById("answer").textContent = questions[selectedIndex].answer;
    }
  }

  // Generate the dropdown menu when the page loads
  window.onload = generateDropdown;

  // Add an event listener to the dropdown menu to display the answer when a question is selected
  document.getElementById("dropdown").addEventListener("change", showAnswer);
