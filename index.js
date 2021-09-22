function startgame() {
    setGameTime()

isGameStarted = true

   if(!isGameStarted){
    $gameTime.setAttribute('disabled', 'true')
   }
    $resulth.classList.add('hide')
    $timeh.classList.remove('hide')
    let score = 0
    $button.classList.add('hide')
    $game.style.backgroundColor = '#fff'
    let interval = setInterval( function () {
        let time = parseFloat($time.textContent)
         if (time <= 0){
            endGame()
            clearInterval(interval)
         } else {
             $time.textContent = (time - 0.1).toFixed(1)
         }
    }, 100)
    renderBox()
}
function setGameTime(){
    let time = +$gameTime.value
    $time.textContent = time
}
function endGame(){
isGameStarted = false
$button.classList.remove('hide')
$game.style.backgroundColor = "#ccc"
$game.innerHTML = ''
$resulth.classList.remove('hide')
$timeh.classList.add('hide')
document.querySelector('#result').textContent = score
score = 0

   if(!isGameStarted){
    $gameTime.setAttribute('disabled', 'false')
   }

}
function renderBox(){

    let boxSize = getRandom(30, 100)
    $game.innerHTML = ''
    let box = document.createElement('div')
    let gameSize = $game.getBoundingClientRect()
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize
    let color = Math.floor(Math.random()*1000)
    box.style.border = '1px solid #000'
    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#' + color
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')
    $game.insertAdjacentElement ('afterbegin', box)
}
function handleBoxClick(event){
    if(!isGameStarted){
    return
    }
    if(event.target.dataset.box){
        renderBox()
        score++
    }
}
function getRandom(min, max){
    return Math.floor(Math.random() * ( max-min ) + min)
}

let $timeh = document.querySelector('#time-header')
let $resulth = document.querySelector('#result-header')
let $button = document.querySelector('#start')
let $game = document.querySelector('#game')
let score = 0
let $time = document.querySelector('#time')
let isGameStarted = false
let $gameTime = document.querySelector('#game-time')
$button.addEventListener('click', startgame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)

