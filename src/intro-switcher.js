let systemInitiatedintro = window.matchMedia("(prefers-color-scheme: show)"); 
let introtog = sessionStorage.getItem('intro');

if (systemInitiatedDark.matches) {
	document.getElementById("intro-toggle").innerHTML = "Hide Intro";
} else {
	document.getElementById("intro-toggle").innerHTML = "Show Intro";
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-intro', 'show');		
   	document.getElementById("intro-toggle").innerHTML = "Hide Intro";
   	sessionStorage.setItem('intro', '');
  } else {
  	document.documentElement.setAttribute('data-intro', 'hide');
    document.getElementById("intro-toggle").innerHTML = "Show Intro";
    sessionStorage.setItem('intro', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function introSwitcher() {
	let introtog = sessionStorage.getItem('intro');
	if (introtog === "show") {
		document.documentElement.setAttribute('data-intro', 'hide');
		sessionStorage.setItem('intro', 'hide');
		document.getElementById("intro-toggle").innerHTML = "Show Intro";
	}	else if (introtog === "light") {
		document.documentElement.setAttribute('data-intro', 'show');
		sessionStorage.setItem('intro', 'show');
		document.getElementById("intro-toggle").innerHTML = "Hide Intro";
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-intro', 'hide');
		sessionStorage.setItem('intro', 'hide');
		document.getElementById("intro-toggle").innerHTML = "Show Intro";
	} else {
		document.documentElement.setAttribute('data-intro', 'show');
		sessionStorage.setItem('intro', 'show');
		document.getElementById("intro-toggle").innerHTML = "Hide Intro";
	}
}

if (introtog === "show") {
	document.documentElement.setAttribute('data-intro', 'show');
	sessionStorage.setItem('intro', 'show');
	document.getElementById("intro-toggle").innerHTML = "Hide Intro";
} else if (introtog === "hide") {
	document.documentElement.setAttribute('data-intro', 'hide');
	sessionStorage.setItem('intro', 'hide');
	document.getElementById("intro-toggle").innerHTML = "Show Intro";
}
