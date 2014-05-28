function penguinGlow() {
	penguin = document.getElementById("penguin");
	penguin.classList.toggle("glow");
}

function hatToggle() {
	penguin = document.getElementById("penguin");
	defaultPenguin = "penguin.jpg";
	var altPenguin;
	var defaultSound;
	var altSound;
	classList = penguin.classList;
	if (classList.contains("purple")) {
		altPenguin = "penguin-hat.jpg";
		defaultSound = "Yes!";
		altSound = "Ouoh!";
	} else if (classList.contains("pink")) {
		altPenguin = "penguin-scarf.jpg";
		defaultSound = "Tu!";
		altSound = "Eeyah!";
	} else if (classList.contains("bamboo")) {
		altPenguin = "penguin-tophat.jpg";
		defaultSound = "Come On!";
		altSound = "Geuyah!";
	} else if (classList.contains("fire")) {
		defaultPenguin = "penguin-devil.jpg";
		altPenguin = "penguin-devil-red-eyes.jpg";
		defaultSound = "evil-laugh";
		altSound = "Yes!";
	} else if (classList.contains("colorful")) {
		altPenguin = "penguin-medieval.jpg";
		defaultSound = "Show me your Moves!";
		altSound = "Whoops!";
	} else {
		altPenguin = "penguin-winged.jpg";
		defaultSound = "Hyaw!";
		altSound = "Muyoh!";
	};
	if (penguin.src.match(defaultPenguin)) {
		penguin.setAttribute("src", altPenguin);
		new Audio("sounds/" + defaultSound + ".mp3").play();
	} else {
		penguin.setAttribute("src", defaultPenguin);
		new Audio("sounds/" + altSound + ".mp3").play();
	};
}

function changeFormat(newClass) {
	var currentClass = document.body.className;
	document.body.classList.toggle(currentClass);
	document.body.classList.toggle(newClass);
	document.getElementById("penguin").classList.toggle(currentClass);
	document.getElementById("penguin").classList.toggle(newClass);
	falconKick.play();
}
