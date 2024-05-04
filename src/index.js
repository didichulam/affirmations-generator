function generateAffirmations(event) {
  event.preventDefault();

  new Typewriter("#affirmations-space", {
    strings: "I get better every single day!",
    autoStart: true,
    cursor: null,
  });
}

let affirmationsGenerator = document.querySelector(
  "#affirmations-generator-form"
);
affirmationsGenerator.addEventListener("submit", generateAffirmations);
