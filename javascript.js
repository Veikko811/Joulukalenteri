const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

function shuffledNumbers(n) {
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const numbers = shuffledNumbers(24);

function isCorrectDate(day) {
    if (currentMonth == 12 && currentDay >= day) {
        return true;
    }
    else {
        return false;
    }
}

function showPicture(day) {
    if (isCorrectDate(day)) {
        let divID = document.getElementById("day" + day);
        divID.style.backgroundImage = "url()";
        divID.innerText = "";
    }
    else {
        let divID = document.getElementById("day" + day);
        divID.classList.add("shake");

        // Poistetaan animaatioluokka kun animaatio loppuu
        divID.addEventListener("animationend", () => {
            divID.classList.remove("shake");
        }, { once: true });

        // Soitetaan ääniefekti
        const audio = new Audio("Kuvat/error.mp3");
        audio.play();
    }

}

function createDivs(amount, location) {
    let calendarGrid = document.querySelector(location);

    for (let i = 0; i < amount; i++) {
     let num = numbers[i]; // shuffled number

        let newDiv = document.createElement("div");
        newDiv.id = "day" + num;  // ID käyttää shuffled number
        newDiv.innerText = num;   // näyttää shuffled number
        newDiv.addEventListener("click", () => showPicture(num));
        calendarGrid.appendChild(newDiv);
    }
}
createDivs(24, ".calendarGrid");