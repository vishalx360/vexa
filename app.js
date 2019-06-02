const talkBtn = document.querySelector("#talk");

const content = document.querySelector("#content");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
//   ##
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("Voice is activated");
  talkBtn.style.backgroundColor = "#f44336";
  talkBtn.style.color = "white";
};

recognition.onend = () => {
  talkBtn.style.backgroundColor = "white";
  talkBtn.style.color = "black";
};

recognition.onresult = event => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = "You Said : " + transcript;
  readOutLoud(transcript);
};

//
talkBtn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(msg) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = msg;
  window.speechSynthesis.speak(speech);
}
