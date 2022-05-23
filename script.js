/*slideshow*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*navbar*/
const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const navLink = document.querySelector(".nav-link");

        hamburger.addEventListener("click", mobileMenu);
        navLink.forEach( n => n.addEventListener("click", closeMenu));

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }

        function closeMenu(){
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }