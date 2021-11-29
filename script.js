// Ben Davenport
// Countable - Web Developer Technical

function toggleMenu() {
	const menuBox = document.getElementById('nav-menu');  menuBox.style.display == "block"?  menuBox.style.display = "none" : menuBox.style.display = "block";
	
	const hamburger = document.getElementById('hamburger');
	
	hamburger.className == "fas fa-bars" ? hamburger.className = 'fas fa-times' : hamburger.className = "fas fa-bars" 

}