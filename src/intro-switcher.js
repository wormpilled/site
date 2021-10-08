let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let introtog = sessionStorage.getItem('intro');

if (systemInitiatedDark.matches) {
	document.getElementById("intro-toggle").innerHTML = "Hide Intro";
} else {
	document.getElementById("intro-toggle").innerHTML = "Dark Mode";
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-intro', 'dark');		
   	document.getElementById("intro-toggle").innerHTML = "Hide Intro";
   	sessionStorage.setItem('intro', '');
  } else {
  	document.documentElement.setAttribute('data-intro', 'light');
    document.getElementById("intro-toggle").innerHTML = "Dark Mode";
    sessionStorage.setItem('intro', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let introtog = sessionStorage.getItem('intro');
	if (introtog === "dark") {
		document.documentElement.setAttribute('data-intro', 'light');
		sessionStorage.setItem('intro', 'light');
		document.getElementById("intro-toggle").innerHTML = "Dark Mode";
	}	else if (introtog === "light") {
		document.documentElement.setAttribute('data-intro', 'dark');
		sessionStorage.setItem('intro', 'dark');
		document.getElementById("intro-toggle").innerHTML = "Hide Intro";
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-intro', 'light');
		sessionStorage.setItem('intro', 'light');
		document.getElementById("intro-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-intro', 'dark');
		sessionStorage.setItem('intro', 'dark');
		document.getElementById("intro-toggle").innerHTML = "Hide Intro";
	}
}

if (introtog === "dark") {
	document.documentElement.setAttribute('data-intro', 'dark');
	sessionStorage.setItem('intro', 'dark');
	document.getElementById("intro-toggle").innerHTML = "Hide Intro";
} else if (introtog === "light") {
	document.documentElement.setAttribute('data-intro', 'light');
	sessionStorage.setItem('intro', 'light');
	document.getElementById("intro-toggle").innerHTML = "Dark Mode";
}
