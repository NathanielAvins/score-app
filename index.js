let scoreHome = document.getElementById("score-home")
let homeCount = 0

let scoreGuest = document.getElementById("score-guest")
let guestCount = 0

let homeCard = document.getElementById("home-card")
let guestCard = document.getElementById("guest-card")



function plus1Home() {
   homeCount += 1
   scoreHome.textContent = homeCount
   if (homeCount > guestCount) {
       homeCard.classList.add('leader')
   }
   else {
       homeCard.classList.remove('leader')
   }
   if (homeCount < guestCount) {
       guestCard.classList.add('leader')
   }
   else {
       guestCard.classList.remove('leader')
   }
}

function plus2Home() {
   homeCount += 2
   scoreHome.textContent = homeCount
   if (homeCount > guestCount) {
       homeCard.classList.add('leader')
   }
   else {
       homeCard.classList.remove('leader')
   }
   if (homeCount < guestCount) {
       guestCard.classList.add('leader')
   }
   else {
       guestCard.classList.remove('leader')
   }
}

function plus3Home() {
   homeCount += 3
   scoreHome.textContent = homeCount
   if (homeCount > guestCount) {
       homeCard.classList.add('leader')
   }
   else {
       homeCard.classList.remove('leader')
   }
   if (homeCount < guestCount) {
       guestCard.classList.add('leader')
   }
   else {
       guestCard.classList.remove('leader')
   }
}

function resetHome() {
   homeCount = 0
   scoreHome.textContent = homeCount
   if (homeCount > guestCount) {
       homeCard.classList.add('leader')
   }
   else {
       homeCard.classList.remove('leader')
   }
   if (homeCount < guestCount) {
       guestCard.classList.add('leader')
   }
   else {
       guestCard.classList.remove('leader')
   }
}



function plus1Guest() {
   guestCount += 1
   scoreGuest.textContent = guestCount
   if (homeCount > guestCount) {
       homeCard.classList.add('leader')
   }
   else {
       homeCard.classList.remove('leader')
   }
   if (homeCount < guestCount) {
       guestCard.classList.add('leader')
   }
   else {
       guestCard.classList.remove('leader')
   }
}

function plus2Guest() {
   guestCount += 2
   scoreGuest.textContent = guestCount
   if (homeCount > guestCount) {
       homeCard.classList.add('leader')
   }
   else {
       homeCard.classList.remove('leader')
   }
   if (homeCount < guestCount) {
       guestCard.classList.add('leader')
   }
   else {
       guestCard.classList.remove('leader')
   }
}

function plus3Guest() {
   guestCount += 3
   scoreGuest.textContent = guestCount
   if (homeCount > guestCount) {
       homeCard.classList.add('leader')
   }
   else {
       homeCard.classList.remove('leader')
   }
   if (homeCount < guestCount) {
       guestCard.classList.add('leader')
   }
   else {
       guestCard.classList.remove('leader')
   }
}

function resetGuest() {
   guestCount = 0
   scoreGuest.textContent = guestCount
   if (homeCount > guestCount) {
       homeCard.classList.add('leader')
   }
   else {
       homeCard.classList.remove('leader')
   }
   if (homeCount < guestCount) {
       guestCard.classList.add('leader')
   }
   else {
       guestCard.classList.remove('leader')
   }
}


console.log(homeCount)
console.log(guestCount)