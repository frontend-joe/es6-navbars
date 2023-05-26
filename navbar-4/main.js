const navbar = document.querySelector("#navbar");

let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  () => {
    console.log("scroll");
    var { pageYOffset } = window;
    if (pageYOffset > lastScrollTop) {
      // downward scroll
      navbar.classList.remove("visible");
    } else if (pageYOffset < lastScrollTop) {
      // upward scroll
      navbar.classList.add("visible");
    } // else was horizontal scroll
    lastScrollTop = pageYOffset <= 0 ? 0 : pageYOffset;
  },
  { passive: true }
);
