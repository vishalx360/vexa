const talkBtn = document.querySelector("#talk");

const content = document.querySelector("#content");

const speakerCheckbox = document.querySelector("#speakerCheckbox");

let soundOutput = true;

speakerCheckbox.addEventListener("change", function() {
  if (this.checked) {
    soundOutput = true;
  } else {
    soundOutput = false;
  }
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
//   ##
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  // console.log("Voice is activated");
  talkBtn.style.backgroundColor = "#f44336";
  talkBtn.style.color = "white";
  talkBtn.textContent = "LISTINING..";
};

recognition.onend = () => {
  talkBtn.style.backgroundColor = "white";
  talkBtn.style.color = "black";
  talkBtn.textContent = "START";
};

recognition.onresult = event => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = "You Said : " + transcript;
  if (soundOutput) {
    readOutLoud(transcript);
  }
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
