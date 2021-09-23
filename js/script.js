const menu = document.querySelector("nav ul");

function displayMenu() {
	window.innerWidth <= 992
		? menu.classList.add("hide")
		: menu.classList.remove("hide");
}

displayMenu(); // at refresh
window.addEventListener("resize", displayMenu);

document
	.querySelector("#responsive-menu button")
	.addEventListener("click", () => {
		menu.classList.toggle("hide");
	});
