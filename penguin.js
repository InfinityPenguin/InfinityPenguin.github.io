function onGlow() {
	console.log("Called onGlow");
	glow = document.getElementById("glow");
	glow.setAttribute("onclick", "offGlow");
	setInterval(penguinGlow, 1000);
	glow.onclick = offGlow;
	console.log(glow.onclick);
}
function offGlow() {
	console.log("Called offGlow");
	glow = document.getElementById("glow");
	glow.setAttribute("onclick", "onGlow");
	clearInterval(penguinGlow);
	glow.onclick = onGlow;
	console.log(glow.onclick);
}


function toggleMenu() {
	console.log("called");
	toggler = document.getElementById("formatMenu");
	arrow = document.getElementById("menuToggler");
	toggler.classList.toggle("show");
	arrow.classList.toggle("show");
}

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
		playSound(defaultSound);
	} else {
		penguin.setAttribute("src", defaultPenguin);
		playSound(altSound);
	};
}

function changeFormat(newClass) {
	var currentClass = document.body.className;
	// change background
	document.body.classList.toggle(currentClass);
	document.body.classList.toggle(newClass);
	// change penguin
	document.getElementById("penguin").classList.toggle(currentClass);
	document.getElementById("penguin").classList.toggle(newClass);
	// change button
	currentButton = document.getElementById(currentTheme + "Button");
	currentButton.classList.toggle("active");
	currentButton.disabled = false;
	currentTheme = newClass;
	newButton = document.getElementById(currentTheme + "Button");
	newButton.classList.toggle("active");
	newButton.disabled = true;
	playSound("Falcon Kick!");
}

// initialize soundBoard
function initializeSoundBoard() {
	console.log("Creating soundboard...");
	sounds = {};
	soundIndex = 0;
	addSound(sounds, "Yes!");
	addSound(sounds, "Ouoh!");
	addSound(sounds, "Tu!");
	addSound(sounds, "Eeyah!");
	addSound(sounds, "Come On!");
	addSound(sounds, "Geuyah!");
	addSound(sounds, "evil-laugh");
	addSound(sounds, "Show me your Moves!");
	addSound(sounds, "Whoops!");
	addSound(sounds, "Hyaw!");
	addSound(sounds, "Muyoh!");
	addSound(sounds, "Falcon Kick!");
	console.log(sounds);
}
// returns an array of Audio elements from the string soundName
function initializeSound(soundName) {
	backupSize = 3;
	var sounds = [];
	for (i = 0; i < backupSize; i++) 
		sounds[i] = new Audio("sounds/" + soundName + ".mp3");
	return sounds;
}
// initializes the soundName into an array of sounds and add it to the soundBoard
function addSound(soundBoard, soundName) {
	soundBoard[soundName] = initializeSound(soundName);
}
// plays a sound associated with soundName 
function playSound(soundName) {
	sounds[soundName][(soundIndex++)%3].play();
}
