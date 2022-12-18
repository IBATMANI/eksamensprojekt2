  
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
      
      document.getElementById("answer").textContent = questions[selectedIndex].answer;
    }
  }
  
  window.onload = generateDropdown;

  document.getElementById("dropdown").addEventListener("change", showAnswer);
