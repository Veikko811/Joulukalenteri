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
        divID.classList.add("shake");

        // Poistetaan animaatioluokka hetken kuluttua, jotta se voi toistua
        setTimeout(() => {
            divID.classList.remove("shake");
        }, 500);

        // Soitetaan ääniefekti
        const audio = new Audio("Kuvat/error.mp3"); // Lisää tiedosto kansioon
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
