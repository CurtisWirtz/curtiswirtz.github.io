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
        if (gif) {
            var image_path = gif.src;
            var timeAndDateNumbers = generateNumber();
            gif.src = image_path + ("?" + timeAndDateNumbers);
        }
    };
    resetGif();
    console.log("testxxxxing");
});
//# sourceMappingURL=script.js.map