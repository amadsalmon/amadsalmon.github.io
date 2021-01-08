

/*
document.getElementById("toggleButton").addEventListener("click", myFunction, true);

var toggleButton = document.querySelector(".topnav-toggle_button");
var topNavItems = document.querySelector(".topnav-items");

console.log("hello");
if (toggleButton != null) {
	console.log("toggleButton != null");
	toggleButton.addEventListener('click', toggleActiveClass);
} else {
	console.log("toggleButton == null");
	toggleButton = document.querySelector("#toggleButton");
	if (toggleButton != null) {
	console.log("toggleButton no longer null");
	toggleButton.addEventListener('click', toggleActiveClass);
	}
}


function toggleActiveClass() {
	topNavItems.classList.toggle("active");
	console.log("toggleButton click\n");
}
*/
function toggleActive(x) {
	x.classList.toggle("active");
}