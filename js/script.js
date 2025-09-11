const lightModeColor = 'black';
const lightModeButtonsColor = '#333';
const lightModeBackgroundColor = '#FCFCFC';
const lightModeButtonHoverColor = "#D0D0D0";
const lightModeBackgroundColorSectionA = '#DFDFDF';
const darkModeColor = 'white';
const darkModeBackgroundColor = '#1A1A1A';
const darkModeButtonHoverColor = "#3A3A3A";
const darkModeBackgroundColorSectionA = '#2C2C2C';

/**
 * Handles toggling between dark and light mode.
 *
 * This function is triggered when the user clicks the dark/light mode switch.
 * It updates the website's theme accordingly.
 *
 * @function
 */
function handleDarkMode() {
    if (isDarkModeEnabled) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
}

/**
 * Enables the dark mode style for the website.
 *
 * Applies the necessary CSS classes or styles to switch from light mode to dark mode.
 *
 * @function
 */

function enableDarkMode() {
    isDarkModeEnabled = true;
    // intro header
    const header = document.getElementById("intro-header");
    header.style.backgroundImage = "url(img/intro-bg-2.jpg)";

    // About Me
    const img = document.getElementById('profileImg');
    img.src = 'img/aboutMe/profile-darkMode.jpg';

    // divs
    document.body.style.backgroundColor = darkModeBackgroundColor;
    document.body.style.color = darkModeColor;

    const elements = document.getElementsByClassName("content-section-a");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = darkModeBackgroundColorSectionA;
        elements[i].style.color = darkModeColor;
    }

    const navbar = document.getElementById("navbar");
    navbar.classList.remove("navbar-light-style");
    navbar.classList.add("navbar-dark-style");

    // border of images
    const thumbnails = document.querySelectorAll(".adaptive-thumbnail");
    thumbnails.forEach(img => {
        img.style.border = "2px solid #fff"; // light border
        img.style.backgroundColor = "#212529"; // dark gray background
    });

    // footer
    const footer = document.getElementById("footer");
    footer.style.backgroundColor = darkModeBackgroundColorSectionA;
    footer.style.color = darkModeColor;

    // buttons
    const buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
        // base style
        buttons[i].style.backgroundColor = darkModeBackgroundColorSectionA;
        buttons[i].style.color = darkModeColor;

        // hover in
        buttons[i].addEventListener("mouseenter", function () {
            buttons[i].style.backgroundColor = darkModeButtonHoverColor;
        });

        // hover out
        buttons[i].addEventListener("mouseleave", function () {
            buttons[i].style.backgroundColor = darkModeBackgroundColorSectionA;
        });
    }
}

/**
 * Enables the light mode style for the website.
 *
 * Applies the necessary CSS classes or styles to switch from dark mode to light mode.
 *
 * @function
 */
function enableLightMode() {
    isDarkModeEnabled = false;

    // intro header
    const header = document.getElementById("intro-header");
    header.style.backgroundImage = "url(img/intro-bg.jpg)";

    // About Me
    const img = document.getElementById('profileImg');
    img.src = 'img/aboutMe/profile-lightMode.jpg';

    // divs
    document.body.style.backgroundColor = lightModeBackgroundColor;
    document.body.style.color = lightModeColor;

    const elements = document.getElementsByClassName("content-section-a");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = lightModeBackgroundColorSectionA;
        elements[i].style.color = lightModeColor;
    }

    // border of images
    const thumbnails = document.querySelectorAll(".adaptive-thumbnail");
    thumbnails.forEach(img => {
        img.style.border = "2px solid #333"; // dark border
        img.style.backgroundColor = "#f8f9fa"; // light gray background
    });

    // navbar
    const navbar = document.getElementById("navbar");
    navbar.classList.add("navbar-light-style");
    navbar.classList.remove("navbar-dark-style");

    // footer
    const footer = document.getElementById("footer");
    footer.style.backgroundColor = lightModeBackgroundColor;
    footer.style.color = lightModeColor;

    // buttons
    const buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
        // base style
        buttons[i].style.backgroundColor = lightModeBackgroundColorSectionA;
        buttons[i].style.color = lightModeButtonsColor;

        // hover in
        buttons[i].addEventListener("mouseenter", function () {
            buttons[i].style.backgroundColor = lightModeButtonHoverColor;
        });

        // hover out
        buttons[i].addEventListener("mouseleave", function () {
            buttons[i].style.backgroundColor = lightModeBackgroundColorSectionA;
        });
    }
}

