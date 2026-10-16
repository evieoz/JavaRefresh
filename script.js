
// Helper Function
function render(html) {
  document.getElementById('out').innerHTML = html
}

// Function 1 - Greet
function greet() {
  const userName = prompt("What is your name?")

  if (!userName || !userName.trim()) {
    render("<p>No name entered.</p>")
    return
  }

  render(`<p>Hello, ${userName}!</p>`)
}

// Function 2 - Average Numbers
function averageNumbers() {
  const nums = prompt("Enter numbers separated by commas")

  if (!nums) {
    render("<p>No numbers entered.</p>")
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
  if (minInput === null) return

  const maxInput = prompt("Enter maximum number:")
  if (maxInput === null) return

  if (minInput.trim() === '' || maxInput.trim() === '') {
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
  render("<p>Output cleared.</p>")
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

// Challenge 1 - Change Page Title
function changeTitle() {
  document.getElementById('pageTitle').textContent = "Welcome to Evie's Page!"
}

// Challenge 2 - Cycle Output Text Color
let colorIndex = 0
const colors = ['red', 'green', 'orange', 'blue']

function changeTextColor() {
  document.getElementById('out').style.color = colors[colorIndex]
  colorIndex = (colorIndex + 1) % colors.length
}

// Challenge 3 - Random Background Color
function changeBackground() {
  const bgColors = ['pink', 'lightblue', 'lightgreen', 'lavender', 'yellow']
  const random = Math.floor(Math.random() * bgColors.length)

  document.getElementById('out').style.backgroundColor = bgColors[random]
}

// Challenge 4 - Angry Mode
let angryMode = false

function toggleAngryMode() {
  angryMode = !angryMode

  if (angryMode) {
    document.body.style.backgroundColor = 'darkred'
    document.getElementById('pageTitle').textContent = '😡 ANGRY MODE ACTIVATED'
    document.getElementById('out').style.backgroundColor = 'red'
    document.getElementById('out').style.color = 'white'
    render("<h2>STOP CLICKING MY BUTTONS!!! 😡</h2>")
  }
  else {
    document.body.style.backgroundColor = 'white'
    document.getElementById('pageTitle').textContent = '🍂 JS Functions Demo'
    document.getElementById('out').style.backgroundColor = '#f8f9fa'
    document.getElementById('out').style.color = 'black'
    render("<p>Okay... I'm calm now. 😌</p>")
  }
}

// Student Challenge Event Listeners
document.getElementById('btnChangeTitle').addEventListener('click', changeTitle)
document.getElementById('btnCycleColor').addEventListener('click', changeTextColor)
document.getElementById('btnBgColor').addEventListener('click', changeBackground)
document.getElementById('btnAngry').addEventListener('click', toggleAngryMode)


// ------------------------------------------
// Functions Refresher
// ------------------------------------------

// 1 - Add Two Numbers
function addNumbers(a, b) {
  console.log(a + b)
}

addNumbers(5, 10)

// 2 - Greet Using a Parameter
function sayHello(name) {
  render(`<p>Hello, ${name}!</p>`)
}

sayHello("Evie")

// 3 - Random Item From Array
function randomItem() {
  const items = ['Pizza', 'Elephant', 'Golf', 'Disney', 'Dance']
  const random = Math.floor(Math.random() * items.length)

  render(`<p>${items[random]}</p>`)
}

randomItem()

// 4 - Array Length
function arrayLength(arr) {
  console.log(arr.length)
}

arrayLength(['red', 'blue', 'green'])
