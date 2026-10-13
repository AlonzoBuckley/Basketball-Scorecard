


let homeScore = document.getElementById("home-score");
let homeCount = 0;

let guestScore = document.getElementById("guest-score");
let guestCount = 0;

function homeAdd1Point(){
    homeCount += 1;
    homeScore.textContent = homeCount;
    console.log(homeCount);
    
}

function homeAdd2Point(){
    homeCount += 2;
    homeScore.textContent = homeCount;
    console.log(homeCount);
    
} 

function homeAdd3Point(){
    homeCount += 3;
    homeScore.textContent = homeCount;
    console.log(homeCount);
    
}

function guestAdd1Point(){
    guestCount += 1;
    guestScore.textContent = guestCount;
    console.log(guestCount);
    
}

function guestAdd2Point(){
    guestCount += 2;
    guestScore.textContent = guestCount;
    console.log(guestCount);
    
}

function guestAdd3Point(){
    guestCount += 3;
    guestScore.textContent = guestCount;
    console.log(guestCount)
    
}

function newGame(){
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount;
    console.log(homeCount);
    guestScore.textContent = guestCount;
    console.log(guestCount);
    
}