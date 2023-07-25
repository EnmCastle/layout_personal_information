const btn = document.querySelector(".switch button");
let isLg = false;
const img = document.querySelector("#profile img")

btn.addEventListener("click", function() {
  document.body.classList.toggle("Lg")
  gsap.to(btn, { x: isLg ? '0%' : '100%', duration: 0.3 });
  isLg = !isLg;
  
  if (isLg) {
  img.setAttribute('src', './assets/avatar-light.png');
} else {
  img.setAttribute('src', './assets/avatar.png');
}
});



