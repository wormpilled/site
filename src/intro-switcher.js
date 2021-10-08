let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let introdisp = sessionStorage.getItem('introdisp');

if (systemInitiatedDark.matches) {
	document.getElementById("intro-toggle").innerHTML = "Light Mode";
} else {
	document.getElementById("intro-toggle").innerHTML = "Dark Mode";
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-intro', 'dark');		
   	document.getElementById("intro-toggle").innerHTML = "Light Mode";
   	sessionStorage.setItem('introdisp', '');
  } else {
  	document.documentElement.setAttribute('data-intro', 'light');
    document.getElementById("intro-toggle").innerHTML = "Dark Mode";
    sessionStorage.setItem('introdisp', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let introdisp = sessionStorage.getItem('introdisp');
	if (introdisp === "dark") {
		document.documentElement.setAttribute('data-intro', 'light');
		sessionStorage.setItem('introdisp', 'light');
		document.getElementById("intro-toggle").innerHTML = "Dark Mode";
	}	else if (introdisp === "light") {
		document.documentElement.setAttribute('data-intro', 'dark');
		sessionStorage.setItem('introdisp', 'dark');
		document.getElementById("intro-toggle").innerHTML = "Light Mode";
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-intro', 'light');
		sessionStorage.setItem('introdisp', 'light');
		document.getElementById("intro-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-intro', 'dark');
		sessionStorage.setItem('introdisp', 'dark');
		document.getElementById("intro-toggle").innerHTML = "Light Mode";
	}
}

if (introdisp === "dark") {
	document.documentElement.setAttribute('data-intro', 'dark');
	sessionStorage.setItem('introdisp', 'dark');
	document.getElementById("intro-toggle").innerHTML = "Light Mode";
} else if (introdisp === "light") {
	document.documentElement.setAttribute('data-intro', 'light');
	sessionStorage.setItem('introdisp', 'light');
	document.getElementById("intro-toggle").innerHTML = "Dark Mode";
}
