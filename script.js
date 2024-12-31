var tl = gsap.timeline();

var menu = document.querySelector("#menuOpen");
var close = document.querySelector("#menuClose");

tl.to(".menu", {
  right: 0,
  duration: 1,
  ease: "power3.inOut",
});
tl.from(".menu li", {
  x: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
});

tl.from("#menuClose", {
  opacity: 0,
});

tl.paused({
  paused: true,
});
menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});
