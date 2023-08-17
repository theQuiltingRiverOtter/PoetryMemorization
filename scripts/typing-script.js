const typingText = document.querySelector(".typing-text p");
const inpField = document.querySelector(".wrapper .input-field");
const mistakeTag = document.querySelector(".mistake span");
const timeTag = document.querySelector(".time span b");
const cpmTag = document.querySelector(".cpm span");
const wpmTag = document.querySelector(".wpm span");
const tryAgainBtn = document.querySelector("button");
let charIndex = mistakes = 0;

let timer,
    maxTime = 60,
    isTyping = 0,
    timeLeft = maxTime;

function randomStanza() {
    let randomIndex = Math.floor(Math.random() * stanzas.length);
    typingText.innerHTML = "";
    stanzas[randomIndex].forEach(line => {
        line.split("").forEach(span => {
            let spanTag = `<span>${span}</span>`;
            typingText.innerHTML += spanTag;
        })
        typingText.innerHTML += "<br>";
    });

    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        if (typedChar == null) {
            charIndex--;
            if (characters[charIndex].classList.contains("incorrect")) {
                mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
        } else {
            if (characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                characters[charIndex].classList.add("incorrect");
                mistakes++;
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");
        let wpm = Math.round((((charIndex - mistakes) / 5) / (maxTime - timeLeft)) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
        wpmTag.innerText = wpm;
    } else {
        inpField.value = '';
        clearInterval(timer);

    }

}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;

    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    randomStanza();
    inpField.value = '';
    clearInterval(timer);
    timeLeft = maxTime,
        charIndex = mistakes = isTyping = 0;
    timeTag.innerText = timeLeft;
    mistakeTag.innerText = mistakes;
    wpmTag.innerText = 0;
    cpmTag.innerText = 0;
}
randomStanza();

inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);