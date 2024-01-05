var r = 0,
y = 0,
g = 0;
var p = setInterval(timer, 200);
function timer() {
if (r < 30) {
  r++;
  document.getElementById("red").style.background = "red";
  document.getElementById("red").style.boxShadow = "0px 0px 50px red";
  document.getElementById("t").innerHTML = r;
  document.getElementById("yellow").style.background = "white";
  document.getElementById("yellow").style.boxShadow =
    "0px 0px 50px gray";
  document.getElementById("green").style.background = "white";
  document.getElementById("green").style.boxShadow =
    "0px 0px 50px gray";
} else if (y < 30) {
  y++;
  document.getElementById("red").style.background = "white";
  document.getElementById("red").style.boxShadow = "0px 0px 50px gray";
  document.getElementById("yellow").style.background = "gold";
  document.getElementById("yellow").style.boxShadow =
    "0px 0px 50px gold";

  document.getElementById("t").innerHTML = y;
  document.getElementById("green").style.background = "white";
  document.getElementById("green").style.boxShadow =
    "0px 0px 50px gray";
} else if (g < 30) {
  g++;
  document.getElementById("red").style.background = "white";
  document.getElementById("red").style.boxShadow = "0px 0px 50px gray";

  document.getElementById("yellow").style.background = "white";
  document.getElementById("yellow").style.boxShadow =
    "0px 0px 50px gray";

  document.getElementById("t").innerHTML = g;
  document.getElementById("green").style.background = "green";
  document.getElementById("green").style.boxShadow =
    "0px 0px 50px green";
} else {
  (r = 0), (y = 0), (g = 0);
}
}