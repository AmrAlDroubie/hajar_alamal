let date = new Date();
let this_year = date.getFullYear();
document.querySelector("#this-year").textContent = this_year;

// slide carousel to
var myCarousel = document.getElementById('pro-carousel');
var carousel = new bootstrap.Carousel(myCarousel)



let boxes  = document.querySelectorAll(".more-example-box");

boxes.forEach(box => {
    box.onclick = function(){
            carousel.to(this.getAttribute('data-num')) 
    }
} )


