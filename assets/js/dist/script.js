"use strict";
// Scroll triggered animations: simple intersection observer
var animationDriver = function () {
    // console.log('animation driver ran');
    var items = document.querySelectorAll(".step");
    var callback = function (entries, observer) {
        // console.log('callback ran');
        entries.forEach(function (entry) {
            if (entry.isIntersecting && entry.target.classList.contains("pre-animated")) {
                // console.log(entry);
                observer.unobserve(entry.target);
                // trigger animation
                entry.target.classList.remove("pre-animated");
            }
        });
    };
    var animationObserver = new IntersectionObserver(callback, {
        rootMargin: "0px 0px -20% 0px",
        threshold: 0
    });
    var observeItems = function (items) {
        items.forEach(function (item) {
            item.classList.add("pre-animated");
            animationObserver.observe(item);
        });
    };
    observeItems(items);
};
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
    // trigger scroll entry animations
    animationDriver();
});
//# sourceMappingURL=script.js.map