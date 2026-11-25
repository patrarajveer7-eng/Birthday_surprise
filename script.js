
function openSurprise() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("surprise").classList.remove("hidden");
}

function showChallenge() {
    document.getElementById("surprise").classList.add("hidden");
    document.getElementById("challenge").classList.remove("hidden");
}

function wrongAnswer() {
    document.getElementById("answer").textContent =
        "Haha! Nice try 😂 Give it another shot!";
}

function correctAnswer() {
    document.getElementById("challenge").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
    showMessage();
}

function showMessage() {
    const text = "Hey OJaswee! Even though we haven't talked in a while, I hope you're doing amazing. May this new year of your life bring you happiness, success, laughter and countless beautiful memories. Keep smiling and keep being yourself! 😊";

    let i = 0;
    const typing = document.getElementById("typing");
    typing.textContent = "";

    function typeWriter() {
        if (i < text.length) {
            typing.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 35);
        }
    }

    typeWriter();
}

function showFinal() {
    document.getElementById("message").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");
}
function changeMusic() {
    const music = document.getElementById("backgroundMusic");
    const choice = document.getElementById("musicChoice").value;

    const wasPlaying = !music.paused;

    music.pause();
    music.src = choice;

    if (choice) {
        music.load();

        if (wasPlaying) {
            music.play();
        }

        document.getElementById("musicToggle").textContent = "Play Music ▶️";
    }
}

function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const button = document.getElementById("musicToggle");

    if (!music.getAttribute("src")) {
        alert("Choose a soundtrack first! 🎵");
        return;
    }

    if (music.paused) {
        music.play();
        button.textContent = "Pause Music ⏸️";
    } else {
        music.pause();
        button.textContent = "Play Music ▶️";
    }
}