// Scroll triggered animations: simple intersection observer
const animationDriver = (): void => {
  // console.log('animation driver ran');
  const items = document.querySelectorAll(".step");

  const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
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

  const observeItems = (items: NodeListOf<Element>): void => {
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

  const resetGif = (): void => {
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

  // Hide second typewriter line until first line animation completes
  const secondLine: HTMLElement | null = document.getElementById("second-line");
  if (secondLine) {
    setTimeout(() => {
      secondLine.style.opacity = "1";
    }, 1500);
  }

  /* background haze effect appears as you scroll down */
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = scrollPosition / (documentHeight - windowHeight) / 2; // We ultimately divide it. The more you divide it, the more it slows how quickly the haze appears. (example: dividing by 3 only allows the maximum opacity to be ~33%, it appears much darker/subtle)

    const fadeElements = document.querySelectorAll<HTMLElement>(".scroll-fade");

    fadeElements.forEach((element, index) => {
      let maxOpacity = 1;

      // maximum opacities for each of the light effects in the background
      if (index === 0) {
        maxOpacity = 0.4;
      } else if (index === 1) {
        maxOpacity = 0.25;
      } else if (index === 2) {
        maxOpacity = 0.5;
      } else if (index === 3) {
        maxOpacity = 0.75;
      }

      element.style.opacity = Math.min(scrollPercentage, maxOpacity).toString();
    });
  });

  // Load the rest of the example Showcase projects when clicking the Load More button
  const loadMoreProjectsButton: HTMLElement | null = document.getElementById("loadMoreProjects");
  const listItems: NodeListOf<HTMLElement> | null = document.querySelectorAll(".list-group article");
  if (loadMoreProjectsButton) {
    loadMoreProjectsButton.addEventListener("click", () => {
      listItems.forEach((item, idx) => {
        item.classList.remove("hidden");
      });
      // focus on the 5th project after loading, since we load 4 initially
      console.log("listItems[4]:", listItems[4]);
      const targetItem: HTMLElement | null = listItems[4].children[1].firstElementChild as HTMLElement;
      console.log("targetItem:", targetItem);
      if (targetItem) {
        // Check if element exists before focusing
        targetItem.focus();
      }
      // hide button after all projects appear, and tab focus goes to the next project
      loadMoreProjectsButton.style.display = "none";
    });
  }

  // Button to copy email to clipboard in Contact section
  async function copyToClipboard(textToCopy: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }
  const button = document.getElementById("copyEmailButton") as HTMLButtonElement;
  button.addEventListener("click", () => {
    copyToClipboard("curtiswirtz@gmail.com").then(() => {
      // Change svg from document to checkmark, indicating completion
      const documentSvg: HTMLElement | null = button.children[1] as HTMLElement;
      const checkSvg: HTMLElement | null = button.children[2] as HTMLElement;
      if (documentSvg) {
        documentSvg.style.opacity = "0";
        setTimeout(() => {
          documentSvg.style.opacity = "1";
        }, 1000);
      }
      if (checkSvg) {
        checkSvg.style.display = "block";
        checkSvg.style.opacity = "1";
        setTimeout(() => {
          checkSvg.style.opacity = "0";
          checkSvg.style.display = "none";
        }, 1000);
      }
    });
  });
});
