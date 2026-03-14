$(function () {

    // Header Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Featured Owl Carousel
    $('.featured-projects-slider .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    // Count
    $('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 7000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    btn.addEventListener("click", scrollToTop);

    window.onscroll = function () {
        const btn = document.getElementById("scrollToTopBtn");
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };


    // Aos
	AOS.init({
		once: true,
	});

const containers = document.querySelectorAll('.ba-container');

containers.forEach(container => {

const slider = container.querySelector('.ba-slider');
const after = container.querySelector('.after');

let active = false;

function moveSlider(clientX){

const rect = container.getBoundingClientRect();
let x = clientX - rect.left;

if(x < 0) x = 0;
if(x > rect.width) x = rect.width;

let percent = (x / rect.width) * 100;

after.style.clipPath = `inset(0 ${100-percent}% 0 0)`;
slider.style.left = percent + "%";

}

// desktop
container.addEventListener("mousedown", () => active = true);
window.addEventListener("mouseup", () => active = false);

window.addEventListener("mousemove", (e)=>{
if(!active) return;
moveSlider(e.clientX);
});

// mobile
container.addEventListener("touchstart", ()=> active=true);
window.addEventListener("touchend", ()=> active=false);

window.addEventListener("touchmove",(e)=>{
if(!active) return;
moveSlider(e.touches[0].clientX);
});

});
    
});

