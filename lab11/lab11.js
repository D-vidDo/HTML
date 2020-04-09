/* lab11.js - javascript for lab11.html */

/*jsonfilehandler.js*/
var xhr = new XMLHttpRequest();
var r;
window.onload = loadDatabase;
function loadDatabase() {
    //event listener
    document.getElementById("id").addEventListener("keypress", function () { searchIDNumber(this.value); }, false);
    document.getElementById("lastName").addEventListener("keypress", function () { searchLastName(this.value); }, false);
    document.getElementById("phone").addEventListener("keypress", function () { searchPhoneNumber(this.value); }, false);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            r = JSON.parse(xhr.responseText);
            //displayData(r);
        }
    };
    xhr.open("GET", "ClientData.json", true);
    xhr.send();
}


function searchIDNumber(id) {

    //var r=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "ID Number" + "<br>";
    //structure table
    var output = "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code</th><th>Phone</th><th>Type</th></tr>";
    var searchid;
    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        searchid = obj.id;
        if (searchid == id) {

            output += "<tr><td>"
            output += obj.id;
            output += "</td><td>"
            output += obj.firstName;
            output += "</td><td>"
            output += obj.lastName;
            output += "</td><td>"
            output += obj.address
            output += "</td><td>"
            output += obj.postalCode
            output += "</td><td>"
            output += obj.phone
            output += "</td><td>"
            output += obj.type
            output += "</td></tr>";
        }

    }
    document.getElementById("searchresults").innerHTML = output;


}

function searchLastName(lastName) {

    //var r=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Last Name" + "<br>";
    //structure table
    var output = "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code</th><th>Phone</th><th>Type</th></tr>";
    var searchname;
    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        searchname = obj.lastName;
        if (searchname.startsWith(lastName)) {

            output += "<tr><td>"
            output += obj.id;
            output += "</td><td>"
            output += obj.firstName;
            output += "</td><td>"
            output += obj.lastName;
            output += "</td><td>"
            output += obj.address
            output += "</td><td>"
            output += obj.postalCode
            output += "</td><td>"
            output += obj.phone
            output += "</td><td>"
            output += obj.type
            output += "</td></tr>";
        }

    }
    document.getElementById("searchresults").innerHTML = output;


}

function searchPhoneNumber(phone) {

    //var r=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Phone Number" + "<br>";
    //structure table
    var output = "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code</th><th>Phone</th><th>Type</th></tr>";
    var searchphone;
    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        searchphone = obj.phone;
        if (searchphone.startsWith(phone)) {

            output += "<tr><td>"
            output += obj.id;
            output += "</td><td>"
            output += obj.firstName;
            output += "</td><td>"
            output += obj.lastName;
            output += "</td><td>"
            output += obj.address
            output += "</td><td>"
            output += obj.postalCode
            output += "</td><td>"
            output += obj.phone
            output += "</td><td>"
            output += obj.type
            output += "</td></tr>";
        }

    }
    document.getElementById("searchresults").innerHTML = output;


}