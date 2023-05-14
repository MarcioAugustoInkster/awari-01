// document.addEventListener("DOMContentLoaded", function() {});

function onAnchorClick(event) {
	let content = event.target.parentElement.parentElement.children[1];
	if (!content.classList.contains("content-show")) {
		content.classList.add("content-show");
		console.log(content.clientHeight);
		event.target.innerText = "[ocultar]";
	} else {
		content.classList.remove("content-show");
		console.log(content.clientHeight);
		event.target.innerText = "[exibir]";
	}
}