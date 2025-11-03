// Questions 1-25: Verb Forms
const verbQuestions = [
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

// Questions 26–50: Parallelism
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
  { sentence: "Her work involves designing, coding, and to test the software.", answer: "np" }
];

// Questions 51–75: Correct Verb Form in Context (Multiple Choice)
const verbContextQuestions = [
  { sentence: "She has already ___ (finish) her homework.", options: ["finish", "finished", "finishing"], answer: "finished" },
  { sentence: "They ___ (go) to the park every Saturday.", options: ["go", "went", "gone"], answer: "go" },
  { sentence: "He ___ (break) his leg last year.", options: ["break", "broke", "broken"], answer: "broke" },
  { sentence: "The cake is ___ (bake) in the oven.", options: ["bake", "baking", "baked"], answer: "baking" },
  { sentence: "We had ___ (eat) before the movie started.", options: ["eat", "ate", "eaten"], answer: "eaten" },
  { sentence: "I ___ (feel) tired today.", options: ["felt", "feel", "feeling"], answer: "feel" },
  { sentence: "She ___ (sing) beautifully at the concert last night.", options: ["sing", "sang", "sung"], answer: "sang" },
  { sentence: "He has ___ (write) three books so far.", options: ["wrote", "written", "write"], answer: "written" },
  { sentence: "The children are ___ (play) outside.", options: ["played", "playing", "play"], answer: "playing" },
  { sentence: "They ___ (build) a treehouse last summer.", options: ["build", "built", "building"], answer: "built" },
  { sentence: "We ___ (know) him for years.", options: ["know", "knew", "have known"], answer: "have known" },
  { sentence: "She ___ (teach) English in Japan last year.", options: ["teach", "teaches", "taught"], answer: "taught" },
  { sentence: "The dishes were ___ (break) during the move.", options: ["broken", "broke", "break"], answer: "broken" },
  { sentence: "I am ___ (study) for the test.", options: ["studied", "study", "studying"], answer: "studying" },
  { sentence: "He ___ (see) that movie already.", options: ["saw", "seen", "has seen"], answer: "has seen" },
  { sentence: "They ___ (be) friends since childhood.", options: ["were", "have been", "are"], answer: "have been" },
  { sentence: "She ___ (drive) to work every day.", options: ["drove", "drive", "drives"], answer: "drives" },
  { sentence: "He ___ (run) five miles yesterday.", options: ["ran", "run", "running"], answer: "ran" },
  { sentence: "The letter was ___ (send) yesterday.", options: ["sent", "send", "sending"], answer: "sent" },
  { sentence: "They are ___ (prepare) for the competition.", options: ["prepared", "prepare", "preparing"], answer: "preparing" },
  { sentence: "I ___ (forget) my keys at home.", options: ["forgot", "forget", "forgotten"], answer: "forgot" },
  { sentence: "She has ___ (do) her chores already.", options: ["did", "doing", "done"], answer: "done" },
  { sentence: "The dog is ___ (sleep) on the couch.", options: ["sleeping", "slept", "sleep"], answer: "sleeping" },
  { sentence: "We ___ (watch) the news every evening.", options: ["watch", "watched", "watching"], answer: "watch" },
  { sentence: "He ___ (take) a shower before breakfast.", options: ["took", "takes", "taken"], answer: "took" }
];

// Generate quiz form
const quizForm = document.getElementById("quizForm");
let questionCount = 0;

// Render verb questions
verbQuestions.forEach((q, i) => {
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
  questionCount += 2;
});

// Render parallel questions
parallelQuestions.forEach((q, i) => {
  const index = 25 + i;
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
  questionCount++;
});

// Render verb context questions
verbContextQuestions.forEach((q, i) => {
  const index = 50 + i;
  const optionsHTML = q.options.map(opt => `<option value="${opt.toLowerCase()}">${opt}</option>`).join('');
  const questionHTML = `
    <div class="q">
      <p><span class="badge">${index + 1}</span> ${q.sentence}</p>
      <select name="context-${index}">
        <option value="">Select answer</option>
        ${optionsHTML}
      </select>
      <div class="answer" id="answer-${index}" style="display:none;">
        Correct: <em>${q.answer}</em>
      </div>
    </div>
  `;
  quizForm.innerHTML += questionHTML;
  questionCount++;
});

// Handle form submission
document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // Check if all fields are filled
  const allInputs = document.querySelectorAll("input[type='text'], select");
  for (let input of allInputs) {
    if (input.value.trim() === "") {
      alert("Please answer all questions before submitting.");
      return;
    }
  }

  // Evaluate answers
  let score = 0;

  // Verbs
  verbQuestions.forEach((q, i) => {
    const userPast = document.querySelector(`input[name="past-${i}"]`).value.trim().toLowerCase();
    const userParticiple = document.querySelector(`input[name="participle-${i}"]`).value.trim().toLowerCase();
    if (userPast === q.past.toLowerCase()) score++;
    if (userParticiple === q.participle.toLowerCase()) score++;
    document.getElementById(`answer-${i}`).style.display = "block";
  });

  // Parallelism
  parallelQuestions.forEach((q, i) => {
    const index = 25 + i;
    const userAns = document.querySelector(`input[name="parallel-${index}"]`).value.trim().toLowerCase();
    if (userAns === q.answer) score++;
    document.getElementById(`answer-${index}`).style.display = "block";
  });

  // Verb context questions
  verbContextQuestions.forEach((q, i) => {
    const index = 50 + i;
    const userAns = document.querySelector(`select[name="context-${index}"]`).value.trim().toLowerCase();
    if (userAns === q.answer.toLowerCase()) score++;
    document.getElementById(`answer-${index}`).style.display = "block";
  });

  // Show score
  document.getElementById("scoreText").textContent = `${score} / ${questionCount}`;
  document.getElementById("scoreDisplay").style.display = "inline-flex";
});

// Reset quiz
document.getElementById("resetBtn").addEventListener("click", function () {
  quizForm.reset();
  document.querySelectorAll(".answer").forEach(ans => ans.style.display = "none");
  document.getElementById("scoreDisplay").style.display = "none";
});
