var canvas = document.getElementById('MazeGame_Shape');

var context = canvas.getContext('2d');

var canvasPos = getPosition(canvas);
var keyX = 50;
var keyY = 50;

function setKeyPosition(e){
  keyX = e.clientX - canvasPos.x;
  keyY = e.clientY - canvasPos.y;
}

window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);

var keys = [];
function keysPressed(e) {
  keys[e.keyCode]=true;

  if(keys[37]){
    keyX -= 10;
  }

  if(keys[39]){
    keyX += 10;
  }

  if(keys[38]){
    keyY -= 10;
  }

  if(keys[40]){
    keyY += 10;
  }
  e.preventDefault ();
}

function keysReleased(e){

  keys[e.keyCode] = false;
}

function circle () {
  context.clearRect(0,0, canvas.width, canvas.height);
  context.beginPath ();
  context.arc(keyX, keyY, 50, 0, 2 * Math.PI, true);
  context.fillStyle = "#FF6A6A";
  context.fill();
  requestAnimationFrame(circle);
  if(keyX > 200 || keyY > 200) {
    keyX = 0;
    keyY = 0;
  }

}
circle();
function getPosition(el){
  var xPosition = 0;
  var yPosition = 0;
  while (el) {
    xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition,
  };
}
