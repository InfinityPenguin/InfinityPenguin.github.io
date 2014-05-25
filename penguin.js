function hatToggle() {
	penguin = document.getElementById("penguin");
	if (penguin.src.match("penguin-hat")) {
		penguin.src = "penguin.jpg";
		no.play();
	} else {
		penguin.src = "penguin-hat.jpg";
		yes.play();
	};
}
