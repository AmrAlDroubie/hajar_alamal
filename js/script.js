let date = new Date();
let this_year = date.getFullYear();
document.querySelector("#this-year").textContent = this_year;

// slide carousel to
var myCarouselEl = document.getElementById('carousel');
var carousel = bootstrap.Carousel.getInstance(myCarouselEl);

let slide  = document.createElement("div");
slide.classList.add("carousel-item");
slide.classList.add("active");

let boxes  = document.querySelectorAll(".more-example-box");

boxes.forEach(box => {
    box.onclick = function(){
        slide.innerHTML = `<img class='w-100 d-block' src = ${box.querySelector("img").getAttribute("src")}>`;
        document.querySelector(".pro-carousel .carousel-inner").prepend(slide);
    }
} )

