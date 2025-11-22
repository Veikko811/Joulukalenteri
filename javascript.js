const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();
const audio = new Audio("Ääni/error.mp3");

function shuffledNumbers() {
    const arr = Array.from({ length: 24 }, (_, i) => i + 1);
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const numbers = shuffledNumbers(24);

function removeTopImage() {
    this.style.backgroundImage = "url()";
    this.innerText = "";
    this.removeEventListener("click", removeTopImage);
}
function playShakeAnimation(){
    this.style.animation = "shake 0.5s";
    setTimeout(() => {this.style.animation = "";}, 500);
    audio.play();
}

const calendarGrid = document.querySelector(".calendarGrid");

for (let i = 1; i <= 24; i++) {
    let num = numbers[i - 1]; // shuffled number
    let newDiv = document.createElement("div");
    newDiv.innerText = num;   // näyttää shuffled number
    if (currentMonth == 12 && currentDay >= num){
        newDiv.addEventListener("click", removeTopImage);
    }
    else{
        newDiv.addEventListener("click", playShakeAnimation)
    };
    calendarGrid.appendChild(newDiv);
}

