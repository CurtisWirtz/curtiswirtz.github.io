"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
            gif.src = image_path + "?".concat(timeAndDateNumbers);
        }
    };
    resetGif();
    // trigger scroll entry animations
    animationDriver();
    // Hide second typewriter line until first line animation completes
    var secondLine = document.getElementById("second-line");
    if (secondLine) {
        setTimeout(function () {
            secondLine.style.opacity = "1";
        }, 1500);
    }
    /* background haze effect appears as you scroll down */
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var documentHeight = document.documentElement.scrollHeight;
        var scrollPercentage = scrollPosition / (documentHeight - windowHeight) / 2; // We ultimately divide it. The more you divide it, the more it slows how quickly the haze appears. (example: dividing by 3 only allows the maximum opacity to be ~33%, it appears much darker/subtle)
        var fadeElements = document.querySelectorAll(".scroll-fade");
        fadeElements.forEach(function (element, index) {
            var maxOpacity = 1;
            // maximum opacities for each of the light effects in the background
            if (index === 0) {
                maxOpacity = 0.4;
            }
            else if (index === 1) {
                maxOpacity = 0.25;
            }
            else if (index === 2) {
                maxOpacity = 0.5;
            }
            else if (index === 3) {
                maxOpacity = 0.75;
            }
            element.style.opacity = Math.min(scrollPercentage, maxOpacity).toString();
        });
    });
    // Load the rest of the example Showcase projects when clicking the Load More button
    var loadMoreProjectsButton = document.getElementById("loadMoreProjects");
    var listItems = document.querySelectorAll(".list-group article");
    if (loadMoreProjectsButton) {
        loadMoreProjectsButton.addEventListener("click", function () {
            listItems.forEach(function (item, idx) {
                item.classList.remove("hidden");
            });
            // focus on the 5th project after loading, since we load 4 initially
            console.log("listItems[4]:", listItems[4]);
            var targetItem = listItems[4].children[1].firstElementChild;
            console.log("targetItem:", targetItem);
            if (targetItem) {
                // Check if element exists before focusing
                targetItem.focus({ preventScroll: true });
            }
            // hide button after all projects appear, and tab focus goes to the next project
            loadMoreProjectsButton.style.display = "none";
        });
    }
    // Button to copy email to clipboard in Contact section
    function copyToClipboard(textToCopy) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, navigator.clipboard.writeText(textToCopy)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error("Failed to copy: ", err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    var button = document.getElementById("copyEmailButton");
    button.addEventListener("click", function () {
        copyToClipboard("curtiswirtz@gmail.com").then(function () {
            // Change svg from document to checkmark, indicating completion
            var documentSvg = button.children[1];
            var checkSvg = button.children[2];
            if (documentSvg) {
                documentSvg.style.opacity = "0";
                setTimeout(function () {
                    documentSvg.style.opacity = "1";
                }, 1000);
            }
            if (checkSvg) {
                checkSvg.style.display = "block";
                checkSvg.style.opacity = "1";
                setTimeout(function () {
                    checkSvg.style.opacity = "0";
                    checkSvg.style.display = "none";
                }, 1000);
            }
        });
    });
});
//# sourceMappingURL=script.js.map