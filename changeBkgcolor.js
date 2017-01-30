// As a user, I can change the background color with a click of a button.\

function randomColor(){
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  var color = "rgb(" + r + "," + g + "," + b + ")";

  return color;
}

function changeMeColor(){
  var background = document.getElementById('body');
  background.style.background = randomColor();
}
