"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // Reset the playing of animated gif on every load by appending '?RANDOM_NUMBER' to the src, forcing image load
    function generateNumber() {
        var digits = "0123456789";
        var result = "";
        for (var i = 0; i < 5; i++) {
            var randomIndex = Math.floor(Math.random() * digits.length);
            result += digits[randomIndex];
        }
        return result;
    }
    var resetGif = function () {
        var gif = document.getElementById("pixel-curtis");
        console.log(gif);
        if (gif) {
            var src = gif.src;
            var timeAndDateNumbers = generateNumber();
            gif.src = "";
            gif.src = src + ("?" + timeAndDateNumbers);
        }
    };
    resetGif();
    console.log("testing");
});
//# sourceMappingURL=script.js.map