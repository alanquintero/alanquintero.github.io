// ***** Light Mode *****
// Intro Header Img
const lightModeIntroHeaderImg = "img/banner/banner-light.jpg";
// About Me Img
const lightModeAboutMeImg = "img/aboutMe/profile-light.jpg";
// Text, icons
const lightModeTextColor = '#585757';
const lightModeTitleTextColor = '#0171FF'
const lightModeSubtitleTextColor = "#003153";
// Background
const lightModeBackgroundColor = '#F1F1F1';
const lightModeBackgroundColorSectionA = '#FCFCFC';
// Buttons
const lightModeButtonsColor = '#0171FF';
const lightModeButtonBackgroundColor = "#FCFCFC";
const lightModeButtonHoverColor = "#66AAFF";
//Lines
const lightModeLineColor = "#0171FF";
// Navbar
const lightModeNavbarStyle = "navbar-light-style";

// ***** Dark Mode *****
// Intro Header Img
const darkModeIntroHeaderImg = "img/banner/banner-dark.jpg";
// About Me Img
const darkModeAboutMeImg = "img/aboutMe/profile-dark.jpg";
// Text, icons
const darkModeTextColor = '#FCFCFC';
const darkModeTitleTextColor = '#FCFCFC'
const darkModeSubtitleTextColor = "#FCFCFC";
// Background
const darkModeBackgroundColor = '#1A1A1A';
const darkModeBackgroundColorSectionA = '#2C2C2C';
// Buttons
const darkModeButtonsColor = '#FCFCFC';
const darkModeButtonBackgroundColor = "#2C2C2C";
const darkModeButtonHoverColor = "#404040";
//Lines
const darkModeLineColor = "#B6E4EA";
// Navbar
const darkModeNavbarStyle = "navbar-dark-style";


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
    setIntroHeaderImg(darkModeIntroHeaderImg)

    // About Me
    setAboutMeImg(darkModeAboutMeImg);

    // Body style
    setBodyStyle(darkModeBackgroundColor, darkModeTextColor)

    // Content Section A
    setContentSectionAStyle(darkModeBackgroundColorSectionA, darkModeTextColor)

    // Text
    setTitleColor(darkModeTitleTextColor)
    setSubtitleColor(darkModeSubtitleTextColor)

    // Lines
    setLinesColor(darkModeLineColor)

    // Timeline
    setTimelineColor(darkModeLineColor)

    // Navbar
    setNavbarStyle(darkModeNavbarStyle, lightModeNavbarStyle);

    // footer
    setFooterStyle(darkModeBackgroundColorSectionA, darkModeTextColor);

    // buttons
    setButtonsStyle(darkModeButtonsColor, darkModeButtonBackgroundColor, darkModeButtonHoverColor)
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
    setIntroHeaderImg(lightModeIntroHeaderImg);

    // About Me
    setAboutMeImg(lightModeAboutMeImg);

    // Body style
    setBodyStyle(lightModeBackgroundColor, lightModeTextColor)

    // Content Section A
    setContentSectionAStyle(lightModeBackgroundColorSectionA, lightModeTextColor)

    // Text
    setTitleColor(lightModeTitleTextColor)
    setSubtitleColor(lightModeSubtitleTextColor)

    // Lines
    setLinesColor(lightModeLineColor)

    // Timeline
    setTimelineColor(lightModeLineColor)

    // navbar
    setNavbarStyle(lightModeNavbarStyle, darkModeNavbarStyle)

    // footer
    setFooterStyle(lightModeBackgroundColor, lightModeTextColor);

    // buttons
    setButtonsStyle(lightModeButtonsColor, lightModeButtonBackgroundColor, lightModeButtonHoverColor)
}

// ***************** Methods to change color for Dark/Light mode - Starts - *****************

function setIntroHeaderImg(img) {
    const header = document.getElementById("intro-header");
    header.style.backgroundImage = "url(" + img + ")";
}

function setAboutMeImg(img) {
    const profileImg = document.getElementById('profileImg');
    profileImg.src = img;
}

function setBodyStyle(backgroundColor, textColor) {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
}

function setContentSectionAStyle(backgroundColor, textColor) {
    const elements = document.getElementsByClassName("content-section-a");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = backgroundColor;
        elements[i].style.color = textColor;
    }
}

function setTitleColor(textColor) {
    const titles = document.getElementsByClassName("title");
    for (let i = 0; i < titles.length; i++) {
        titles[i].style.color = textColor;
    }
}

function setSubtitleColor(textColor) {
    const subtitles = document.getElementsByClassName("subtitle");
    for (let i = 0; i < subtitles.length; i++) {
        subtitles[i].style.color = textColor;
    }
}

function setLinesColor(lineColor) {
    const customLines = document.getElementsByClassName("custom-line");
    for (let i = 0; i < customLines.length; i++) {
        customLines[i].style.color = lineColor;
    }
}

function setTimelineColor(timelineColor) {
    const timelines = document.getElementsByClassName("timeline");
    for (let i = 0; i < timelines.length; i++) {
        timelines[i].style.setProperty('--timeline-bg', timelineColor);
    }
    document.querySelectorAll('.page-header')
        .forEach(el => el.style.borderColor = timelineColor);

    document.querySelectorAll('.timeline > li > .timeline-badge')
        .forEach(el => el.style.borderColor = timelineColor);
}

function setNavbarStyle(styleToAdd, styleToRemove) {
    const navbar = document.getElementById("navbar");
    navbar.classList.remove(styleToRemove);
    navbar.classList.add(styleToAdd);
}

function setButtonsStyle(buttonColor, buttonBackgroundColor, hoverColor) {
    const buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
        // base style
        buttons[i].style.backgroundColor = buttonBackgroundColor;
        buttons[i].style.color = buttonColor;

        // hover in
        buttons[i].addEventListener("mouseenter", function () {
            buttons[i].style.backgroundColor = hoverColor;
        });

        // hover out
        buttons[i].addEventListener("mouseleave", function () {
            buttons[i].style.backgroundColor = buttonBackgroundColor;
        });
    }
}

function setFooterStyle(backgroundColor, textColor) {
    const footer = document.getElementById("footer");
    footer.style.backgroundColor = backgroundColor;
    footer.style.color = textColor;
}

// ***************** Methods to change color for Dark/Light mode - Ends - *****************

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
