const audio = document.querySelector("audio");
const BTN_PLAY = document.querySelector(".play");
const BTN_NEXT = document.querySelector(".next");
const BTN_PREV = document.querySelector(".prev");
const listSrsSongs = [
  "./assets/audio/beyonce.mp3",
  "./assets/audio/dontstartnow.mp3",
  "./assets/audio/Linkin Park - In The End.mp3",
  "./assets/audio/Linkin Park - Leave Out All The Rest.mp3",
  "./assets/audio/Linkin Park - Numb.mp3",
];
let indexSong = 0;

window.onload = () => {
  BTN_PLAY.addEventListener("click", (event) => {
    const click = event.target;

    if (click.classList.contains("play")) {
      if (!BTN_PLAY.classList.contains("pause")) {
        audio.play();
        BTN_PLAY.classList.toggle("pause");
      } else {
        audio.pause();
        BTN_PLAY.classList.toggle("pause");
      }
    }
  });

  BTN_NEXT.addEventListener("click", (event) => {
    const click = event.target;
    if (click.classList.contains("next")) {
      indexSong++;
      if (indexSong > listSrsSongs.length) {
        indexSong = 0;
      }
      audio.src = listSrsSongs[indexSong];
      audio.play();
      if (!BTN_PLAY.classList.contains("pause")) {
        BTN_PLAY.classList.add("pause");
      }
    }
  });
};

// audio.onended = () => {
//   document.querySelector(".play").style.backgroundImage =
//     "linear-gradient(rgba(242, 242, 242, 0.5), rgba(7, 4, 4, 0.5)),url('./assets/svg/play.png')";
// };
