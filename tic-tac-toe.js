// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var canvas = document.getElementById("game-board")
var circle = document.createElementNS(namespace,"circle")
var whichplayer = 1
var square1clicked = 0
function square1(){
  if (whichplayer == 1 ){
    circle.setAttribute("cx",50)
    circle.setAttribute("cy",50)
    circle.setAttribute("r",30)
    circle.setAttribute("fill","white")
    circle.setAttribute("fill-opacity",1)
    canvas.appendChild(circle)
    square1clicked = 1
  } else{
    var rect = document.createElementNS(namespace,"rect")
    rect.setAttribute("x",50)
    rect.setAttribute("y",50)
    rect.setAttribute("height",20)
    rect.setAttribute("width",20)
    rect.setAttribute("fill","white")
    canvas.appendChild(rect)
    square1clicked = 2
  }
}
var square2clicked = 0
var circle = document.createElementNS(namespace,"circle")
function square2(){
if(whichplayer == 1)
  circle.setAttribute("cx", 155)
  circle.setAttribute("cy", 50)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "white")
  circle.setAttribute("fill-opacity",1)
  canvas.appendChild(circle)
  square2clicked = 1
} else{
  
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
  if(square3clicked == 0){
    square3clicked = 1
  }
}

var whichplayer = 1
function whoseturn(){
  if (whichplayer == 1 ){
    var rect = document.createElementNS(namespace,"rect")
    rect.setAttribute("x",50)
    rect.setAttribute("y",50)
    rect.setAttribute("height",20)
    rect.setAttribute("width",20)
    rect.setAttribute("fill","white")
    canvas.appendChild(rect)
    whichplayer = 2
  } else{
var circle = document.getElementById("circle")

    whichplayer = 1
  }


}
