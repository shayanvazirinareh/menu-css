let btn_menu = document.querySelector(".btn-menu");
let menu_s = document.querySelector(".menu-s");
let slider_sub = document.querySelector(".slider-sub");
let flag =false;

btn_menu.addEventListener(
  "click",
  function () {
    if (!flag) {
        flag=true
      btn_menu.textContent = "close";
      menu_s.setAttribute('style','right:0;')
      slider_sub.setAttribute('style','right:50%;')
   }else{
    flag=false
    btn_menu.textContent = "open";
    menu_s.setAttribute('style','right:-50%;')
    slider_sub.setAttribute('style','right:-50%;')
   }
  }
);

