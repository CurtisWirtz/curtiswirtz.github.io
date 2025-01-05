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

  console.log("testxxxxing");
});
