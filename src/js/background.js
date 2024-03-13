import mainManPng from "../img/webApiFormat/main-man-2560.webp";
import manAndCarBackground from "../img/imgAll/manAndCarBackground.jpg";
import motoBackrgound from "../img/imgAll/motoBackrgound.jpg";

export function backgroundModule() {
  let backgroundPictures = [mainManPng, manAndCarBackground, motoBackrgound];

  let count = 0;

  function changeBackground(pictures) {
    let backgrounds = document.querySelector(".background");

    if (pictures.length !== 0 && backgrounds) {
      backgrounds.style.backgroundImage = `url(${pictures[count]})`;
      count = (count + 1) % pictures.length;
    } else {
      console.error("Background not found or pictures array is empty");
    }
  }

  let timerId = setTimeout(function tick() {
    changeBackground(backgroundPictures);
    timerId = setTimeout(tick, 5000); // (*)
  }, 4000);
}
