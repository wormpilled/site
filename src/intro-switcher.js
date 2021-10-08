let systemInitiatedHide = window.matchMedia("(prefers-color-scheme: dark)"); 
let introtog = sessionStorage.getItem('intro');

if (systemInitiatedHide.matches) {
	document.getElementById("intro-toggle").innerHTML = "Show Intro";
} else {
	document.getElementById("intro-toggle").innerHTML = "Hide Intro";
}

function prefersHideTest(systemInitiatedHide) {
  if (systemInitiatedHide.matches) {
  	document.documentElement.setAttribute('data-intro', 'show');		
   	document.getElementById("intro-toggle").innerHTML = "Show Intro";
   	sessionStorage.setItem('intro', '');
  } else {
  	document.documentElement.setAttribute('data-intro', 'hide');
    document.getElementById("intro-toggle").innerHTML = "Hide Intro";
    sessionStorage.setItem('intro', '');
  }
}
systemInitiatedHide.addListener(prefersHideTest);


function introSwitcher() {
	let introtog = sessionStorage.getItem('intro');
	if (introtog === "hide") {
		document.documentElement.setAttribute('data-intro', 'hide');
		sessionStorage.setItem('intro', 'hide');
		document.getElementById("intro-toggle").innerHTML = "Hide Intro";
	}	else if (introtog === "show") {
		document.documentElement.setAttribute('data-intro', 'show');
		sessionStorage.setItem('intro', 'show');
		document.getElementById("intro-toggle").innerHTML = "Show Intro";
	} else if (systemInitiatedHide.matches) {	
		document.documentElement.setAttribute('data-intro', 'hide');
		sessionStorage.setItem('intro', 'hide');
		document.getElementById("intro-toggle").innerHTML = "Hide Intro";
	} else {
		document.documentElement.setAttribute('data-intro', 'show');
		sessionStorage.setItem('intro', 'show');
		document.getElementById("intro-toggle").innerHTML = "Show Intro";
	}
}

if (introtog === "show") {
	document.documentElement.setAttribute('data-intro', 'show');
	sessionStorage.setItem('intro', 'show');
	document.getElementById("intro-toggle").innerHTML = "Show Intro";
} else if (introtog === "hide") {
	document.documentElement.setAttribute('data-intro', 'hide');
	sessionStorage.setItem('intro', 'hide');
	document.getElementById("intro-toggle").innerHTML = "Hide Intro";
}
