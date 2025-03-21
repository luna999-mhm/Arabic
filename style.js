let lastScrollY = window.scrollY;
let navbar = document.querySelector("header"); // Adjust this to match your navbar's selector
let scrollUpTimer;
let isScrollingUp = false;
let hasScrolled = false; // Track if the user has scrolled

// Ensure navbar is visible on page load
navbar.style.top = "0";

window.addEventListener("scroll", () => {
    let currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
        // User is scrolling up
        if (!isScrollingUp) {
            isScrollingUp = true;
            scrollUpTimer = setTimeout(() => {
                navbar.style.top = "0"; // Show navbar after 2 seconds
            }, 200);
        }
    } else {
        // User is scrolling down
        clearTimeout(scrollUpTimer);
        isScrollingUp = false;

        if (currentScrollY > 50) { // Hide navbar only after user starts scrolling down
            navbar.style.top = "-100px"; // Adjust this value based on navbar height
            hasScrolled = true; // Mark that user has scrolled
        }
    }

    lastScrollY = currentScrollY;
});

function toggleLogin() {
    let modal = document.getElementById("loginModal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function submitLogin() {
    alert("Login successful!"); // Replace with actual login logic
}

function togglePassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("loginModal");
    let signInBtn = document.querySelector(".sign-in-btn");
    let closeBtn = document.querySelector(".close");

    // Open modal when Sign In button is clicked
    signInBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Close modal when X button is clicked
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Toggle password visibility
    window.togglePassword = function () {
        let passwordField = document.getElementById("password");
        passwordField.type = (passwordField.type === "password") ? "text" : "password";
    };
});
