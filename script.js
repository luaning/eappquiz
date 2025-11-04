// === HARDER QUIZ: 75 ITEMS ===
// Score system: 25 verb items x 2 blanks = 50 pts, 25 parallelism = 25 pts, 25 MCQ = 25 pts => TOTAL = 100 pts

// Q1-25: Harder Verb Forms (base -> past / past participle)
const verbQuestions = [
  { base: "arise", past: "arose", participle: "arisen" },
  { base: "awake", past: "awoke", participle: "awoken" },
  { base: "bind", past: "bound", participle: "bound" },
  { base: "bleed", past: "bled", participle: "bled" },
  { base: "blow", past: "blew", participle: "blown" },
  { base: "choose", past: "chose", participle: "chosen" },
  { base: "cling", past: "clung", participle: "clung" },
  { base: "creep", past: "crept", participle: "crept" },
  { base: "deal", past: "dealt", participle: "dealt" },
  { base: "dig", past: "dug", participle: "dug" },
  { base: "dwell", past: "dwelt", participle: "dwelt" },
  { base: "forbid", past: "forbade", participle: "forbidden" },
  { base: "forgive", past: "forgave", participle: "forgiven" },
  { base: "freeze", past: "froze", participle: "frozen" },
  { base: "grow", past: "grew", participle: "grown" },
  { base: "lay", past: "laid", participle: "laid" },
  { base: "lie (recline)", past: "lay", participle: "lain" },
  { base: "lose", past: "lost", participle: "lost" },
  { base: "prove", past: "proved", participle: "proven" },
  { base: "ride", past: "rode", participle: "ridden" },
  { base: "ring", past: "rang", participle: "rung" },
  { base: "seek", past: "sought", participle: "sought" },
  { base: "sew", past: "sewed", participle: "sewn" },
  { base: "shrink", past: "shrank", participle: "shrunk" },
  { base: "steal", past: "stole", participle: "stolen" }
];

// Q26-50: Parallelism (P / NP) — more challenging sentences
const parallelQuestions = [
  { sentence: "She promised to call when she arrived, to text when she left, and to check in later.", answer: "p" },
  { sentence: "The manager expects employees to be punctual, to dress appropriately, and they must behave respectfully.", answer: "np" },
  { sentence: "His responsibilities include drafting proposals, reviewing contracts, and negotiating deals.", answer: "p" },
  { sentence: "Either you can submit the report today, or postpone it and that you can finish next week.", answer: "np" },
  { sentence: "She likes not only to hike but also swimming when she has time.", answer: "np" },
  { sentence: "The job requires analytical thinking, precision, and staying organized under pressure.", answer: "p" },
  { sentence: "To improve, you should practice regularly, get feedback, and be persistent.", answer: "p" },
  { sentence: "He enjoys reading novels, to watch documentaries, and writing short stories.", answer: "np" },
  { sentence: "The plan calls for hiring new staff, training employees, and improving processes.", answer: "p" },
  { sentence: "They expected the event would be organized, that it would be promoted well, and guests to arrive on time.", answer: "np" },
  { sentence: "She likes cooking, baking, and to try new recipes.", answer: "np" },
  { sentence: "We should either renew the contract, renegotiate terms, or terminate it.", answer: "p" },
  { sentence: "The speaker was articulate, knowledgeable, and had charisma.", answer: "np" },
  { sentence: "He is responsible for designing the UX, coding the front end, and testing the product.", answer: "p" },
  { sentence: "The committee valued integrity, transparency, and being fair.", answer: "np" },
  { sentence: "For success, plan carefully, execute consistently, and monitor progress.", answer: "p" },
  { sentence: "Her tasks are proofreading manuscripts, formatting tables, and she will submit them.", answer: "np" },
  { sentence: "He wanted both to travel widely and to learn new languages.", answer: "p" },
  { sentence: "The policy demands transparency, accountability, and that stakeholders must be informed.", answer: "np" },
  { sentence: "The rules cover attendance, grading, and academic integrity.", answer: "p" },
  { sentence: "She both enjoys teaching and mentoring her students.", answer: "p" },
  { sentence: "The advertisement promised lower prices, faster service, and customer satisfaction would be guaranteed.", answer: "np" },
  { sentence: "We practiced speaking, listening, and writing every day.", answer: "p" },
  { sentence: "They will either submit the application online, or hand it in at the office.", answer: "p" },
  { sentence: "His hobbies include hiking, photography, and to collect antiques.", answer: "np" }
];

