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

const parallelQuestions = [
  { sentence: "She likes hiking, swimming, and biking.", answer: "p" },
  { sentence: "He wanted to learn to code, designing apps, and create games.", answer: "np" },
  { sentence: "The teacher said he was smart, attentive, and hardworking.", answer: "p" },
  { sentence: "We need to write a report, preparing slides, and present.", answer: "np" },
  { sentence: "My goals are to eat healthy, to exercise daily, and to sleep early.", answer: "p" },
  { sentence: "She enjoys reading books, to listen to music, and painting.", answer: "np" },
  { sentence: "They came, they saw, and they conquered.", answer: "p" },
  { sentence: "The job requires communication skills, typing fast, and to solve problems.", answer: "np" },
  { sentence: "Running, jumping, and skipping are fun activities.", answer: "p" },
  { sentence: "He likes not only to sing but also dancing.", answer: "np" },
  { sentence: "You can pay with a credit card, debit card, or cash.", answer: "p" },
  { sentence: "The coach told us to stretch, warm up, and that we should drink water.", answer: "np" },
  { sentence: "To succeed, one must plan carefully, work hard, and stay focused.", answer: "p" },
  { sentence: "She is kind, intelligent, and has a good sense of humor.", answer: "np" },
  { sentence: "The project involves researching, writing, and presenting.", answer: "p" },
  { sentence: "We were asked to either clean the floor or to wash the windows.", answer: "p" },
  { sentence: "He promised to be helpful, respectful, and that he would try his best.", answer: "np" },
  { sentence: "Learning a language requires practice, patience, and dedication.", answer: "p" },
  { sentence: "I like baking cookies, to make pasta, and cooking rice.", answer: "np" },
  { sentence: "Not only did she clean the house, but she also cooked dinner.", answer: "p" },
  { sentence: "They were singing loudly, dancing wildly, and had fun.", answer: "np" },
  { sentence: "The tourist wanted to see the museum, take pictures, and buy souvenirs.", answer: "p" },
  { sentence: "My hobbies include drawing, playing the piano, and to write stories.", answer: "np" },
  { sentence: "He jogs, lifts weights, and swims every morning.", answer: "p" },
  { sentence: "Her work involves designing, coding, and to test the software.", answer: "np" },
];

// Add to main questions
parallelQuestions.forEach((q, i) => {
  const index = 25 + i; // 26-50
  const questionHTML = `
    <div class="q">
      <p><span class="badge">${index + 1}</span> ${q.sentence}</p>
      <input type="text" name="parallel-${index}" placeholder="P or NP">
      <div class="answer" id="answer-${index}" style="display:none;">
        Correct: <em>${q.answer.toUpperCase()}</em>
      </div>
    </div>
  `;
  quizForm.innerHTML += questionHTML;
});

// Add grading for these
parallelQuestions.forEach((q, i) => {
  const index = 25 + i;
  const userAns = document.querySelector(`input[name="parallel-${index}"]`)?.value.trim().toLowerCase();
  if (userAns === q.answer) score++;
  document.getElementById(`answer-${index}`).style.display = "block";
});