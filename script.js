const chunks = document.querySelectorAll('main > *');

chunks.forEach((el, i) => {
  el.style.opacity = 0; // start hidden
  el.style.animation = `fadeInLeft 0.8s forwards`;
  el.style.animationDelay = `${i * .15}s`; // stagger
});