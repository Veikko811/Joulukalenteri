const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();
createDivs(24, ".calendarGrid");

function isCorrectDate(day){
    if (currentMonth == 12 && currentDay >= day){
        return true;
    }
    else{
        return false;
    }
}

function showPicture(day){
    if (isCorrectDate(day)){
       let divID = document.getElementById("day" + day);
       divID.style.backgroundImage = "url()";
       divID.innerText = "";
    }
    else{
        
    }
}

function createDivs(amount, location){
    const calendarGrid = document.querySelector(location);

    for (let i = 1; i <= amount; i++){
        let newDiv = document.createElement("div");
        newDiv.id = "day" + i;
        newDiv.innerText = i;
        newDiv.addEventListener("click", function(){showPicture(i);});
        calendarGrid.appendChild(newDiv);
    }
}
