let diameter = 0
let area = 0
let circumference = 0
let answer = 0

document.getElementById('button').addEventListener('click', setup)
document.getElementById('button-2').addEventListener('click', math)

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

function transition () {
  document.getElementById('text').innerHTML = 'Now enter your diameter.'
  document.getElementById('player-choice').style.display = 'none'
  document.getElementById('player-diameter').style.display = 'inline'
  document.getElementById('button').style.display = 'none'
  document.getElementById('button-2').style.display = 'inline'
}

function reset () {
  document.getElementById('text').innerHTML = 'Would you like to calculate the area or circumference of the circle?'
  document.getElementById('player-choice').style.display = 'inline'
  document.getElementById('player-diameter').style.display = 'none'
  document.getElementById('button').style.display = 'inline'
  document.getElementById('button-2').style.display = 'none'
}
