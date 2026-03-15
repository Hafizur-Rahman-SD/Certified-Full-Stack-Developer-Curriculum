const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

pads.forEach(pad => {

  pad.addEventListener("click", () => {
    playSound(pad);
  });

});

function playSound(pad){

  const key = pad.innerText.trim();
  const audio = document.getElementById(key);

  audio.currentTime = 0;
  audio.play();

  display.innerText = pad.id;
}

document.addEventListener("keydown", function(e){

  const key = e.key.toUpperCase();

  const audio = document.getElementById(key);

  if(audio){

    const pad = audio.parentElement;

    audio.currentTime = 0;
    audio.play();

    display.innerText = pad.id;
  }

});