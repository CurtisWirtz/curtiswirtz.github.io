// Scroll triggered animations: simple intersection observer
const animationDriver = () => {
  // console.log('animation driver ran');
  const items = document.querySelectorAll(".step");

  const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    // console.log('callback ran');
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.classList.contains("pre-animated")) {
        // console.log(entry);

        observer.unobserve(entry.target);

        // trigger animation
        entry.target.classList.remove("pre-animated");
      }
    });
  };

  const animationObserver = new IntersectionObserver(callback, {
    rootMargin: "0px 0px -20% 0px",
    threshold: 0
  });

  const observeItems = (items: NodeListOf<Element>) => {
    items.forEach((item) => {
      item.classList.add("pre-animated");
      animationObserver.observe(item);
    });
  };
  observeItems(items);
};

document.addEventListener("DOMContentLoaded", () => {
  // Reset the playing of animated gif on every load by appending '?RANDOM_NUMBER' to the src, forcing image load
  function generateNumber(): string {
    const digits: string = "0123456789";
    let result: string = "";

    for (let i = 0; i < 5; i++) {
      const randomIndex: number = Math.floor(Math.random() * digits.length);
      result += digits[randomIndex];
    }

    return result;
  }

  const resetGif = () => {
    const gif: HTMLImageElement | null = document.getElementById("pixel-curtis") as HTMLImageElement;
    if (gif) {
      const image_path: string = gif.src;
      const timeAndDateNumbers: string = generateNumber();
      gif.src = image_path + `?${timeAndDateNumbers}`;
    }
  };
  resetGif();

  // trigger scroll entry animations
  animationDriver();
});
