 // JavaScript for smooth scrolling
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// JavaScript to hide/show the footer while scrolling
var lastScrollTop = 0;

window.addEventListener("scroll", function () {
    var st = window.scrollY || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // Scrolling down, hide the footer
        document.querySelector('footer').classList.add('footer-hidden');
    } else {
        // Scrolling up, show the footer
        document.querySelector('footer').classList.remove('footer-hidden');
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});

function typeWriter(elementId, text, speed) {
    const element = document.getElementById(elementId);
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Call the typewriter effect for each paragraph
window.addEventListener('DOMContentLoaded', function () {
    typeWriter('typewriter-paragraph1', "Explore the future with us! At the AI Club, we are passionate about artificial intelligence and its limitless possibilities.", 50);
});



// Function to scroll to the top
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show/hide the button based on scroll position
window.addEventListener('scroll', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});