// Q51-75: Harder MCQs (choose correct tense/form) — 25 items
const verbContextQuestions = [
  { sentence: "By the time she arrived, they ___ (finish) the meeting.", options: ["finished", "had finished", "have finished"], answer: "had finished" },
  { sentence: "If I ___ (be) you, I would apologize.", options: ["was", "am", "were"], answer: "were" },
  { sentence: "He ___ (strive) to improve his work for years.", options: ["strove", "has striven", "strives"], answer: "has striven" },
  { sentence: "The software ___ (develop) over the last two years and is nearly complete.", options: ["is developed", "has been developed", "was developed"], answer: "has been developed" },
  { sentence: "By next month they ___ (complete) the renovation.", options: ["completed", "will have completed", "have completed"], answer: "will have completed" },
  { sentence: "Had she known, she ___ (act) differently.", options: ["would act", "would have acted", "will have acted"], answer: "would have acted" },
  { sentence: "At the meeting, the proposals ___ (discuss) thoroughly before a vote.", options: ["were discussed", "discussed", "had discussed"], answer: "were discussed" },
  { sentence: "She ___ (seek) medical attention if the pain persists.", options: ["seek", "should seek", "sought"], answer: "should seek" },
  { sentence: "The results ___ (announce) by the committee yesterday.", options: ["were announced", "have announced", "announced"], answer: "were announced" },
  { sentence: "If he had studied harder, he ___ (pass) the exam.", options: ["would pass", "would have passed", "will have passed"], answer: "would have passed" },
  { sentence: "The terms ___ (negotiate) before signing the contract.", options: ["will be negotiated", "are negotiated", "were negotiated"], answer: "were negotiated" },
  { sentence: "She prefers that he ___ (arrive) early to prepare.", options: ["arrives", "arrive", "arrived"], answer: "arrive" },
  { sentence: "By the time you read this, I ___ (leave) already.", options: ["have left", "had left", "will have left"], answer: "will have left" },
  { sentence: "The engineer recommended that the valve ___ (replace) immediately.", options: ["is replaced", "be replaced", "was replaced"], answer: "be replaced" },
  { sentence: "After they ___ (investigate), the errors became apparent.", options: ["investigated", "had investigated", "have investigated"], answer: "had investigated" },
  { sentence: "He ___ (not/finish) his thesis yet.", options: ["did not finish", "has not finished", "had not finished"], answer: "has not finished" },
  { sentence: "By 2010 she ___ (publish) five articles.", options: ["published", "had published", "has published"], answer: "had published" },
  { sentence: "The policy ___ (apply) to all employees from the outset.", options: ["applies", "applied", "was applied"], answer: "applies" },
  { sentence: "If it ___ (rain) tomorrow, the match will be postponed.", options: ["rains", "rained", "will rain"], answer: "rains" },
  { sentence: "The contract ___ (sign) by both parties last week.", options: ["was signed", "has signed", "is signed"], answer: "was signed" },
  { sentence: "She acted as if she ___ (know) everything.", options: ["knows", "knew", "has known"], answer: "knew" },
  { sentence: "They ___ (plan) to launch the product before the holiday.", options: ["planned", "have planned", "were planning"], answer: "planned" },
  { sentence: "By then the machine ___ (repair) and ready for testing.", options: ["had been repaired", "has been repaired", "was repaired"], answer: "had been repaired" },
  { sentence: "If you ___ (mix) those chemicals, a reaction will occur.", options: ["mix", "mixed", "will mix"], answer: "mix" },
  { sentence: "He insisted that the report ___ (be) completed by Friday.", options: ["is", "be", "was"], answer: "be" }
];

// --- Rendering the quiz ---
const quizForm = document.getElementById("quizForm");
const totalPoints = 100; // fixed total for display

// Helper: normalize user input
const norm = s => (s||"").toString().trim().toLowerCase();

