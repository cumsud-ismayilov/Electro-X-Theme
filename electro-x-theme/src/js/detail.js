// Slider code start
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
   
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 35,
      },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
   });
// Slider code end

// Tumb galery code start
var swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper1: swiper1,
  },
});
// Tumb galery code end

const Numberclick1 = document.querySelector(".number2");
if (Numberclick1) {
  Numberclick1.addEventListener("click",()=>{
    console.log("salam");
    Numberclick1.style.borderColor = "#fed700";
  })
}

const Numberclick2 = document.querySelector(".number1");
if (Numberclick2) {
  Numberclick2.addEventListener("click",()=>{
    console.log("salam");
    Numberclick2.style.borderColor = "#fed700";
  })
}














