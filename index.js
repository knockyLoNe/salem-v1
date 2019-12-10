const imagesArray = ["1", "2", "3", "4"];

const img = document.querySelector("img");
const info = document.querySelector('.info');
const last = imagesArray[imagesArray.length - 1]
let i = 0;
imagesArray.forEach(image => {
  setTimeout(() => {
    img.src = `img/${image}.png`;
    img.dataset.id = image;
    if (img.dataset.id === last) {
      fadeIn(info)
    }
  }, 1000 * i);
  ++i;
});

function fadeIn(el) {
  el.style.opacity = 0;
  var tick = function () {
    el.style.opacity = +el.style.opacity + 0.01;
    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };
  tick();
}