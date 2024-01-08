const background = document.querySelector("#background");

const handleScroll = () => {
  const { scrollY, innerHeight } = window;

  const currentIndex = Math.floor(scrollY / (innerHeight - 200));

  background.style.transform = `translateX(${
    currentIndex > 0 ? 56 * currentIndex : 0
  }px)`;
};

document.addEventListener("scroll", handleScroll, { passive: true });
