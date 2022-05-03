document.getElementById("switchButton").onclick = function () {
  document.getElementById("myBody").classList.toggle("dark");

  var lightDarks = document.getElementsByClassName("light-dark");

  for (var i = 0; i < lightDarks.length; i++) {
    lightDarks.item(i).classList.toggle("dark");
  }
};
