// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"


function square1(){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",50)
  circle.setAttribute("cy",50)
  circle.setAttribute("r",30)
  circle.setAttribute("fill","white")
  circle.setAttribute("fill-opacity",1)
  canvas.appendChild(circle)
}

var square1clicked = 0
function amountsquare1cicked(){
  if(square1clicked == 0){
    square1clicked = 1
  }
}

function square2(){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace,"circle")
  circle.setAttribute("cx", 155)
  circle.setAttribute("cy", 50)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "white")
  circle.setAttribute("fill-opacity",1)
  canvas.appendChild(circle)
}

var square2clicked = 0
function amountsquare2cicked(){
  if(square2clicked = 0){
    square2clicked = 1
  }
}

function square3(){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace,"circle")
  circle.setAttribute("cx", 255)
  circle.setAttribute("cy", 50)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "white")
  circle.setAttribute("fill-opacity",1)
  canvas.appendChild(circle)
}

var square3clicked = 0
function amountsquare3cicked(){
  if(square3clicked = 0){
    square3clicked = 1
  }
}

var player1 = 1
function whoseturn(){
  if (player1 = 1 ){
    player1 = "circle"
  } else if(player1 = 2)
  player1
}
