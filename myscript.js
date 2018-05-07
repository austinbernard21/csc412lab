var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1;}    
  if (n < 1) {slideIndex = x.length;}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

$(function() {
    $('body').removeClass('fade-out');
});

function changeText() {
    var element = document.getElementById("changeText");
    element.innerHTML = "A python script that runs Optical Character Recognition on live trivia game to search for most probable answer before timer runs out.";
    element.style.marginRight = "15em";
    element.style.marginLeft = "15em";
    element.style.border = "none";
}


function changeText1() {
    var element = document.getElementById("changeText1");
    element.innerHTML = "Just some song from my band.";
    element.style.marginRight = "15em";
    element.style.marginLeft = "15em";
    element.style.border = "none";
}