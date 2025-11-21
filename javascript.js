const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();
createDivs(24, ".calendarGrid");

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

    for (let i = 1; i <= amount; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = "day" + i;
        newDiv.innerText = i;
        newDiv.addEventListener("click", function () { showPicture(i); });
        calendarGrid.appendChild(newDiv);
    }
}
