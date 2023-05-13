let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	slides[slideIndex-1].style.display = "block";  
	setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const audio = new Audio('eternal sunshine.mp3');
const audioButton = document.getElementById('audioButton');

audioButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    audioButton.textContent = 'play';
  } else {
    audio.pause();
    audioButton.textContent = 'pause';
  }
});
