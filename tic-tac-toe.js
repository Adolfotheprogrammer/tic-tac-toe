// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var whichplayer = 1
var square1clicked = false
function square1(){
if (whichplayer == 1){
  if (square1clicked == false ){
    var circle = document.createElementNS(namespace,"circle")
    circle.setAttribute("cx",50)
    circle.setAttribute("cy",50)
    circle.setAttribute("r",30)
    circle.setAttribute("fill","white")
    circle.setAttribute("opacity",1)
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
    square1clicked = true
    whichplayer = 2
  }
  }else if (whichplayer == 2){
    if (square1clicked == false) {
    var rect = document.createElementNS(namespace,"rect")
    rect.setAttribute("x",50)
    rect.setAttribute("y",50)
    rect.setAttribute("height",20)
    rect.setAttribute("width",20)
    rect.setAttribute("fill","white")
    rect.setAttribute("opacity",1)
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    square1clicked = true
    whichplayer = 1
  }
 }
}
var square2clicked = false
function square2(){
if (whichplayer == 1){
  if (square2clicked == false){
   var circle = document.createElementNS(namespace,"circle")
  circle.setAttribute("cx", 155)
  circle.setAttribute("cy", 50)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "white")
  circle.setAttribute("opacity",1)
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  square2clicked = true
  whichplayer = 2
  }
}else if (whichplayer == 2){
  if (square2clicked == false){
  var rect = document.createElementNS(namespace,"rect")
  rect.setAttribute("x",155)
  rect.setAttribute("y",50)
  rect.setAttribute("height",20)
  rect.setAttribute("width",20)
  rect.setAttribute("fill","white")
  rect.setAttribute("opacity", 1)
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rect)
  square2clicked = true
  whichplayer = 1
  }
 }
}
var square3clicked = false
function square3(){
  if (whichplayer == 1){
    if (square3clicked == false){
     var circle = document.createElementNS(namespace,"circle")
    circle.setAttribute("cx", 255)
    circle.setAttribute("cy", 50)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill", "white")
    circle.setAttribute("opacity",1)
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
    square3clicked = true
    whichplayer = 2
    }
  }else if (whichplayer == 2){
    if (square3clicked == false){
    var rect = document.createElementNS(namespace,"rect")
    rect.setAttribute("x",255)
    rect.setAttribute("y",50)
    rect.setAttribute("height",20)
    rect.setAttribute("width",20)
    rect.setAttribute("fill","white")
    rect.setAttribute("opacity", 1)
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    square3clicked = true
    whichplayer = 1
    }
   }
  }

var square4clicked = false
function square4(){
  if (whichplayer == 1){
    if (square4clicked == false){
     var circle = document.createElementNS(namespace,"circle")
    circle.setAttribute("cx", 50)
    circle.setAttribute("cy", 155)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill", "white")
    circle.setAttribute("opacity",1)
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
    square4clicked = true
    whichplayer = 2
    }
  }else if (whichplayer == 2){
    if (square4clicked == false){
    var rect = document.createElementNS(namespace,"rect")
    rect.setAttribute("x",50)
    rect.setAttribute("y",155)
    rect.setAttribute("height",20)
    rect.setAttribute("width",20)
    rect.setAttribute("fill","white")
    rect.setAttribute("opacity", 1)
    var canvas = document.getElementById("game-board")
    canvas.appendChild(rect)
    square4clicked = true
    whichplayer = 1
    }
   }
  }

