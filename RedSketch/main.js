let nobLeft, nobRight,innerCircleLeft,innerCircleRight;

let ctx, drawBoard;
let x,y;

function init(){
  nobLeft =  document.getElementById("nobLeft");
  nobRight = document.getElementById("nobRight");
  nobRight.style.width = "20vh";
  nobRight.style.height = "20vh";
  nobLeft.style.width = "20vh";
  nobLeft.style.height = "20vh";
  
  innerCircleLeft = document.getElementById("innerCircleLeft");
  innerCircleRight = document.getElementById("innerCircleRight");
  innerCircleLeft.angle = 0;
  innerCircleRight.angle = 0;

  drawBoard = document.getElementById("drawBoard");
  ctx = drawBoard.getContext("2d");
  x=drawBoard.width/2;
  y=drawBoard.height/2;
}

function render(){
  leftAngle++;
  innerCircleLeft.style.transform = "rotate("+leftAngle+"deg)";
  setTimeout(()=>{
    render();
  },10);
}

function keyPressed(event){
  console.log(event.keyCode);
  switch(event.keyCode){
    case 8: //backspace
      ctx.clearRect(0,0,drawBoard.width,drawBoard.height);
      ctx.beginPath();
      x=drawBoard.width/2;
      y=drawBoard.height/2;
    case 39: // right
      turnWheelRight(innerCircleLeft);
      x++;
      if(x>drawBoard.width)
        x=drawBoard.width-1;
      ctx.lineTo(x,y);
      break;
    case 37: //left
      turnWheelLeft(innerCircleLeft);
      x--;
      if(x<1)
        x=1;
      ctx.lineTo(x,y);
      break;
    case 40: //down
      turnWheelRight(innerCircleRight);
      y++;
      if(y>drawBoard.height)
        y=drawBoard.height-1;
      ctx.lineTo(x,y);
      break;
    case 38: //up
      turnWheelLeft(innerCircleRight);
      y--;
      if(y<1)
        y=1;
      ctx.lineTo(x,y);
      break;
  }
  ctx.stroke();
}

function turnWheelLeft(wheel){
  wheel.angle-=5;
  wheel.style.transform = "rotate("+wheel.angle+"deg)";
}
function turnWheelRight(wheel){
  wheel.angle+=5;
  wheel.style.transform = "rotate("+wheel.angle+"deg)";
}


