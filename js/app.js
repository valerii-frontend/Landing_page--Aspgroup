// burger
let body = document.querySelector("body");
let menuIcon = document.querySelector(".header__icon");
let menu = document.querySelector(".menu_header");
let menuLinks = document.querySelectorAll(".menu__link");
menuIcon.addEventListener("click", function (e) {
	menuIcon.classList.toggle("_active");
	menu.classList.toggle("_active");
	body.classList.toggle("_lock");
});
document.addEventListener("click", function (e) {
	if (
		(menu.classList.contains("_active") && e.target.classList.contains("menu__link")) ||
		e.target.classList.contains("logo")
	) {
		menuIcon.classList.remove("_active");
		menu.classList.remove("_active");
		body.classList.remove("_lock");
	}
});
// swiper
var swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	spaceBetween: 20,
	watchOverflow: false,
	speed: 500,
	initialSlide: 1,
	slideToClickedSlide: true,
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},
	breakpoints: {
		620: {
			slidesPerView: 1.5,
			spaceBetween: 20,
			watchOverflow: false,
			centeredSlides: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
			watchOverflow: false,
			centeredSlides: true,
		},
		992: {
			slidesPerView: 2.5,
			spaceBetween: 30,
			watchOverflow: false,
			centeredSlides: true,
		},
		1230: {
			slidesPerView: 3,
			spaceBetween: 45,
			watchOverflow: true,
			centeredSlides: false,
		},
	},
});

// goto
let sectionLinks = document.querySelectorAll('a[href*="#"]');
for (let index = 0; index < sectionLinks.length; index++) {
	const sectionLink = sectionLinks[index];
	sectionLink.addEventListener("click", function (e) {
		e.preventDefault();
		const blockId = sectionLink.getAttribute("href");
		const block = document.querySelector("" + blockId);
		let header = document.querySelector(".header");
		window.scrollTo({
			top: `${block.offsetTop - header.offsetHeight}`,
			behavior: "smooth",
		});
	});
}

window.addEventListener("scroll", count);
count();
function count() {
	let wrapper = document.querySelector(".wrapper");
	let wrapperHeight = wrapper.offsetHeight - window.innerHeight;
	let scrollHeight = pageYOffset;
	let resultProcent = Math.ceil((scrollHeight / wrapperHeight) * 100);
	let toTopLink = document.querySelector(".to-top-link");
	let linkPath = document.querySelector(".to-top-link__path");
	let linkSvg = document.querySelector(".to-top-link__svg");
	let toTopLinkText = document.querySelector(".to-top-link__span");
	const pathLength = linkPath.getTotalLength();
	linkPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
	toTopLinkText.innerHTML = `${resultProcent}%`;
	linkPath.style.strokeDashoffset = -(pathLength / 100) * resultProcent;
	if (pageYOffset > 0) {
		toTopLink.classList.add("_active");
	} else {
		toTopLink.classList.remove("_active");
	}
}

// popup
let links = document.querySelectorAll("._popup-open");
for (let index = 0; index < links.length; index++) {
	const link = links[index];
	const linkEvent = link.getAttribute("data-event");
	link.addEventListener("click", function (e) {
		popupsClose();
		let popup = document.querySelector(`.popup_${linkEvent}`);
		popup.classList.add("_active");
		body.classList.add("_lock");
		e.preventDefault();
	});
}
function popupsClose() {
	let popups = document.querySelectorAll(".popup");
	for (let index = 0; index < popups.length; index++) {
		const popup = popups[index];
		popup.classList.remove("_active");
		popup.addEventListener("click", function (e) {
			if (e.target.classList.contains("popup__close")) {
				popup.classList.remove("_active");
				body.classList.remove("_lock");
			}
		});
	}
}
;
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector("body").classList.add("_webp");
	} else {
		document.querySelector("body").classList.add("_no-webp");
	}
});
;
let header = document.querySelector(".header");
function headerScroll() {
	if (header) {
		if (pageYOffset > 255) {
			header.style.background = `linear-gradient(89.85deg, rgba(0, 0, 0, ${
				(0.1 * pageYOffset) / 30
			}) 0.18%, rgba(67, 67, 67, ${(0.1 * pageYOffset) / 30}) 98.48%)`;
		} else if (window.innerWidth < 768) {
			header.style.background = "linear-gradient(89.85deg, rgba(0, 0, 0, 0.8) 0.18%, rgba(67, 67, 67, 0.8) 98.48%)";
		} else {
			header.style.background = "linear-gradient(89.85deg, rgba(0, 0, 0, 1) 0.18%, rgba(67, 67, 67, 1) 98.48%);";
		}
	}
}
window.addEventListener("scroll", headerScroll);
headerScroll();
;
