var urlArray = [];

function addToArray() {
    var obj = document.getElementById("url").value;
    urlArray.push(obj);
    displayList();
}

function displayList() {
    var displayList = ""; 
    for (var i = 0; i < urlArray.length; i++) {
        displayList += "<a href='" + urlArray[i] + "' target='blank'>" + urlArray[i] + "</a>" + "<br>";
        document.getElementById("showlist").innerHTML = displayList;
    }
}
