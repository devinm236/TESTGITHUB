var canvas = document.querySelector("#MazeGame_Shape");
   var context = canvas.getContext("2d");

   var deltaX = 0;
   var deltaY = 0;

   window.addEventListener("keydown", keysPressed, false);
   window.addEventListener("keyup", keysReleased, false);

   var keys = [];

   function keysPressed(e) {
       // store an entry for every key pressed
       keys[e.keyCode] = true;

       // left
       if (keys[37]) {
         deltaX -= 10;
       }

       // right
       if (keys[39]) {
         deltaX += 10;
       }

       // down
       if (keys[38]) {
         deltaY -= 10;
       }

       // up
       if (keys[40]) {
         deltaY += 10;
       }

   e.preventDefault();
   }

   function keysReleased(e) {
       // mark keys that were released
       keys[e.keyCode] = false;
   }

   function drawTriangle(x, y) {
     // the triangle
     context.beginPath();
     context.moveTo(x + 200, y + 100);
     context.lineTo(x + 170, y + 150);
     context.lineTo(x + 230, y + 150);
     context.closePath();

     // the outline
     context.lineWidth = 5;
     context.strokeStyle = "rgba(102, 102, 102, 1)";
     context.stroke();

     // the fill color
     context.fillStyle = (255, 204, 0, 1, '#D70FA2');
     context.fill();
     context.font = "25px Sans Serif";
     context.textAlign = "center"
     context.fillText("Welcome to the wonderful world of canvas...", 500, 50);
   }

   function animate() {
     context.clearRect(0, 0, canvas.width, canvas.height);

     drawTriangle(deltaX, deltaY);

     requestAnimationFrame(animate);
   }
   animate();
