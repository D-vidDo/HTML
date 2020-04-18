var xhr = new XMLHttpRequest();
var xmldoc; //reference to parsed XML file
window.onload=loadXML;

function loadXML() {

	xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      xmldoc = xhr.responseXML;
      displayQuiz();
    }
  };
  xhr.open("GET", "FinalQuiz.xml", true);
  xhr.send();
}

function displayQuiz()
{
    let questions = "";
    const x = xmldoc.getElementsByTagName("question");
	for(var i=0; i < x.length; i++)
	{
        let questionNum = "Question ";
        let questionTitle = "";
        let questionChoices = "";
        questionNum += x[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue;
        questionNum += "<br>";
        questionTitle = x[i].getElementsByTagName("qtitle")[0].childNodes[0].nodeValue;
        questionChoices = "<br>";
        questionChoices += "<input type = radio id=A" + i + " " + " name=" + i + " " + " value=a required ><label>A) </label>";
        questionChoices += x[i].getElementsByTagName("a")[0].childNodes[0].nodeValue;
        questionChoices += "<br>";
        questionChoices += "<input type = radio id=B" + i + " " + " name=" + i + " " + " value=b required ><label>B) </label>";
        questionChoices += x[i].getElementsByTagName("b")[0].childNodes[0].nodeValue;
        questionChoices += "<br>";
        questionChoices += "<input type = radio id=C" + i + " " + " name=" + i + " " + " value=c required ><label>C) </label>";
        questionChoices += x[i].getElementsByTagName("c")[0].childNodes[0].nodeValue;
        questionChoices += "<br>";
        questionChoices += "<input type = radio id=D" + i + " " + " name=" + i + " " + " value=d requirred ><label>D) </label>";
        questionChoices += x[i].getElementsByTagName("d")[0].childNodes[0].nodeValue;
        questionChoices += "<br>";

        questions += questionNum + questionTitle + questionChoices + "<br>";
        
    }
    document.getElementById("question").innerHTML = questions;

}

function checkQuiz()
{
    let question1Choice = document.querySelector('input[name="0"]:checked').value;
    let question2Choice = document.querySelector('input[name="1"]:checked').value;
    let question3Choice = document.querySelector('input[name="2"]:checked').value;
    let question4Choice = document.querySelector('input[name="3"]:checked').value;
    let question5Choice = document.querySelector('input[name="4"]:checked').value;
    let correct = 0;
    let questionTogether = question1Choice + " " + question2Choice + " " + question3Choice + " " + question4Choice + " " + question5Choice;
    let res = questionTogether.split(" ");
    const y = xmldoc.getElementsByTagName("rightanswers")[0].childNodes[0].nodeValue;
    let ysplit = y.split(",");

    for(var i = 0; i < res.length; i++)
    {
        if(res[i] === ysplit[i])
        {
            correct++;
        }
    }
    document.getElementById("gradedQuiz").innerHTML = "You got " + correct + " out of " + res.length;
}

window.onerror = function(msg, url, linenumber) 
{
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}