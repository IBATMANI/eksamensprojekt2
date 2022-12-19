const next = document.querySelector(".carouselknap--next"),
         back = document.querySelector(".carouselknap--back"),
         carousel = document.querySelector(".carouselcon");
       let angle = 0;
       
       next.addEventListener("click", () => {
         angle -= 45;
         carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
       });
       
       back.addEventListener("click", () => {
         angle += 45;
         carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
       });
