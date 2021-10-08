let systemInitiatedLight = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');

if (systemInitiatedLight.matches) {
	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
} else {
	document.getElementById("theme-toggle").innerHTML = "Light Mode";
}

function prefersColorTest(systemInitiatedLight) {
  if (systemInitiatedLight.matches) {
  	document.documentElement.setAttribute('data-theme', 'light');		
   	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedLight.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	}	else if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else if (systemInitiatedLight.matches) {	
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	}
}

if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
} else if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	document.getElementById("theme-toggle").innerHTML = "Light Mode";
}
