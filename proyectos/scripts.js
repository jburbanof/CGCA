const slidesContainer = document.querySelectorAll(".slidesContainer");
let currentSlide = 1;

function openDialog(dialogId) {
	var dialog = document.getElementById(dialogId);
	dialog.style.display = "flex";
	currentSlide = 0;
	updateSlides(dialog);
}

function closeDialog(dialogId) {
	var dialog = document.getElementById(dialogId);
	dialog.style.display = "none";
}

function nextSlide(dialogId) {
	var dialog = document.getElementById(dialogId);
	var slides = dialog.querySelectorAll(".slide");
	if (currentSlide < slides.length - 1) currentSlide++;
	updateSlides(dialog);
}

function prevSlide(dialogId) {
	if (currentSlide > 0) currentSlide--;
	var dialog = document.getElementById(dialogId);
	updateSlides(dialog);
}

function updateSlides(dialog) {
	var slides = dialog.querySelectorAll(".slide");
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = i === currentSlide ? "block" : "none";
	}
}

document.querySelectorAll(".dialog").forEach((dialog) => {
	dialog.addEventListener("click", () => closeDialog(dialog.id));
	dialog
		.querySelector(".slidesContainer")
		.addEventListener("click", function (event) {
			event.stopPropagation();
		});
});
