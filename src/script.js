document.addEventListener("DOMContentLoaded", () => {
  //reset the playing of animated gif on every load
  const resetGif = () => {
    const gif = document.getElementById("pixel-curtis");
    const src = gif.src;
    gif.src = "";
    gif.src = src;
  };
  resetGif();

  console.log("testing");
});
