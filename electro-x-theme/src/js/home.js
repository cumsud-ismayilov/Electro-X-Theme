

// slide 1code start
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
// slide 1code end

function displayTime(){
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();


  document.getElementById('hours').innerHTML = hrs ;
  document.getElementById('minutes').innerHTML = min ;
  document.getElementById('seconds').innerHTML = sec ;
}

setInterval(displayTime,10);



var swiper1 = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper1: swiper1,
  },
});




const item = document.querySelector(".alldepart");
const list  = document.querySelector(".departlist");
if(item){
  item.addEventListener("click",()=>{
      console.log("salm");
       list.classList.toggle("departactive")

    })
}

const MenuOpen = document.querySelector(".shopcart");
const OpenList = document.querySelector(".shplist");

if (MenuOpen) {
    MenuOpen.addEventListener("click",()=>{
        console.log("salam");
        OpenList.classList.toggle("shopactive")
    
  })
}


const Navbar1 = document.querySelector(".mobilenav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    if (Navbar1) {
      Navbar1.classList.add("actice-nav1");
    }
  } else {
    if (Navbar1) {
      Navbar1.classList.remove("actice-nav1");
    }
  }
});



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


    const Menuitem = document.querySelector(".mobile-navclick");
    const Menulist  = document.querySelector(".menulist");
    if(Menuitem){
      Menuitem.addEventListener("click",()=>{
          console.log("salm");
           Menulist.classList.toggle("activemobile")
    
        })
    }
