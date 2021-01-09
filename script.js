var toggleButton = document.getElementById("toggleMenuButton");
var topNavItems = document.querySelector(".topnav-items");

toggleButton.addEventListener("click", toggleMenuButtonClicked);

function toggleActiveClassOntoggleMenuButton() {
	toggleButton.classList.toggle("active");
}

function toggleMenuButtonClicked(){
	toggleActiveClassOntoggleMenuButton();
	topNavItems.classList.toggle("responsive");
}