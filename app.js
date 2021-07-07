function computerPlay() {

  if (userScore === 5 || computerScore === 5) {
    return
  }
  let randomNumber = Math.floor(Math.random() * 3)

  switch (randomNumber) {
    case 0:
      document.getElementById("comp-R").style.color = 'red'
      document.getElementById("comp-P").style.color = 'white'
      document.getElementById("comp-S").style.color = 'white'
      return 'Rock';
    case 1:
      document.getElementById("comp-P").style.color = 'red'
      document.getElementById("comp-R").style.color = 'white'
      document.getElementById("comp-S").style.color = 'white'
      return 'Paper';
    case 2:
      document.getElementById("comp-S").style.color = 'red'
      document.getElementById("comp-P").style.color = 'white'
      document.getElementById("comp-R").style.color = 'white'
      return 'Scissors';
  }
}




let playerChoice = document.querySelectorAll('.player-option');

for (let i = 0; i < playerChoice.length; i++) {
  playerChoice[i].addEventListener("click", () => {
    userSelect = playerChoice[i].textContent
  })
}

let userScore = 0;
let computerScore = 0;

function playRound(userSelect, compSelect) {

  if (userScore === 5 || computerScore === 5) {
    return
  }

  if (userSelect === compSelect) {

    return 'Tie'
  }

  if (userSelect === 'Rock') {
    if (compSelect === 'Paper') {
      computerScore++
      document.getElementById("comp-score").innerText++
    } else {
      userScore++
      document.getElementById("player-score").innerText++
    }
  }

  if (userSelect === 'Paper') {
    if (compSelect === 'Scissors') {
      computerScore++
      document.getElementById("comp-score").innerText++
    } else {
      userScore++
      document.getElementById("player-score").innerText++
    }
  }

  if (userSelect === 'Scissors') {
    if (compSelect === 'Rock') {
      computerScore++
      document.getElementById("comp-score").innerText++
    } else {
      userScore++
      document.getElementById("player-score").innerText++
    }
  }

  if (userScore === 5) {
    document.getElementById("game-win").style.display = 'flex'
    document.getElementById("game-lose").style.display = 'hide'
  } else if (computerScore === 5) {
    document.getElementById("game-win").style.display = 'hide'
    document.getElementById("game-lose").style.display = 'flex'
  }


}

function game() {
  let userSelect;
  let playerChoice = document.querySelectorAll('.player-option');

  for (let i = 0; i < playerChoice.length; i++) {
    playerChoice[i].addEventListener("click", () => {
      userSelect = playerChoice[i].textContent
      let compSelect = computerPlay()
      playRound(userSelect, compSelect)
    })
  }
}

game()

let reset = document.getElementById("reset")


reset.addEventListener("click", () => {
  location.reload();
})