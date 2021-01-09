var toggleButton = document.getElementById("toggleMenuButton");
var topNavItems = document.querySelector(".topnav-items");

toggleButton.addEventListener("click", toggleMenuButtonClicked);

/**
* Make topNavItems disappear when clicking on one of its links.
*/
document.querySelectorAll('.topnav-items a')
	.forEach(item => { 
	item.addEventListener('click', event => {
		if (topNavItems.classList.contains("active")){
			topNavItems.classList.remove("active");
		}
  })
})

function toggleActiveClassOntoggleMenuButton() {
	toggleButton.classList.toggle("active");
}

function toggleMenuButtonClicked(){
	toggleActiveClassOntoggleMenuButton();
	topNavItems.classList.toggle("active");
}