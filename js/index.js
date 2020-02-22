
document.addEventListener("scroll", function(){
  document.getElementById("portfolio").innerHTML = document.documentElement.scrollTop;

  if (document.documentElement.scrollTop > 50){
    $('nav').addClass("nav-scroll");
    $('.nav-link').addClass("scroll-text");
    $('.branding').addClass("scroll-text");
  } else {
    $('nav').removeClass("nav-scroll");
    $('.nav-link').removeClass("scroll-text");
    $('.branding').removeClass("scroll-text");
  }
});
