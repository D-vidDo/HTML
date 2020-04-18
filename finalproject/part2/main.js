var xhr = new XMLHttpRequest();
var xmldoc; //reference to parsed XML file
window.onload = loadXML;

function loadXML() {
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      xmldoc = xhr.responseXML;
      displayQuiz();
    }
  };
  xhr.open("GET", "FinalQuiz.xml", true);
  xhr.send();
}

function displayQuiz() {
  var questions = "";
  var x = xmldoc.getElementsByTagName("question");
  for (var i = 0; i < x.length; i++) {
    var questionNo = "Question ";
    var questionTitle = "";
    var questionSelection = "";
    questionNo += x[i].getElementsByTagName("qnumber")[0].childNodes[0]
      .nodeValue;
    questionNo += "<br>";
    questionTitle = x[i].getElementsByTagName("qtitle")[0].childNodes[0]
      .nodeValue;
    questionSelection = "<br>";
    questionSelection +=
      "<input type = radio id=A" +
      i +
      " " +
      " name=" +
      i +
      " " +
      " value=a required ><label>A) </label>";
    questionSelection += x[i].getElementsByTagName("a")[0].childNodes[0]
      .nodeValue;
    questionSelection += "<br>";
    questionSelection +=
      "<input type = radio id=B" +
      i +
      " " +
      " name=" +
      i +
      " " +
      " value=b required ><label>B) </label>";
    questionSelection += x[i].getElementsByTagName("b")[0].childNodes[0]
      .nodeValue;
    questionSelection += "<br>";
    questionSelection +=
      "<input type = radio id=C" +
      i +
      " " +
      " name=" +
      i +
      " " +
      " value=c required ><label>C) </label>";
    questionSelection += x[i].getElementsByTagName("c")[0].childNodes[0]
      .nodeValue;
    questionSelection += "<br>";
    questionSelection +=
      "<input type = radio id=D" +
      i +
      " " +
      " name=" +
      i +
      " " +
      " value=d requirred ><label>D) </label>";
    questionSelection += x[i].getElementsByTagName("d")[0].childNodes[0]
      .nodeValue;
    questionSelection += "<br>";

    questions += questionNo + questionTitle + questionSelection + "<br>";
  }
  document.getElementById("question").innerHTML = questions;
}
function checkQuiz() {
  var q1Choice = document.querySelector('input[name="0"]:checked').value;
  var q2Choice = document.querySelector('input[name="1"]:checked').value;
  var q3Choice = document.querySelector('input[name="2"]:checked').value;
  var q4Choice = document.querySelector('input[name="3"]:checked').value;
  var q5Choice = document.querySelector('input[name="4"]:checked').value;
  var correct = 0;
  var questionTogether =
    q1Choice +
    " " +
    q2Choice +
    " " +
    q3Choice +
    " " +
    q4Choice +
    " " +
    q5Choice;
  var res = questionTogether.split(" ");
  const y = xmldoc.getElementsByTagName("rightanswers")[0].childNodes[0]
    .nodeValue;
  var ysplit = y.split(",");

  for (var i = 0; i < res.length; i++) {
    if (res[i] === ysplit[i]) {
      correct++;
    }
  }
  document.getElementById("gradedQuiz").innerHTML =
    "You got " + correct + " out of " + res.length;
}
