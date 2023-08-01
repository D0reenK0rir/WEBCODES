var slides=
document.querySelectorAll('.slides img');
var currentSlide=0;
var slideInterval=setInterval(nextSlide,3000);
function nextSlide(){
    slides[currentSlide].className='';
    currentSlide=(currentSlide+1)%
    slides.length;
    slides[currentSlide].className='active';
}
