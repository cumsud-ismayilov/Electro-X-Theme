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

// Collection ToTop code start
const ToTop = document.querySelector(".totop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      if (ToTop) {
        ToTop.style.display = "flex";
       
       
          
          
      }
    } else {
      document.querySelector("body").style.background = "white";
      if (ToTop) {
        ToTop.style.display = "none";
      }
    }
  });
  ToTop &&
    ToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
// Collection ToTop code end

// Navbar scrool code start
const Navbar = document.querySelector(".nav-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    if (Navbar) {
      Navbar.classList.add("actice-nav");
    }
  } else {
    if (Navbar) {
      Navbar.classList.remove("actice-nav");
    }
  }
});
// Navbar scrool code end