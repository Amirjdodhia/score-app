let homeScore = 0
let guestScore = 0

let homeDisplayEl = document.getElementById("home-display")
let guestDisplayEl = document.getElementById("guest-display")

function add1Home(){
    homeScore += 1
    homeDisplayEl.textContent = homeScore
    
}

function add2Home(){
    homeScore += 2
    homeDisplayEl.textContent = homeScore
    
}

function add3Home(){
    homeScore += 3
    homeDisplayEl.textContent = homeScore
    
}


function add1Guest(){
    guestScore += 1
    guestDisplayEl.textContent = guestScore

    
}

function add2Guest(){
    guestScore += 2
    guestDisplayEl.textContent = guestScore
    
}

function add3Guest(){
    guestScore += 3
    guestDisplayEl.textContent = guestScore
    
}

function resetGame(){
    guestScore = 0
    guestDisplayEl.textContent = guestScore
    
     homeScore = 0
    homeDisplayEl.textContent = homeScore
    
}

