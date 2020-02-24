
document.addEventListener("scroll", function(){
  document.getElementById("scroll").innerHTML = document.documentElement.scrollTop;

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
//Navbar effect

$("#btnTitle").click(function(){
  window.location.href = "#portfolio";
});
//on clicking "Find out more, it scrolls to portfolio/projects section"

//click event / href for project (items)
$('.project-hover').click(function(){
// functon(e) can be used too
  console.log(this.classList.contains('lucky'));

  if (this.classList.contains('lucky')){ // CHANGE THE HREF - WHEN DEPLOYING!!!
    window.location.href = "http://bibek-portfolio.com/lucky/index.html";
  }

  if(this.classList.contains('banana')){ // CHANGE THE HREF - WHEN DEPLOYING!!!
    window.location.href = "http://bibek-portfolio.com/banana/index.html";
  }

  if(this.classList.contains('orange')){
    window.location.href = "http://bibek-portfolio.com/orange/index.html";
  }

  if(this.classList.contains('dicee')){
    window.location.href = "http://bibek-portfolio.com/dicee/dicee.html";
  }

  if(this.classList.contains('drum')){
    window.location.href = "http://bibek-portfolio.com/drum/index.html";
  }

  if(this.classList.contains('simon')){
    window.location.href = "http://bibek-portfolio.com/simon/index.html";
  }

  if(this.classList.contains('tic-tac-toe')){
    window.location.href = "http://bibek-portfolio.com/tic-tac-toe/index.html";
  }

// NODEJS - HREF ARE DIFFERENT HERE
  if(this.classList.contains('bitcoinAPI')){
    window.location.href = "https://evening-savannah-56387.herokuapp.com";
  }

  if(this.classList.contains('newsletter-signup')){
    window.location.href = "https://warm-wave-77840.herokuapp.com";
  }

  if(this.classList.contains('to-do-list')){
    window.location.href = "https://tranquil-bayou-41848.herokuapp.com";
  }

  if(this.classList.contains('blog-website')){
    window.location.href = "https://lit-headland-09710.herokuapp.com";
  }

});
