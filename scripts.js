const nav = document.querySelector(".navBar");
const carouselImages = document.querySelector(".carousel-images");
const carouselImage = document.querySelector(".carousel-image");

const btnNext = document.querySelector(".carousel-button-next");
const btnPrev = document.querySelector(".carousel-button-prev");
let lastScrollTop = 0;
const delta = 50;
let currentIndex = 0;
const setCarouselWidth = () => {
	carouselImages.style.width = `${carouselImages.children.length * 100}%`;
	carouselImage.style.width = `${100 / carouselImages.children.length}%`;
};
const updateCarousel = () => {
	carouselImages.style.transform = `translateX(-${
		currentIndex * (100 / carouselImages.children.length)
	}%)`;
};

btnNext.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % carouselImages.children.length;
	if (currentIndex === carouselImages.children.length) currentIndex = 0;
	updateCarousel();
});

btnPrev.addEventListener("click", () => {
	currentIndex--;
	if (currentIndex < 0) currentIndex = carouselImages.children.length - 1;
	updateCarousel();
});
setCarouselWidth();
updateCarousel();

window.addEventListener(
	"scroll",
	() => {
		const scrollTop = window.scrollY;
		const viewportHeight = window.innerHeight;
		if (scrollTop < viewportHeight / 2) {
			// If the scroll amount is less than the threshold, do nothing
			return;
		}

		if (scrollTop > lastScrollTop) {
			// If scrolling down, hide the navbar
			nav.classList.add("hide");
		} else {
			// If scrolling up, show the navbar
			nav.classList.remove("hide");
		}
		lastScrollTop = scrollTop;
	},
	false
);
