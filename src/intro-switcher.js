let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let introtg = sessionStorage.getItem('introtg');

if (systemInitiatedDark.matches) {
	document.getElementById("intro-toggle").innerHTML = "Light Mode";
} else {
	document.getElementById("intro-toggle").innerHTML = "Dark Mode";
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-intro', 'dark');		
   	document.getElementById("intro-toggle").innerHTML = "Light Mode";
   	sessionStorage.setItem('introtg', '');
  } else {
  	document.documentElement.setAttribute('data-intro', 'light');
    document.getElementById("intro-toggle").innerHTML = "Dark Mode";
    sessionStorage.setItem('introtg', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let introtg = sessionStorage.getItem('introtg');
	if (introtg === "dark") {
		document.documentElement.setAttribute('data-intro', 'light');
		sessionStorage.setItem('introtg', 'light');
		document.getElementById("intro-toggle").innerHTML = "Dark Mode";
	}	else if (introtg === "light") {
		document.documentElement.setAttribute('data-intro', 'dark');
		sessionStorage.setItem('introtg', 'dark');
		document.getElementById("intro-toggle").innerHTML = "Light Mode";
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-intro', 'light');
		sessionStorage.setItem('introtg', 'light');
		document.getElementById("intro-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-intro', 'dark');
		sessionStorage.setItem('introtg', 'dark');
		document.getElementById("intro-toggle").innerHTML = "Light Mode";
	}
}

if (introtg === "dark") {
	document.documentElement.setAttribute('data-intro', 'dark');
	sessionStorage.setItem('introtg', 'dark');
	document.getElementById("intro-toggle").innerHTML = "Light Mode";
} else if (introtg === "light") {
	document.documentElement.setAttribute('data-intro', 'light');
	sessionStorage.setItem('introtg', 'light');
	document.getElementById("intro-toggle").innerHTML = "Dark Mode";
}
