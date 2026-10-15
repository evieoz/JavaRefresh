
 // Helper function: writes HTML into the #out div
function render(html) {
  document.getElementById('out').innerHTML = html
}

// Function 1 - Greet
function greet() {
  const userName = prompt("What is your name?")

  if (!userName || !userName.trim()) {
    render("<p class='text-muted'>No name entered.</p>")
    return
  } else {
    render(`<p>Hello, ${userName}!</p>`)
  }
}

// Function 2 - Average Numbers
function averageNumbers() {
  const nums = prompt("Enter a list of numbers separated by commas")

  if (!nums) {
    render("<p class='text-muted'>No numbers entered.</p>")
    return
  }

  const numArray = nums
    .split(',')
    .map(n => parseFloat(n.trim()))
    .filter(n => !isNaN(n))

  if (numArray.length === 0) {
    render("<p>Please enter valid numbers.</p>")
    return
  }

  const sum = numArray.reduce((a, b) => a + b, 0)
  const avg = sum / numArray.length

  const list = numArray
    .map(n => `<li class="list-group-item">${n}</li>`)
    .join('')

  render(`
    <p>Average: <strong>${avg}</strong></p>
    <ul class="list-group">${list}</ul>
  `)
}

// Function 3 - Time of Day
function timeOfDay() {
  const h = new Date().getHours()

  let msg = ''

  if (h < 12) {
    msg = 'Good morning!'
  }
  else if (h < 18) {
    msg = 'Good afternoon!'
  }
  else if (h < 21) {
    msg = 'Good evening!'
  }
  else {
    msg = 'Good night!'
  }

  render(`<p>${msg}</p>`)
}

// Function 4 - Random Number
function randomBetween() {
  const minInput = prompt("Enter minimum number:")
  const maxInput = prompt("Enter maximum number:")

  if (minInput === null || maxInput === null ||
      minInput.trim() === '' || maxInput.trim() === '') {
    render("<p>Invalid numbers entered.</p>")
    return
  }

  const min = Number(minInput)
  const max = Number(maxInput)

  if (!Number.isInteger(min) || !Number.isInteger(max) || min >= max) {
    render("<p>Invalid numbers entered.</p>")
    return
  }

  const random = Math.floor(Math.random() * (max - min + 1)) + min

  render(`<p>Random number: ${random}</p>`)
}

// Function 5 - Clear Output
function clearOutput() {
  render("<p class='text-muted'>Output cleared.</p>")
}

// Original Button Event Listeners
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)


// ------------------------------------------
// Student Challenge Section
// ------------------------------------------

// Challenge 1 
function changeTitle() {
  document.querySelector('h1').textContent = "Welcome to Evie's Page!"
}

// Challenge 2 
let colorIndex = 0
const colors = ['red', 'green', 'orange', 'blue']

function changeTextColor() {
  document.getElementById('out').style.color = colors[colorIndex]
  colorIndex = (colorIndex + 1) % colors.length
}

// Challenge 3 
function changeBackground() {
  const colors = ['pink', 'lightblue', 'lightgreen', 'lavender', 'yellow']
  const random = Math.floor(Math.random() * colors.length)

  document.getElementById('out').style.backgroundColor = colors[random]
}

// Challenge 4 
function doubleNumber() {
  const input = prompt("Enter a number:")

  if (input === null || input.trim() === '' || !Number.isFinite(Number(input))) {
    render("<p>Invalid number.</p>")
    return
  }

  const num = Number(input)

  render(`<p>Doubled number: ${num * 2}</p>`)
}

// Student Challenge Button Event Listeners
document.getElementById('btnTitle').addEventListener('click', changeTitle)
document.getElementById('btnColor').addEventListener('click', changeTextColor)
document.getElementById('btnBackground').addEventListener('click', changeBackground)
document.getElementById('btnDouble').addEventListener('click', doubleNumber)
