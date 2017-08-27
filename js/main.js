
var link_buy = document.querySelectorAll(".about__textblock--btn");
var popup_plus = document.querySelector(".modal");
var close_plus = document.querySelector(".close-modal");
var i;

var link_gallery = document.querySelectorAll(".gallery-btn");
var popup_gallery = document.querySelector(".modal-gallery");
var close_gallery = document.querySelector(".close-modal-gallery");

for (i = 0; i < link_buy.length; i++) link_buy[i].addEventListener("click", function (event) {
    event.preventDefault();
    popup_plus.classList.add("modal-go");
});
close_plus.addEventListener("click", function (event) {
    event.preventDefault();
    popup_plus.classList.remove("modal-go");
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup_plus.classList.contains("modal-go")) {
            popup_plus.classList.remove("modal-go");
        }
    };
});

for (i = 0; i < link_buy.length; i++) link_gallery[i].addEventListener("click", function (event) {
    event.preventDefault();
    popup_gallery.classList.add("modal-go");
});
close_gallery.addEventListener("click", function (event) {
    event.preventDefault();
    popup_gallery.classList.remove("modal-go");
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup_gallery.classList.contains("modal-go")) {
            popup_gallery.classList.remove("modal-go");
        }
    };
});