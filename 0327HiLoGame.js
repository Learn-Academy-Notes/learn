// Guess-the-number game

function introduce () {
  var name = prompt ("Please enter your name");
  if (name != null) {
      alert ("Welcome, "+ name)
      alert ("You have seven tries to guess a number between 1 and 100")
  }
}

introduce ()

// produce a random number between 1 and a maximum number
function getRandomInt (max)  {
    return Math.ceil(Math.random() * Math.floor(max))
}

var userWon = false
// compare the user's guess to the computer-generated number
function playGame() {
  var userNumber = prompt ("Guess a number")
  if (compNumber == userNumber) {
      alert ("That's correct, you are the winner!")
      tries = 0
      userWon = true
  } else if (userNumber > compNumber) {
      alert ("Your guess is too high, try again!")
      tries--
  } else if (userNumber < compNumber) {
      alert ("Your guess is too low, try again")
      tries--
  } else {
      alert ("This is not a number, try again")
  }
}


var compNumber = (getRandomInt(100))

var tries = 7
while (tries >= 1) {
  playGame ()
}
if (tries==0 && !userWon){
  alert ("No chances left. Game over.")
}
