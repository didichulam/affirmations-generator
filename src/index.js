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
  let prompt = `please generate positive affirmations for someone who wants to speak to themselves about ${instructionInput}`;
  let context =
    "you are a supportive AI assistant who takes mental health very seriously and gives simple responses. Your mission is to generate four lines of positive words of affirmation using HTML format e.g <p> affirmation </p>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAffirmations);
}

let affirmationsGenerator = document.querySelector(
  "#affirmations-generator-form"
);
affirmationsGenerator.addEventListener("submit", generateAffirmations);