// Render verb questions (1-25)
verbQuestions.forEach((q, i) => {
  const html = `
    <div class="q">
      <p><span class="badge">${i + 1}</span> Base form: <strong>${q.base}</strong></p>
      <input type="text" name="past-${i}" placeholder="Past tense">
      <input type="text" name="participle-${i}" placeholder="Past participle">
      <div class="answer" id="answer-${i}" style="display:none;">
        Correct: <em>${q.past}</em> / <em>${q.participle}</em>
      </div>
    </div>`;
  quizForm.insertAdjacentHTML('beforeend', html);
});

// Render parallelism (26-50)
parallelQuestions.forEach((q, i) => {
  const index = 25 + i;
  const html = `
    <div class="q">
      <p><span class="badge">${index + 1}</span> ${q.sentence}</p>
      <input type="text" name="parallel-${index}" placeholder="P or NP">
      <div class="answer" id="answer-${index}" style="display:none;">
        Correct: <em>${q.answer.toUpperCase()}</em>
      </div>
    </div>`;
  quizForm.insertAdjacentHTML('beforeend', html);
});

// Render MCQs (51-75) with radio buttons
verbContextQuestions.forEach((q, i) => {
  const index = 50 + i;
  let optionsHTML = q.options.map(opt => `
    <label class="mcq-option">
      <input type="radio" name="context-${index}" value="${opt.toLowerCase()}"> ${opt}
    </label>
  `).join('');

  const html = `
    <div class="q">
      <p><span class="badge">${index + 1}</span> ${q.sentence}</p>
      <div class="mcq-group">
        ${optionsHTML}
      </div>
      <div class="answer" id="answer-${index}" style="display:none;">
        Correct: <em>${q.answer}</em>
      </div>
    </div>`;
  quizForm.insertAdjacentHTML('beforeend', html);
});

// --- Submission & grading ---
document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // Validate every input has a value
  const inputs = document.querySelectorAll("input[type='text']");
  const radios = document.querySelectorAll("input[type='radio']");
  for (const inp of inputs) {
    if (inp.value.trim() === "") {
      alert("Please answer all questions before submitting.");
      inp.focus();
      return;
    }
  }

  // Validate radio groups
  for (let i = 50; i < 75; i++) {
    if (!document.querySelector(`input[name="context-${i}"]:checked`)) {
      alert(`Please select an answer for question ${i + 1}.`);
      return;
    }
  }

  let score = 0;

  // Q1-25 verbs: each correct blank = 1 point (total 50)
  verbQuestions.forEach((q, i) => {
    const userPast = norm(document.querySelector(`input[name="past-${i}"]`).value);
    const userPart = norm(document.querySelector(`input[name="participle-${i}"]`).value);
    if (userPast === q.past.toLowerCase()) score++;
    if (userPart === q.participle.toLowerCase()) score++;
    document.getElementById(`answer-${i}`).style.display = "block";
  });

  // Q26-50 parallelism: each correct = 1 point (25)
  parallelQuestions.forEach((q, i) => {
    const idx = 25 + i;
    const user = norm(document.querySelector(`input[name="parallel-${idx}"]`).value);
    const userShort = user === 'parallel' ? 'p' : (user === 'not parallel' || user === 'notparallel' ? 'np' : user);
    if (userShort === q.answer) score++;
    document.getElementById(`answer-${idx}`).style.display = "block";
  });

  // Q51-75 MCQs: each correct = 1 point (25)
  verbContextQuestions.forEach((q, i) => {
    const idx = 50 + i;
    const selected = document.querySelector(`input[name="context-${idx}"]:checked`);
    const user = selected ? norm(selected.value) : "";
    if (user === (q.answer.toLowerCase())) score++;
    document.getElementById(`answer-${idx}`).style.display = "block";
  });

  document.getElementById("scoreText").textContent = `${score} / ${totalPoints}`;
  document.getElementById("scoreDisplay").style.display = "inline-flex";
  document.getElementById("scoreDisplay").scrollIntoView({ behavior: 'smooth' });
});

// --- Reset ---
document.getElementById("resetBtn").addEventListener("click", function () {
  document.querySelectorAll("input[type='text']").forEach(i => i.value = "");
  document.querySelectorAll("input[type='radio']").forEach(r => r.checked = false);
  document.querySelectorAll(".answer").forEach(a => a.style.display = "none");
  document.getElementById("scoreDisplay").style.display = "none";
});
