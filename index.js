let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}



//Animate top div
let div1 = document.getElementById("topdiv");
    let div1Text = document.getElementById("topdiv-text");
    let div1Img = document.getElementById("mainImg");

    window.addEventListener('scroll',function(){
      let val = window.scrollY;
      div1Img.style.marginLeft = val*0.5 + 'px';
      div1.style.marginLeft = -val*0.5 + 'px';
    })