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
    const gif: HTMLElement | null = document.getElementById("pixel-curtis");
    console.log(gif);
    if (gif) {
      const src: string = gif.src;
      const timeAndDateNumbers: number = generateNumber();
      gif.src = "";
      gif.src = src + `?${timeAndDateNumbers}`;
    }
  };
  resetGif();

  console.log("testing");
});
