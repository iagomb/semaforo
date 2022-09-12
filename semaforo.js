const buttons = document.querySelector('#buttons')
const img = document.querySelector('#img')
let colorIndex = 0
let intervalId = null;


const trafficLight = (event) => {
  stopAutomatic()
  console.log(turnOn[event.target.id]());// estou pegando o id e executando a funçõo dele
  console.log(event.target.id);
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;


const changerColor = () => {
  const colors = ['red', 'yellow',  'green']
  const color = colors[colorIndex]// colorIndex é o número que esta sendo incrementado
  turnOn[color]()
  nextIndex();
  console.log(color);
}

const stopAutomatic = () => {
  clearInterval( intervalId )
}

const turnOn = {
  'red': () => img.src = './img/vermelho.png', 
  'yellow': () => img.src = './img/amarelo.png', 
  'green': () => img.src = './img/verde.png', 
  'automatic': () => intervalId = setInterval(changerColor, 1000)
}
buttons.addEventListener('click', trafficLight)