/**
 * Displays a set of icons responsively.
 *
 * On desktop screens, the icons are arranged in a horizontal row.
 * On mobile screens, the icons are arranged in a grid layout.
 */
function setIconsAlignment() {
    this.mobile = window.matchMedia('(max-width: 768px)').matches;
    for (let i = 1; i <= 4; i++) {
        let element = "headElement" + i;
        let ilList = document.getElementById(element);
        if (this.mobile) {
            ilList.classList.add("col-xs-6");
        } else {
            ilList.classList.remove("col-xs-6");
        }
    }
}

/**
 * Copies the email address to the clipboard.
 *
 * When triggered, this function reads the email from the HTML element (with id "email-link") and copies it to the clipboard.
 * It also updates the button's text and style to indicate success, and reverts after 5 seconds.
 *
 * @async
 * @function
 */
async function copyToClipboard() {
    const emailLink = document.getElementById("email-link");
    const email = emailLink ? emailLink.getAttribute("href").replace("mailto:", "") : "";
    const copyButton = document.getElementById("copy");

    if (!email) return;

    try {
        await navigator.clipboard.writeText(email);

        copyButton.innerHTML = "Email copied";
        copyButton.classList.remove('btn-primary');
        copyButton.classList.add('btn-success');

        setTimeout(() => {
            copyButton.innerHTML = "Copy email";
            copyButton.classList.remove('btn-success');
            copyButton.classList.add('btn-primary');
        }, 5000);

    } catch (err) {
        console.error("Failed to copy: ", err);
        alert("Failed to copy email. Please copy manually: " + email);
    }
}

/**
 * Toggles the visibility of the resume section.
 *
 * When the user clicks the "Show more..." or "Show less..." button, this function
 * shows or hides the additional part of the resume. It also updates the button text
 * accordingly and scrolls back to the top of the resume section when hiding content.
 *
 * @function
 */
function showHideResume() {
    let showResume = document.getElementById("show-resume");
    let currentDisplay = window.getComputedStyle(showResume).display;
    let showResumeButton = document.getElementById("show-button");
    if (currentDisplay === "none") {
        // Hides part of the resume
        showResume.style.display = "block";
        showResumeButton.innerHTML = 'Show less...';
    } else {
        // Shows the whole resume
        showResume.style.display = "none";
        showResumeButton.innerHTML = 'Show more...';
        window.location.href = "#resume";
    }
}

/**
 * Enables a modal view for images.
 *
 * Attaches click event listeners to all images with the classes "img-fluid" and "rounded".
 * When an image is clicked, it opens in a modal overlay and disables page scrolling.
 * Clicking on the modal itself closes it and restores scrolling.
 *
 * @function
 */
function enableImageModal() {
    const modal = document.getElementById('imageModalContainer');
    const modalImg = document.getElementById('imageModal');
    const images = document.querySelectorAll('.img-fluid.rounded');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
            document.body.style.overflow = 'hidden'; // Blocks scroll when image is opened
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restores scroll
    });
}


/* Dark/Light mode settings */
// Detect system preference
let isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Enables dark/light mode
if (window.matchMedia && isDarkModeEnabled) {
    enableDarkMode();
} else {
    enableLightMode();
}

/* HOME icons alignment */
let mobile = window.matchMedia('(max-width: 768px)').matches;
const mediaQuery = matchMedia("(min-width: 769px)");
mediaQuery.addEventListener("change", setIconsAlignment);
if (mobile) {
    setIconsAlignment();
}

/* Listener for the image modal */
document.addEventListener('DOMContentLoaded', enableImageModal);
