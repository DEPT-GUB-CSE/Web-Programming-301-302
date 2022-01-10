function myfunction1() {
  let inputText = document.getElementById("mytext").value;
  alert(inputText);
}
function myfunction365() {
  alert("Clicked");
}
document.getElementById("khonik").innerHTML = "html element change";

function myfunction2() {
  var x = document.getElementsByTagName("p");

  for (var i = 0; i < x.length; i++) {
    x[i].style.color = "blue";
  }
}

function myFunction3() {
  var x = document.getElementsByTagName("LI");
  document.getElementById("demo").innerHTML = x[2].innerHTML;
}
