let mouseX = 0;
let mouseY = 0;

function checkMediaQuery780() {
    return window.matchMedia("(max-width: 780px)").matches;
}

// Function to update the ball's position
function updateBallPosition() {
    const ball = document.querySelector('.ball');
    if (!checkMediaQuery780() && ball) {
        const x = mouseX + window.scrollX - ball.offsetWidth / 2;
        const y = mouseY + window.scrollY - ball.offsetHeight / 2;
        ball.style.transform = `translate(${x}px, ${y - 25}px)`;
    }
}

// Mouse move event handler
function handleMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updateBallPosition();
}

// Scroll event handler
function handleScroll() {
    updateBallPosition();
}

// Add or remove event listeners based on the media query
function toggleEventListeners() {
    const ball = document.querySelector('.ball');
    if (checkMediaQuery780()) {
        // If the screen width is less than or equal to 780px, remove event listeners, hide the ball, and show the cursor
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        if (ball) {
            ball.style.display = 'none'; // Hide ball
        }
        document.body.style.cursor = 'default'; // Make the cursor visible
    } else {
        // If the screen width is greater than 780px, add event listeners, show the ball, and hide the cursor if needed
        document.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        if (ball) {
            ball.style.display = 'block'; // Show ball
        }
        document.body.style.cursor = 'none'; // Optionally hide the cursor
    }
}

// Initial check
toggleEventListeners();

// Add an event listener for resize
window.addEventListener('resize', toggleEventListeners);


function checkMediaQuery780() {
    return window.matchMedia("(max-width: 780px)").matches;
}

// Function to update the ball's position
function updateBallPosition() {
    const ball = document.querySelector('.ball');
    if (!checkMediaQuery780() && ball) {
        const x = mouseX + window.scrollX - ball.offsetWidth / 2;
        const y = mouseY + window.scrollY - ball.offsetHeight / 2;
        ball.style.transform = `translate(${x}px, ${y-20}px)`;
    }
}

// Mouse move event handler
function handleMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updateBallPosition();
}

// Scroll event handler
function handleScroll() {
    updateBallPosition();
}

// Add or remove event listeners based on the media query
function toggleEventListeners() {
    const ball = document.querySelector('.ball');
    if (checkMediaQuery780()) {
        // If the screen width is less than or equal to 780px, remove event listeners, hide the ball, and show the cursor
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        if (ball) {
            ball.style.display = 'none'; // Hide ball
        }
        document.body.style.cursor = 'default'; // Make the cursor visible
    } else {
        // If the screen width is greater than 780px, add event listeners, show the ball, and hide the cursor if needed
        document.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        if (ball) {
            ball.style.display = 'block'; // Show ball
        }
        document.body.style.cursor = 'none'; // Optionally hide the cursor
    }
}

// Initial check
toggleEventListeners();

// Add an event listener for resize
window.addEventListener('resize', toggleEventListeners);

// Navbar scroll behavior
// Section Swipe
let lastScrollTopSections = 0; // Separate scroll tracking for sections

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.vorn-section .vorn-content');
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionPosition < screenPosition) {
            if (scrollTop > lastScrollTopSections) {
                section.classList.add('vorn-active');
                section.classList.remove('vorn-inactive');
            }
        } else {
            if (scrollTop < lastScrollTopSections) {
                section.classList.add('vorn-inactive');
                section.classList.remove('vorn-active');
            }
        }
    });

    lastScrollTopSections = scrollTop <= 0 ? 0 : scrollTop;
});

// Navbar Hide/Show
let lastScrollTopNav = 0; // Separate scroll tracking for navbar
const nav = document.querySelector('.nav');

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop <= 100) {
        nav.classList.remove('navbar-hidden');
        nav.classList.add('navbar-visible');
    } else if (scrollTop > lastScrollTopNav) {
        // Scrolling down
        nav.classList.remove('navbar-visible');
        nav.classList.add('navbar-hidden');
    } else {
        // Scrolling up
        nav.classList.remove('navbar-hidden');
        nav.classList.add('navbar-visible');
    }

    lastScrollTopNav = scrollTop <= 0 ? 0 : scrollTop;
});

var service = document.getElementById('service');
service.classList.add('nav-txt-color');