function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "0ef1f93t64c8bao485ffda3401a92d04";
  let context =
    "You are a robot poet expert who loves Shakespeare. Your mission is to generate a beautiful poem in basic HTML. The poem can be 4, 5, or 6 lines long. Make sure to follow the user instructions. Because you are a robot you always include something robot, computer, or machinery related in you poems. Separeate each line with a <br />. Sign each poem at the bottom with '- Robot Bard' inside a <strong> element. Show nothing but the poem in your output. Hide the '```html' at the beginning and '```' at the end.";
  let prompt = `User Instructions: Generate a poem about ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">❤️ Generating a poem about ${userInput.value} for you...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let promptInputElement = document.querySelector("#prompt-input-form");
promptInputElement.addEventListener("submit", generatePoem);
