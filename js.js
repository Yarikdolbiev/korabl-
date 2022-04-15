var squarePosition_x = 10;
var squarePosition_y = 0;
var context;
var timer;

var speed=1;

var drawingCanvas = document.getElementById('ship');
if (drawingCanvas && drawingCanvas.getContext) {
  context = drawingCanvas.getContext('2d');
  drawFrame();
}


function drawFrame(speed) {
  context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  // Рисуем парус 
  context.beginPath();
  context.fillStyle = "#fc0";
  context.moveTo(squarePosition_x + 20, 70);
  context.lineTo(squarePosition_x + 60, 20);
  context.lineTo(squarePosition_x + 60, 70);
  context.fill();
  // Рисуем палубу
  context.beginPath();
  context.fillStyle = "#ccf";
  context.moveTo(squarePosition_x + 0, 70);
  context.lineTo(squarePosition_x + 30, 100);
  context.lineTo(squarePosition_x + 70, 100);
  context.lineTo(squarePosition_x + 100, 70);
  context.fill();
  // Рисуем мачту 
  context.beginPath();
  context.fillStyle = "#a60";
  context.fillRect(squarePosition_x + 60, 5, 5, 65);
  // Рисуем флаг 
  context.beginPath();
  context.fillStyle = "#e49";
  context.fillRect(squarePosition_x + 40, 5, 20, 10);
  // Пишем название
  context.fillStyle = '#00f';
  context.font = 'italic 14px sans-serif';
  context.textBaseline = 'top';
  context.fillText('123', squarePosition_x + 20, 75);
  squarePosition_x += 1;
  
}


function drawFrame1(speed) {
  context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  // Рисуем парус 
  context.beginPath();
  context.fillStyle = "#fc0";
  context.moveTo(squarePosition_x + 20, 70);
  context.lineTo(squarePosition_x + 60, 20);
  context.lineTo(squarePosition_x + 60, 70);
  context.fill();
  // Рисуем палубу
  context.beginPath();
  context.fillStyle = "#ccf";
  context.moveTo(squarePosition_x + 0, 70);
  context.lineTo(squarePosition_x + 30, 100);
  context.lineTo(squarePosition_x + 70, 100);
  context.lineTo(squarePosition_x + 100, 70);
  context.fill();
  // Рисуем мачту 
  context.beginPath();
  context.fillStyle = "#a60";
  context.fillRect(squarePosition_x + 60, 5, 5, 65);
  // Рисуем флаг 
  context.beginPath();
  context.fillStyle = "#e49";
  context.fillRect(squarePosition_x + 40, 5, 20, 10);
  // Пишем название
  context.fillStyle = '#00f';
  context.font = 'italic 14px sans-serif';
  context.textBaseline = 'top';
  context.fillText('123', squarePosition_x + 20, 75);
  squarePosition_x -= 1;
  
}


function stop() {
  clearInterval(timer);
}


function start() {
stop();
timer = setInterval(drawFrame, 20, speed);
}


function reverse(){
stop();
timer = setInterval(drawFrame1, 20, speed);
}



