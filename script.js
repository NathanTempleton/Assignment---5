// I set the variables here so they can be changed later.
let diameter = 0
let area = 0
let circumference = 0
let answer = 0

// I set it so when these buttons are pushed they activate theses functions.
document.getElementById('button').addEventListener('click', setup)
document.getElementById('button-2').addEventListener('click', math)

// This is used to set up the displays and get inputs.
function setup () {
  const playerChoice = document.getElementById('player-choice').value
  if (playerChoice.toLowerCase() === 'area') {
    transition()
  } else if (playerChoice.toLowerCase() === 'circumference') {
    transition()
  } else {
    document.getElementById('result').innerHTML = 'Error'
  }
}

// This will do the math with the diameter given by the player.
function math (playerChoice) {
  if (playerChoice.toLowerCase() === 'area') {
    playerChoice = document.getElementById('player-diameter').value
    diameter = playerChoice
    area = Math.PI * ((diameter / 2) ** 2)
    area = parseInt(area)
    answer = area
    document.getElementById('result').innerHTML = 'Your answer is :' + answer
    reset()
  } else if (playerChoice.toLowerCase() === 'circumference') {
    playerChoice = document.getElementById('player-diameter').value
    diameter = playerChoice
    circumference = 2 * Math.PI * (diameter / 2)
    circumference = parseInt(circumference)
    answer = circumference
    document.getElementById('result').innerHTML = 'Your answer is :' + answer
    reset()
  } else {
    document.getElementById('result').innerHTML = 'Error'
    reset()
  }
}

// This is used to change the buttons and inputs and to prevent the clone error in the linter.
function transition () {
  document.getElementById('text').innerHTML = 'Now enter your diameter.'
  document.getElementById('player-choice').style.display = 'none'
  document.getElementById('player-diameter').style.display = 'inline'
  document.getElementById('button').style.display = 'none'
  document.getElementById('button-2').style.display = 'inline'
}

// his is used to change the buttons and inputs to start a new cycle and to prevent the clone error in the linter.
function reset () {
  document.getElementById('text').innerHTML = 'Would you like to calculate the area or circumference of the circle?'
  document.getElementById('player-choice').style.display = 'inline'
  document.getElementById('player-diameter').style.display = 'none'
  document.getElementById('button').style.display = 'inline'
  document.getElementById('button-2').style.display = 'none'
}
