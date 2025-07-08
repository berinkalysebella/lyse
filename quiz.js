function checkAnswers() {
  let score = 0;
  const answers = {
    q1: "Hello",
    q2: "Green",
    q3: "Trois",
    q4: "Eight",
    q5: "Bonsoir"
  };

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  document.getElementById("result").textContent = "You scored " + score + " out of 5!";
}
