const kuvat = [
    "Kuvat/1.jpg",
    "Kuvat/2.jpg",
    "Kuvat/3.jpg",
    "Kuvat/4.jpg",
    "Kuvat/5.jpg",
    "Kuvat/6.jpg",
    "Kuvat/7.jpg",
    "Kuvat/8.jpg",
    "Kuvat/9.jpg",
    "Kuvat/10.jpg",
    "Kuvat/11.jpg",
    "Kuvat/12.jpg",
    "Kuvat/13.jpg",
    "Kuvat/14.jpg",
    "Kuvat/15.jpg",
    "Kuvat/16.jpg",
    "Kuvat/17.jpg",
    "Kuvat/18.jpg",
    "Kuvat/19.jpg",
    "Kuvat/20.jpg",
    "Kuvat/21.jpg",
    "Kuvat/22.jpg",
    "Kuvat/23.jpg",
    "Kuvat/24.jpg",
]
const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();
createDivs();

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
       
       
        
    }
    else{
        
    }
}

function createDivs(){
    const calendarGrid = document.querySelector(".calendarGrid");
    
    for (let i = 1; i <= 24; i++){
        const newDiv = document.createElement("div");
        newDiv.id = "day" + i;
        newDiv.innerText = i;
        calendarGrid.appendChild(newDiv);
    }
}
