

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
        ball.style.transform = `translate(${x}px, ${y - 110}px)`;
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
let lastScrollTop = 0;
const navbar = document.querySelector('.nav');
const displayDiv = document.querySelector('.display-1');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop <= 100){
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
    }else if (scrollTop > lastScrollTop ) {
        // Scrolling down
        navbar.classList.remove('navbar-visible');
        navbar.classList.add('navbar-hidden');
    } else {
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
    }

    lastScrollTop = scrollTop;
});

// Fade-in on scroll behavior
window.addEventListener('scroll', function() {
    if (window.scrollY >= 386) {
        const elements = document.querySelectorAll('.fadeInTrigger');
        elements.forEach((el) => {
            el.classList.remove('fadeInUp');
            // Force reflow for restarting the animation
            void el.offsetWidth;
            el.classList.add('fadeInUp');
        });
    }
});

var home = document.getElementById('home');
home.classList.add('nav-text-color')