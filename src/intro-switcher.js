let systemInitiatedHide = window.matchMedia("(prefers-color-scheme: hide)"); 
let introdisplay = sessionStorage.getItem('introdisplay');

if (systemInitiatedHide.matches) {
	document.getElementById("introdisplay-toggle").innerHTML = "Show Mode";
} else {
	document.getElementById("introdisplay-toggle").innerHTML = "Hide Mode";
}

function prefersColorTest(systemInitiatedHide) {
  if (systemInitiatedHide.matches) {
  	document.documentElement.setAttribute('data-introdisplay', 'hide');		
   	document.getElementById("introdisplay-toggle").innerHTML = "Show Mode";
   	sessionStorage.setItem('introdisplay', '');
  } else {
  	document.documentElement.setAttribute('data-introdisplay', 'show');
    document.getElementById("introdisplay-toggle").innerHTML = "Hide Mode";
    sessionStorage.setItem('introdisplay', '');
  }
}
systemInitiatedHide.addListener(prefersColorTest);


function introSwitcher() {
	let introdisplay = sessionStorage.getItem('introdisplay');
	if (introdisplay === "hide") {
		document.documentElement.setAttribute('data-introdisplay', 'show');
		sessionStorage.setItem('introdisplay', 'show');
		document.getElementById("introdisplay-toggle").innerHTML = "Hide Mode";
	}	else if (introdisplay === "show") {
		document.documentElement.setAttribute('data-introdisplay', 'hide');
		sessionStorage.setItem('introdisplay', 'hide');
		document.getElementById("introdisplay-toggle").innerHTML = "Show Mode";
	} else if (systemInitiatedHide.matches) {	
		document.documentElement.setAttribute('data-introdisplay', 'show');
		sessionStorage.setItem('introdisplay', 'show');
		document.getElementById("introdisplay-toggle").innerHTML = "Hide Mode";
	} else {
		document.documentElement.setAttribute('data-introdisplay', 'hide');
		sessionStorage.setItem('introdisplay', 'hide');
		document.getElementById("introdisplay-toggle").innerHTML = "Show Mode";
	}
}

if (introdisplay === "hide") {
	document.documentElement.setAttribute('data-introdisplay', 'hide');
	sessionStorage.setItem('introdisplay', 'hide');
	document.getElementById("introdisplay-toggle").innerHTML = "Show Mode";
} else if (introdisplay === "show") {
	document.documentElement.setAttribute('data-introdisplay', 'show');
	sessionStorage.setItem('introdisplay', 'show');
	document.getElementById("introdisplay-toggle").innerHTML = "Hide Mode";
}
