const totalScore = {playerScore: 0, computerScore: 0}

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}


function getResult(playerChoice, computerChoice) {
  
  
    let score = 0;
  
  if (playerChoice === computerChoice) {
    score = 0;
  }
  

else if(
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice ==='Paper' && computerChoice === 'Rock') ||
    (playerChoice ==='Scissors' && computerChoice === 'Paper')

  )
  {
    score = 1;
  }

  
  else{
    score = -1
  }

  
  return score
}


function showResult(score, playerChoice, computerChoice) {
  
   const resultDiv = document.getElementById('result')
   const handsDiv = document.getElementById('hands')
   const playerScoreDiv = document.getElementById('player-score')
   if(score === -1) {
    resultDiv.innerText = "You Lose"
   }
   else if(score === 1) {
    resultDiv.innerText = "You Win"
   }
   else{
    resultDiv.innerText = "It's a draw"
   }
  handsDiv.innerText = `👩 ${playerChoice} vs 🤖 ${computerChoice}`
  playerScoreDiv.innerText = `Your Score ${totalScore['playerScore']}`

}


function onClickRPS(playerChoice) {
    console.log({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    const score = getResult(playerChoice, computerChoice)
    console.log({score})
    totalScore['playerScore'] += score
    totalScore['computerScore'] += score
    showResult(score,playerChoice,computerChoice)


  }



function playGame() {
  
  const rpsButtons = document.querySelectorAll('.rpsButton')
  
    rpsButtons.forEach(rpsButton =>{rpsButton.addEventListener('click',()=>{return onClickRPS(rpsButton.value)})})
 

  
  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
}


function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0


  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

playGame()