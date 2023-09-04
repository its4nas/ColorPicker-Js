var ColorPicked = "lightcoral";

function change_color(currentsquare) {
  currentsquare.style.backgroundColor = ColorPicked;
}

function change_picked_color(color) {
  ColorPicked = color;
}

function Reset() {
  var ColorDivs = document.getElementsByClassName("Color_grid_item");
  ColorDivs.style.backgroundColor = "antiquewhite";
}
