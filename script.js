const container = document.getElementById('container')
const colors = ['#4287f5', '#ce42f5', '#f542d4', '#f54290', '#f7404d', '#4056f7', '#40aef7',  '#40e5f7', '#40f7d2', '#40f798', '#98f740', '#e2f740', '#f7dc40', '#f7a840', '#f75240']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow - '0 0 2px #000, 0 0 10px #1d1d1d'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

