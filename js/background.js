let backgroundPictures = [
  './imginWEBAPIformat/main-man-2560.webp',
  './img/manAndCarBackground.jpg',
  './img/motoBackrgound.jpg'
]

let count = 0;

function changeBackground (pictures) {

  let backgrounds = document.querySelector('.background')

 
  if (pictures.length !== 0 && backgrounds) {
    backgrounds.style.backgroundImage = `url(${pictures[count]})`
    count = (count + 1) % pictures.length;
  } else {
    console.error('Background not found or pictures array is empty')
  }
}

let timerId = setTimeout(function tick() {
  changeBackground(backgroundPictures);
  timerId = setTimeout(tick, 5000); // (*)
}, 4000);



let description = document.querySelector(".description");

description.onclick = function(event) {

    
    if (event.target.classList.contains("blue-words")) {
        if (event.target.style.color === 'orange') {
            event.target.style.color = ''; 
        } else {
            event.target.style.color = 'orange'; 
        }
    }
    if (event.target.classList.contains("night-city")) {
        if (event.target.style.color === 'green') {
            event.target.style.color = ''; 
        } else {
            event.target.style.color = 'green'; 
        }
    }
};
