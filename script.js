const button = document.getElementById("surpriseButton");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    message.hidden = false;
    button.textContent = "Surprise Opened! 🎉";
    button.disabled = true;

    message.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});