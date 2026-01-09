function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "From fairest creatures we desire increase",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let promptInputElement = document.querySelector("#prompt-input-form");
promptInputElement.addEventListener("submit", generatePoem);
