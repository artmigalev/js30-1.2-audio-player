const audio = document.querySelector("audio");
const BTN_PLAY = document.querySelector(".play");
const BTN_NEXT = document.querySelector(".next");
const BTN_PREV = document.querySelector(".prev");




window.onload = () => {

  BTN_PLAY.addEventListener('click',(event)=> {
    const click = event.target

    if(click.classList.contains('play')){
      if(!BTN_PLAY.classList.contains('pause')){

        audio.play()
        BTN_PLAY.classList.toggle('pause')
      }else{
        audio.pause()
        BTN_PLAY.classList.toggle('pause')
      }
    }
  })



}




// audio.onended = () => {
//   document.querySelector(".play").style.backgroundImage =
//     "linear-gradient(rgba(242, 242, 242, 0.5), rgba(7, 4, 4, 0.5)),url('./assets/svg/play.png')";
// };
