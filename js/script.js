this.mobile = window.matchMedia('(max-width: 768px)').matches;
matchMedia("(min-width: 769px)").addListener(setListAlignment);
if(this.mobile) {
	setListAlignment();
}
		
var isDarkModeEnabled = false;
var lightModeColor = 'black';
var lightModeButtonsColor = '#333';
var lightModeBackgroundColor = 'white';
var lightModeBackgroundColorSectionA = '#f8f8f8';
var darkModeColor = 'white';
var darkModeBackgroundColor = 'black';
var darkModeBackgroundColorSectionA = '#222';

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
} else {
	disableDarkMode();
}
		
function handleDarkMode() {
	if(isDarkModeEnabled) {
		disableDarkMode();
	} else {
		enableDarkMode();
	}
}
		
function enableDarkMode() {
	isDarkModeEnabled = true;
	// intro header 
	const header = document.getElementById("intro-header");
	header.style.backgroundImage = "url(img/intro-bg-2.jpg)";
			
	// divs
	document.body.style.backgroundColor = darkModeBackgroundColor;
	document.body.style.color = darkModeColor;

	const elements = document.getElementsByClassName("content-section-a");
	for(var i = 0; i < elements.length; i++) {
		elements[i].style.backgroundColor = darkModeBackgroundColorSectionA;
		elements[i].style.color = darkModeColor;
	}
			
	const navbar = document.getElementById("navbar");
	navbar.classList.remove("navbar-light-style");
	navbar.classList.add("navbar-dark-style");
			
	// footer
	const footer = document.getElementById("footer");
	footer.style.backgroundColor = darkModeBackgroundColorSectionA;
	footer.style.color = darkModeColor;
			
	// buttons
	const buttons = document.getElementsByClassName("btn");
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].style.backgroundColor = darkModeBackgroundColorSectionA;
		buttons[i].style.color = darkModeColor;
	}
}
		
function disableDarkMode() {
	isDarkModeEnabled = false;
	
	// intro header 
	const header = document.getElementById("intro-header");
	header.style.backgroundImage = "url(img/intro-bg.jpg)";
		
	// divs
	document.body.style.backgroundColor = lightModeBackgroundColor;
	document.body.style.color = lightModeColor;
		
	const elements = document.getElementsByClassName("content-section-a");
	for(var i = 0; i < elements.length; i++) {
		elements[i].style.backgroundColor = lightModeBackgroundColorSectionA;
		elements[i].style.color = lightModeColor;
	}
			
	// narvar
	const navbar = document.getElementById("navbar");
	navbar.classList.add("navbar-light-style");
	navbar.classList.remove("navbar-dark-style");
			
	// footer
	const footer = document.getElementById("footer");
	footer.style.backgroundColor = lightModeBackgroundColor;
	footer.style.color = lightModeColor;
			
	// buttons
	const buttons = document.getElementsByClassName("btn");
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].style.backgroundColor = lightModeBackgroundColorSectionA;
		buttons[i].style.color = lightModeButtonsColor;
	}
}

function setListAlignment() {
	this.mobile = window.matchMedia('(max-width: 768px)').matches;
	if(this.mobile) {
		for(var i = 1; i <= 5; i++) {
			var element = "headElement" + i;
			var ilList = document.getElementById(element);
			ilList.classList.add("col-xs-6");
		}
	} else {
		for(var i = 1; i <= 5; i++) {
			var element = "headElement" + i;
			var ilList = document.getElementById(element);
			ilList.classList.remove("col-xs-6");
		}
	}
}
	  
function copyToClipboard() {
	var aux = document.createElement("input");
	aux.setAttribute("value", 'alanq.swe@outlook.com');
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);

	var copyButton = document.getElementById("copy");
	copyButton.innerHTML = "Copied";
	copyButton.classList.remove('btn-primary');
	copyButton.classList.add('btn-success');

	setTimeout(function() {
		document.getElementById("copy").innerHTML = "Copy";
			copyButton.classList.remove('btn-success');
			copyButton.classList.add('btn-primary');
	}, 5000);
}
	  
function showResume() {
	var show = document.getElementById("show-resume");
	var btn = document.getElementById("show-button");
	if (show.style.display === "none") {
		show.style.display = "block";
		btn.innerHTML = 'Show less...';
	} else {
		show.style.display = "none";
		btn.innerHTML = 'Show more...';
		window.location.href="#resume";
	}
}

function enableImageModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
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

document.addEventListener('DOMContentLoaded', enableImageModal);
