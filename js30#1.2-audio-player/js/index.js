const audio = document.querySelector("audio");
const BTN_PLAY = document.querySelector(".play");
const BTN_NEXT = document.querySelector(".next");
const BTN_PREV = document.querySelector(".prev");
const artist = document.querySelector(".artist-name");
const song = document.querySelector(".song-name");
const display = document.querySelector(".img-artist");
const currentTime = document.querySelector(".time-start");
const finishSong = document.querySelector(".time-end");
const progress = document.querySelector(".progress-bar");
const bodyImg = document.querySelector(".body-bg");
const listSrsSongs = [
  {
    artist: "Linlin Park",
    song: "Numb",
    displayPic: "IL3s8qi8XaA.jpg",
  },
  {
    artist: "Linlin Park",
    song: "In The End",
    displayPic: "OBKWpCynBhI.jpg",
  },
  {
    artist: "Linlin Park",
    song: "Leave Out All The Rest",
    displayPic: "xP9aGHEGWlc.jpg",
  },
];
let indexSong = 0;
audio.load()

audio.onloadedmetadata = (event) => {


  finishSong.innerHTML = convertedToMinutes(Math.trunc(audio.duration));
  progress.min = audio.currentTime;
  progress.max = audio.duration;


};


audio.addEventListener("playing", () => {
  audio.addEventListener("timeupdate", (event) => {
    currentTime.innerHTML = convertedToMinutes(Math.trunc(audio.currentTime));
    progress.value = audio.currentTime;
    progress.addEventListener("click", (event)=>{
      audio.pause()
      audio.currentTime = progress.value
      audio.play()



    });
    progress.ontouchend = (event) => {
      audio.pause()
      audio.currentTime = progress.value;
      audio.play()
    };
    progress.addEventListener("dragend", () => {
      audio.pause();
      audio.currentTime = progress.value;
      audio.play();
    });
  });
});
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
      if (indexSong > listSrsSongs.length - 1) {
        indexSong = 0;
      }
      settingSong(indexSong);
    }
  });
  BTN_PREV.addEventListener("click", (event) => {
    const click = event.target;
    if (click.classList.contains("prev")) {
      indexSong--;
      if (indexSong < 0) {
        indexSong = listSrsSongs.length - 1;
      }
      settingSong(indexSong);
    }
  });
  audio.addEventListener("play", (event) => {
    BTN_PLAY.classList.add("pause");
    currentTime.innerHTML = convertedToMinutes(Math.trunc(audio.currentTime));
  });
  audio.addEventListener("ended", () => {

    settingSong(indexSong++);
    audio.play();
  });
};

function settingSong(indexSong) {
  audio.src = `./assets/audio/Linkin Park - ${listSrsSongs[indexSong].song}.mp3`;
  audio.addEventListener("loadedmetadata", function () {
    finishSong.innerHTML = convertedToMinutes(Math.trunc(audio.duration));
    currentTime.innerHTML = convertedToMinutes(Math.trunc(audio.currentTime));
  });
  artist.textContent = listSrsSongs[indexSong].artist;
  song.textContent = listSrsSongs[indexSong].song;
  display.src = `./assets/img/player_pic/${listSrsSongs[indexSong].displayPic}`;
  bodyImg.src = `./assets/img/player_pic/${listSrsSongs[indexSong].displayPic}`;
  bodyImg.alt = listSrsSongs[indexSong].song

  if (BTN_PLAY.classList.contains("pause")) {
    audio.play();
  }
  return;
}

function convertedToMinutes(s) {
  let m = Math.trunc(s / 60) + "";
  s = (s % 60) + "";
  return m.padStart(2, 0) + ":" + s.padStart(2, 0);
}
