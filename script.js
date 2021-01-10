var toggleButton = document.getElementById("toggleMenuButton");
var topNavItems = document.querySelector(".topnav-items");
var activeTopNavItem = document.querySelector(".topnav-items a.active");

toggleButton.addEventListener("click", toggleMenuButtonClicked);

document.querySelectorAll('.topnav-items a').forEach(
	item => { 
		item.addEventListener('click', topNavItemLinkClicked)
	})

function toggleActiveClassOntoggleMenuButton() {
	toggleButton.classList.toggle("active");
}

function toggleMenuButtonClicked(){
	toggleActiveClassOntoggleMenuButton();
	topNavItems.classList.toggle("active");
}

function topNavItemLinkClicked(){
	/* Make topNavItems disappear when clicking on one of its links. */
	if (topNavItems.classList.contains("active")){
			topNavItems.classList.remove("active");
	}
	
	/* Give underline to correct topnav item */
	activeTopNavItem.classList.remove("active");
	this.classList.add("active");
	activeTopNavItem = this;
	
}

