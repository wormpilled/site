let systemInitiatedHide = window.matchMedia("(prefers-color-scheme: dark)"); 
let introdisplay = sessionStorage.getItem('introdisplay');

if (systemInitiatedHide.matches) {
	document.getElementById("introdisplay-toggle").innerHTML = "Light Mode";
} else {
	document.getElementById("introdisplay-toggle").innerHTML = "Dark Mode";
}

function prefersColorTest(systemInitiatedHide) {
  if (systemInitiatedHide.matches) {
  	document.documentElement.setAttribute('data-introdisplay', 'dark');		
   	document.getElementById("introdisplay-toggle").innerHTML = "Light Mode";
   	sessionStorage.setItem('introdisplay', '');
  } else {
  	document.documentElement.setAttribute('data-introdisplay', 'light');
    document.getElementById("introdisplay-toggle").innerHTML = "Dark Mode";
    sessionStorage.setItem('introdisplay', '');
  }
}
systemInitiatedHide.addListener(prefersColorTest);


function introSwitcher() {
	let introdisplay = sessionStorage.getItem('introdisplay');
	if (introdisplay === "dark") {
		document.documentElement.setAttribute('data-introdisplay', 'light');
		sessionStorage.setItem('introdisplay', 'light');
		document.getElementById("introdisplay-toggle").innerHTML = "Dark Mode";
	}	else if (introdisplay === "light") {
		document.documentElement.setAttribute('data-introdisplay', 'dark');
		sessionStorage.setItem('introdisplay', 'dark');
		document.getElementById("introdisplay-toggle").innerHTML = "Light Mode";
	} else if (systemInitiatedHide.matches) {	
		document.documentElement.setAttribute('data-introdisplay', 'light');
		sessionStorage.setItem('introdisplay', 'light');
		document.getElementById("introdisplay-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-introdisplay', 'dark');
		sessionStorage.setItem('introdisplay', 'dark');
		document.getElementById("introdisplay-toggle").innerHTML = "Light Mode";
	}
}

if (introdisplay === "dark") {
	document.documentElement.setAttribute('data-introdisplay', 'dark');
	sessionStorage.setItem('introdisplay', 'dark');
	document.getElementById("introdisplay-toggle").innerHTML = "Light Mode";
} else if (introdisplay === "light") {
	document.documentElement.setAttribute('data-introdisplay', 'light');
	sessionStorage.setItem('introdisplay', 'light');
	document.getElementById("introdisplay-toggle").innerHTML = "Dark Mode";
}
