const header = document.getElementById("header");
const btns = header.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		const current = document.getElementsByClassName("active");
		if (current.length > 0) {
			current[0].className = current[0].className.replace(" active", "");
		}
		this.className += " active";
	});
}