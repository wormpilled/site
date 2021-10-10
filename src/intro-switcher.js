let systemInitiatedHide = window.matchMedia("(prefers-color-scheme: hide)"); 
let introdisplay = sessionStorage.getItem('introdisplay');

if (systemInitiatedHide.matches) {
	document.getElementById("introdisplay-toggle").innerHTML = "Show Introduction";
} else {
	document.getElementById("introdisplay-toggle").innerHTML = "Hide Introduction";
}

function prefersColorTest(systemInitiatedHide) {
  if (systemInitiatedHide.matches) {
  	document.documentElement.setAttribute('data-intro', 'hide');		
   	document.getElementById("introdisplay-toggle").innerHTML = "Show Introduction";
   	sessionStorage.setItem('introdisplay', '');
  } else {
  	document.documentElement.setAttribute('data-intro', 'show');
    document.getElementById("introdisplay-toggle").innerHTML = "Hide Introduction";
    sessionStorage.setItem('introdisplay', '');
  }
}
systemInitiatedHide.addListener(prefersColorTest);


function introSwitcher() {
	let introdisplay = sessionStorage.getItem('introdisplay');
	if (introdisplay === "hide") {
		document.documentElement.setAttribute('data-intro', 'show');
		sessionStorage.setItem('introdisplay', 'show');
		document.getElementById("introdisplay-toggle").innerHTML = "Hide Introduction";
	}	else if (introdisplay === "show") {
		document.documentElement.setAttribute('data-intro', 'hide');
		sessionStorage.setItem('introdisplay', 'hide');
		document.getElementById("introdisplay-toggle").innerHTML = "Show Introduction";
	} else if (systemInitiatedHide.matches) {	
		document.documentElement.setAttribute('data-intro', 'show');
		sessionStorage.setItem('introdisplay', 'show');
		document.getElementById("introdisplay-toggle").innerHTML = "Hide Introduction";
	} else {
		document.documentElement.setAttribute('data-intro', 'hide');
		sessionStorage.setItem('introdisplay', 'hide');
		document.getElementById("introdisplay-toggle").innerHTML = "Show Introduction";
	}
}

if (introdisplay === "hide") {
	document.documentElement.setAttribute('data-intro', 'hide');
	sessionStorage.setItem('introdisplay', 'hide');
	document.getElementById("introdisplay-toggle").innerHTML = "Show Introduction";
} else if (introdisplay === "show") {
	document.documentElement.setAttribute('data-intro', 'show');
	sessionStorage.setItem('introdisplay', 'show');
	document.getElementById("introdisplay-toggle").innerHTML = "Hide Introduction";
}
