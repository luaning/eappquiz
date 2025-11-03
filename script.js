const questions = [
  { base: "go", past: "went", participle: "gone" },
  { base: "eat", past: "ate", participle: "eaten" },
  { base: "write", past: "wrote", participle: "written" },
  { base: "see", past: "saw", participle: "seen" },
  { base: "run", past: "ran", participle: "run" },
  { base: "make", past: "made", participle: "made" },
  { base: "speak", past: "spoke", participle: "spoken" },
  { base: "buy", past: "bought", participle: "bought" },
  { base: "drink", past: "drank", participle: "drunk" },
  { base: "begin", past: "began", participle: "begun" },
  { base: "take", past: "took", participle: "taken" },
  { base: "give", past: "gave", participle: "given" },
  { base: "drive", past: "drove", participle: "driven" },
  { base: "fall", past: "fell", participle: "fallen" },
  { base: "swim", past: "swam", participle: "swum" },
  { base: "have", past: "had", participle: "had" },
  { base: "cut", past: "cut", participle: "cut" },
  { base: "find", past: "found", participle: "found" },
  { base: "break", past: "broke", participle: "broken" },
  { base: "choose", past: "chose", participle: "chosen" },
  { base: "feel", past: "felt", participle: "felt" },
  { base: "hear", past: "heard", participle: "heard" },
  { base: "keep", past: "kept", participle: "kept" },
  { base: "know", past: "knew", participle: "known" },
  { base: "think", past: "thought", participle: "thought" }
];

const quizForm = document.getElementById("quizForm");

questions.forEach((q, i) => {
  const questionHTML = `
    <div class="q">
      <p><span class="badge">${i + 1}</span> Base form: <strong>${q.base}</strong></p>
      <input type="text" name="past-${i}" placeholder="Past tense">
      <input type="text" name="participle-${i}" placeholder="Past participle">
      <div class="answer" id="answer-${i}" style="display:none;">
        Correct: <em>${q.past}</em> / <em>${q.participle}</em>
      </div>
    </div>
  `;
  quizForm.innerHTML += questionHTML;
});

document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault();
  let score = 0;
  questions.forEach((q, i) => {
    const userPast = document.querySelector(`input[name="past-${i}"]`).value.trim().toLowerCase();
    const userParticiple = document.querySelector(`input[name="participle-${i}"]`).value.trim().toLowerCase();
    
    if (userPast === q.past.toLowerCase() && userParticiple === q.participle.toLowerCase()) {
      score++;
    }
    document.getElementById(`answer-${i}`).style.display = "block";
  });

  document.getElementById("scoreText").textContent = `${score} / ${questions.length}`;
  document.getElementById("scoreDisplay").style.display = "inline-flex";
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.querySelectorAll("input[type='text']").forEach(input => input.value = "");
  document.querySelectorAll(".answer").forEach(ans => ans.style.display = "none");
  document.getElementById("scoreDisplay").style.display = "none";
});
