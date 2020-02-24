//Navbar effect
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

//on clicking "Find out more button, it scrolls to portfolio/projects section"
$("#btnTitle").click(function(){
  window.location.href = "#portfolio";
});

//click event / href for project (items)
$('.project-hover').click(function(){
  
  const projectArr = ["lucky", "banana", "orange", "drum", "simon", "tic-tac-toe"]

  for (var i=0; i< projectArr.length; i++){
    if (this.classList.contains(projectArr[i])){ // CHANGE THE HREF - WHEN DEPLOYING!!!
      window.location.href = "http://bibek-portfolio.com/"+projectArr[i]+"/index.html";
    }
  }

//Different urls
if(this.classList.contains('dicee')){
  window.location.href = "http://bibek-portfolio.com/dicee/dicee.html";
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
