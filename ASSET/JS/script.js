// ========search form========= 
let searchFrom=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>
    {
        searchFrom.classList.toggle('active');
        shoppingCart.classList.remove('active');
        userLogin.classList.remove('active');
        menuBar.classList.remove('active');
    }

// =========shopping cart==========
let shoppingCart=document.querySelector('.shopping_cart');
document.querySelector('#cart_btn').onclick=()=>
    {
       shoppingCart.classList.toggle('active');
       searchFrom.classList.remove('active');
        userLogin.classList.remove('active');
        menuBar.classList.remove('active');
    }

// ==============user login======
let userLogin=document.querySelector('.login-form');
document.querySelector('#Login_btn').onclick=()=>
    {
        userLogin.classList.toggle('active');
        searchFrom.classList.remove('active');
        shoppingCart.classList.remove('active');
        menuBar.classList.remove('active');
    }

    // =========menu bar=======
let menuBar=document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=()=>
        {
            menuBar.classList.toggle('active');
            searchFrom.classList.remove('active');
            shoppingCart.classList.remove('active');
            userLogin.classList.remove('active');
        }
window.onscroll =()=>{

    searchFrom.classList.remove('active');
    shoppingCart.classList.remove('active');
    userLogin.classList.remove('active');
    menuBar.classList.remove('active');

}
// ====slider product=======
var swiper = new Swiper(".product-slider" , {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:1500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      991: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
// ====customer slider

var swiper = new Swiper(".customer-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay:1500,
      disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      
    },
    991: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