var square5clicked = false
  function square5(){
    if (whichplayer == 1){
      if (square5clicked == false){
       var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute("cx", 155)
      circle.setAttribute("cy", 155)
      circle.setAttribute("r", 30)
      circle.setAttribute("fill", "white")
      circle.setAttribute("opacity",1)
      var canvas = document.getElementById("game-board")
      canvas.appendChild(circle)
      square5clicked = true
      whichplayer = 2
      }
    }else if (whichplayer == 2){
      if (square5clicked == false){
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",155)
      rect.setAttribute("y",155)
      rect.setAttribute("height",20)
      rect.setAttribute("width",20)
      rect.setAttribute("fill","white")
      rect.setAttribute("opacity", 1)
      var canvas = document.getElementById("game-board")
      canvas.appendChild(rect)
      square5clicked = true
      whichplayer = 1
      }
     }
    }

    var square6clicked = false
      function square6(){
        if (whichplayer == 1){
          if (square6clicked == false){
           var circle = document.createElementNS(namespace,"circle")
          circle.setAttribute("cx", 255)
          circle.setAttribute("cy", 155)
          circle.setAttribute("r", 30)
          circle.setAttribute("fill", "white")
          circle.setAttribute("opacity",1)
          var canvas = document.getElementById("game-board")
          canvas.appendChild(circle)
          square6clicked = true
          whichplayer = 2
          }
        }else if (whichplayer == 2){
          if (square6clicked == false){
          var rect = document.createElementNS(namespace,"rect")
          rect.setAttribute("x",255)
          rect.setAttribute("y",155)
          rect.setAttribute("height",20)
          rect.setAttribute("width",20)
          rect.setAttribute("fill","white")
          rect.setAttribute("opacity", 1)
          var canvas = document.getElementById("game-board")
          canvas.appendChild(rect)
          square6clicked = true
          whichplayer = 1
          }
         }
        }

        var square7clicked = false
          function square7(){
            if (whichplayer == 1){
              if (square7clicked == false){
               var circle = document.createElementNS(namespace,"circle")
              circle.setAttribute("cx", 50)
              circle.setAttribute("cy", 255)
              circle.setAttribute("r", 30)
              circle.setAttribute("fill", "white")
              circle.setAttribute("opacity",1)
              var canvas = document.getElementById("game-board")
              canvas.appendChild(circle)
              square7clicked = true
              whichplayer = 2
              }
            }else if (whichplayer == 2){
              if (square7clicked == false){
              var rect = document.createElementNS(namespace,"rect")
              rect.setAttribute("x",50)
              rect.setAttribute("y",255)
              rect.setAttribute("height",20)
              rect.setAttribute("width",20)
              rect.setAttribute("fill","white")
              rect.setAttribute("opacity", 1)
              var canvas = document.getElementById("game-board")
              canvas.appendChild(rect)
              square7clicked = true
              whichplayer = 1
              }
             }
            }

            var square8clicked = false
              function square8(){
                if (whichplayer == 1){
                  if (square8clicked == false){
                   var circle = document.createElementNS(namespace,"circle")
                  circle.setAttribute("cx", 155)
                  circle.setAttribute("cy", 255)
                  circle.setAttribute("r", 30)
                  circle.setAttribute("fill", "white")
                  circle.setAttribute("opacity",1)
                  var canvas = document.getElementById("game-board")
                  canvas.appendChild(circle)
                  square8clicked = true
                  whichplayer = 2
                  }
                }else if (whichplayer == 2){
                  if (square8clicked == false){
                  var rect = document.createElementNS(namespace,"rect")
                  rect.setAttribute("x",155)
                  rect.setAttribute("y",255)
                  rect.setAttribute("height",20)
                  rect.setAttribute("width",20)
                  rect.setAttribute("fill","white")
                  rect.setAttribute("opacity", 1)
                  var canvas = document.getElementById("game-board")
                  canvas.appendChild(rect)
                  square8clicked = true
                  whichplayer = 1
                  }
                 }
                }
                var square9clicked = false
                  function square9(){
                    if (whichplayer == 1){
                      if (square9clicked == false){
                       var circle = document.createElementNS(namespace,"circle")
                      circle.setAttribute("cx", 255)
                      circle.setAttribute("cy", 255)
                      circle.setAttribute("r", 30)
                      circle.setAttribute("fill", "white")
                      circle.setAttribute("opacity",1)
                      var canvas = document.getElementById("game-board")
                      canvas.appendChild(circle)
                      square9clicked = true
                      whichplayer = 2
                      }
                    }else if (whichplayer == 2){
                      if (square9clicked == false){
                      var rect = document.createElementNS(namespace,"rect")
                      rect.setAttribute("x",255)
                      rect.setAttribute("y",255)
                      rect.setAttribute("height",20)
                      rect.setAttribute("width",20)
                      rect.setAttribute("fill","white")
                      rect.setAttribute("opacity", 1)
                      var canvas = document.getElementById("game-board")
                      canvas.appendChild(rect)
                      square9clicked = true
                      whichplayer = 1
                      }
                     }
                    }
