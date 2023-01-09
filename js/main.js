


"use strict"

document.addEventListener('click', documentClick);

function documentClick(e){
    const targetItem = e.target;
    if(targetItem.closest('.icon-menu')){
       document.documentElement.classList.toggle('menu-open'); 
    }
    if(targetItem.closest('.menu__link')){
      document.documentElement.classList.toggle('menu-open'); 
   }
}
    $(document).ready(function () {
      $("a").on("click", function (event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            800,
            function () {
              window.location.hash = hash;
            }
          );
        } 
      });
    });
