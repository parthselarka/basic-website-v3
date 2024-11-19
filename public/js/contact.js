
var lname = document.getElementById("l-name");
var lemail = document.getElementById("l-email");
var lsub = document.getElementById("l-sub");
var ltarea = document.getElementById("l-tarea")

var textname = document.getElementById("name");  // I Really don't why 'name' is not working
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");



function labelmove(inputname)
{
    if(inputname == "name")
    {
        lname.style.transition = "all 0.2s";
        lname.style.marginTop = "-15px";
        lname.style.marginLeft = "10px";
        lname.style.zIndex = "10";
        lname.style.transform = "scale(0.9)";
        lname.style.padding = "5px 15px 5px 15px";
        lname.style.backgroundColor = "#000000";
    }

    if(inputname == "email")
    {
        lemail.style.transition = "all 0.2s";
        lemail.style.marginTop = "-15px";
        lemail.style.marginLeft = "10px";
        lemail.style.zIndex = "10";
        lemail.style.transform = "scale(0.9)";
        lemail.style.padding = "5px 15px 5px 15px";
        lemail.style.backgroundColor = "#000000";
    }

    if(inputname == "subject")
    {
        lsub.style.transition = "all 0.2s";
        lsub.style.marginTop = "-15px";
        lsub.style.marginLeft = "10px";
        lsub.style.zIndex = "10";
        lsub.style.transform = "scale(0.9)";
        lsub.style.padding = "5px 15px 5px 15px";
        lsub.style.backgroundColor = "#000000";
    }

    if(inputname == "message")
    {
        ltarea.style.transition = "all 0.2s";
        ltarea.style.marginTop = "-15px";
        ltarea.style.marginLeft = "10px";
        ltarea.style.zIndex = "10";
        ltarea.style.transform = "scale(0.9)";
        ltarea.style.padding = "5px 15px 5px 15px";
        ltarea.style.backgroundColor = "#000000";
    }
}

window.onclick = function(event)
{
    if (event.target != textname &&  textname.value.length == 0)
    {
        lname.style.transform = "scale(1)";
        lname.style.transition = "all 0.2s";
        lname.style.marginTop = "17px";
        lname.style.marginLeft = "20px";
        lname.style.zIndex = "0";
        lname.style.padding = "0px";
        lname.style.backgroundColor = "transparent";
    }
    if (event.target != email && email.value.length == 0)
    {
        lemail.style.transform = "scale(1)";
        lemail.style.transition = "all 0.2s";
        lemail.style.marginTop = "17px";
        lemail.style.marginLeft = "20px";
        lemail.style.zIndex = "0";
        lemail.style.padding = "0px";
        lemail.style.backgroundColor = "transparent";
    }
    if(event.target != subject && subject.value.length == 0)
    {
        lsub.style.transform = "scale(1)";
        lsub.style.transition = "all 0.2s";
        lsub.style.marginTop = "17px";
        lsub.style.marginLeft = "20px";
        lsub.style.zIndex = "0";
        lsub.style.padding = "0px";
        lsub.style.backgroundColor = "transparent";
    }
    if(event.target != message && message.value.length == 0)
    {
        ltarea.style.transform = "scale(1)";
        ltarea.style.transition = "all 0.2s";
        ltarea.style.marginTop = "17px";
        ltarea.style.marginLeft = "20px";
        ltarea.style.zIndex = "0";
        ltarea.style.padding = "0px";
        ltarea.style.backgroundColor = "transparent";
    }
}



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
        ball.style.transform = `translate(${x}px, ${y}px)`;
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

var contact = document.getElementById('contact');
contact.classList.add('nav-text-color')