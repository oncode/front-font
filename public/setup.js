const texts = [
  "The quick brown fox jumps over the lazy dog",
  "Pack my box with five dozen liquor jugs",
  "How vexingly quick daft zebras jump"
];

const title = "DESIGN FRONT FONT";

title
  .toUpperCase()
  .split("")
  .forEach(letter => {
    const actualLetter = letter === " " ? "space" : letter;

    const letterElement = document.createElement(`letter-${actualLetter}`);
    letterElement.classList.add("letter-element");
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("h1-wrapper");
    containerDiv.appendChild(letterElement);
    document.getElementById("textContainer-h2-title").appendChild(containerDiv);
  });

// text
//   .toUpperCase()
//   .split("")
//   .forEach(letter => {
//     const actualLetter = letter === " " ? "space" : letter;

//     const letterElement = document.createElement(`letter-${actualLetter}`);
//     letterElement.classList.add("letter-element");
//     const containerDiv = document.createElement("div");
//     containerDiv.classList.add("h1-wrapper");
//     containerDiv.appendChild(letterElement);
//     document.getElementById("textContainer-h1").appendChild(containerDiv);
//   });

texts.forEach((text, index) => {
  text
    .toUpperCase()
    .split("")
    .forEach(letter => {
      const actualLetter = letter === " " ? "space" : letter;

      const letterElement = document.createElement(`letter-${actualLetter}`);
      letterElement.classList.add("letter-element");
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("h2-wrapper");
      containerDiv.appendChild(letterElement);
      document
        .getElementById(`textContainer-h2-${index}`)
        .appendChild(containerDiv);
    });

  text
    .toUpperCase()
    .split("")
    .forEach(letter => {
      const actualLetter = letter === " " ? "space" : letter;

      const letterElement = document.createElement(`letter-${actualLetter}`);
      letterElement.classList.add("letter-element");
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("h3-wrapper");
      containerDiv.appendChild(letterElement);
      document
        .getElementById(`textContainer-h3-${index}`)
        .appendChild(containerDiv);
    });

  text
    .toUpperCase()
    .split("")
    .forEach(letter => {
      const actualLetter = letter === " " ? "space" : letter;

      const letterElement = document.createElement(`letter-${actualLetter}`);
      letterElement.classList.add("letter-element");
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("h4-wrapper");
      containerDiv.appendChild(letterElement);
      document
        .getElementById(`textContainer-h4-${index}`)
        .appendChild(containerDiv);
    });

  text
    .toUpperCase()
    .split("")
    .forEach(letter => {
      const actualLetter = letter === " " ? "space" : letter;

      const letterElement = document.createElement(`letter-${actualLetter}`);
      letterElement.classList.add("letter-element");
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("h5-wrapper");
      containerDiv.appendChild(letterElement);
      document
        .getElementById(`textContainer-h5-${index}`)
        .appendChild(containerDiv);
    });

  text
    .toUpperCase()
    .split("")
    .forEach(letter => {
      const actualLetter = letter === " " ? "space" : letter;

      const letterElement = document.createElement(`letter-${actualLetter}`);
      letterElement.classList.add("letter-element");
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("h6-wrapper");
      containerDiv.appendChild(letterElement);
      document
        .getElementById(`textContainer-h6-${index}`)
        .appendChild(containerDiv);
    });
});
