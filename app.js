/* This is where the computer makes a choice of rock, paper or scissors at random*/

function computerPlay() {
  let compChoice = Math.floor(Math.random() * 3)

  switch (compChoice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

/*---------------------------------------------------------------------------------*/

/* This is where score  values are stored*/

let compScore = 0;
let userScore = 0;

/*---------------------------------------*/

/*This is where the computer's slection is compaired to the user's slection and a point is awarded accordingly.*/

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {

    return 'This round is a tie, no points awarded.'
  }

  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      compScore++
      return 'The computer won this round, try again.'
    } else {
      userScore++
      return 'You won this round!'
    }
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      compScore++
      return 'The computer won this round, try again.'
    } else {
      userScore++
      return 'You won this round!'
    }
  }

  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      compScore++
      return 'The computer won this round, try again.'
    } else {
      userScore++
      return 'You won this round!'
    }
  }
}

/*--------------------------------------------------------------------------------------------------------*/

/*This is where the game is played 5 times in a row and output the choices, score and winner of the round/game to the console.*/

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Make a choice: Rock, Paper, Scissors').toLowerCase()
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log(`You picked ${playerSelection}, your score is: ${userScore}`)
    console.log(`The computer picked ${computerSelection}, the computer's score is: ${compScore}`)

  }

  if (userScore > compScore) {
    console.log('Congrats, you won the game!')
  } else if (userScore < compScore) {
    console.log('The computer won the game, better luck next time.')
  } else {
    console.log('The game is a tie.')
  }
}

game()

/*-----------------------------------------------------------------------------------------------------------------------------*/