function hatToggle() {
	penguin = document.getElementById("penguin");
	var defaultPenguin = "penguin.jpg";
	var altPenguin;
	var defaultSound;
	var altSound;
	switch(penguin.className) {
		case "purple":
			altPenguin = "penguin-hat.jpg";
			defaultSound = yes;
			altSound = ouoh;
			break;
		case "pink":
			altPenguin = "penguin-scarf.jpg";
			defaultSound = tu;
			altSound = eeyah;
			break;
		case "bamboo":
			altPenguin = "penguin-tophat.jpg";
			defaultSound = come;
			altSound = geuyah;
			break;
		case "fire":
			defaultPenguin = "penguin-devil.jpg";
			altPenguin = "penguin-devil-red-eyes.jpg";
			defaultSound = yes;
			altSound = laugh;
			break;
		case "colorful":
			altPenguin = "penguin-falcon.jpg";
			defaultSound = moves;
			altSound = whoops;
			break;
	}
	if (penguin.src.match(defaultPenguin)) {
		penguin.src = altPenguin;
		defaultSound.play();
	} else {
		penguin.src = defaultPenguin;
		altSound.play();
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
