function displayAffirmations(response) {
  new Typewriter("#affirmations-space", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
  });
}

function generateAffirmations(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#instruction-space");
  let apiKey = "fc07ae9o4bd8db7562f510t9323275bb";
  let prompt = `please generate affirmations about ${instructionInput}`;
  let context =
    "you are a supportive AI assistant with vast knowledge about affirmations. Your mission is to generate four lines of affirmations using HTML format e.g <p> affirmation </p>. Each affirmation should be on a new line. Please keep your responses short and simple";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAffirmations);
}

let affirmationsGenerator = document.querySelector(
  "#affirmations-generator-form"
);
affirmationsGenerator.addEventListener("submit", generateAffirmations);
