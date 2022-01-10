let pageCounter = 1;
let ourRequest = new XMLHttpRequest();
let btn = document.getElementById("btn");
let animalContainar = document.getElementsByClassName("animalInfo");
ourRequest.open(
  "GET",
  "https://raw.githubusercontent.com/LearnWebCode/json-example/master/animals-" +
    "pageCounter + ".json
);
ourRequest.onload = function () {
  let ourData = json.parse(ourRequest.responseText);
  re;
};

function renderAnimal(data) {
  let readdata = "";
  for (var i = 0; i < data.length; i++) {}
}
