var xhr = new XMLHttpRequest();
var r;
window.onload = loadDatabase;

function loadDatabase() {
    document.getElementById("lastN").addEventListener("keypress", function () {
        searchLastName(this.value);
    }, false);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            r = JSON.parse(xhr.responseText);
        }
    }
    xhr.open("GET", "rentalclients.json", true);
    xhr.send();
}

function searchLastName(last_name) {
    document.getElementById("valForm").innerHTML = "Last Name" + "<br>";

    var output = "<tr><th>Last Name</th><th>First Name</th></tr>";
    var searchlastN;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        searchlastN = obj.last_name;
        if (searchlastN.startsWith(last_name)) {
            output += "<tr><td>"
            output += obj.last_name;
            output += "</td><td>"
            output += obj.first_name;
            output += "</td><td>"
            output += "<input type=radio id=list name=list value= " + i + " onchange=evalForm() >";
            output += "</td></tr>"
            output += "<br>";
        }
    }
    document.getElementById("resultVal").innerHTML = output;
}

function evalForm() {
    document.getElementById("form").disabled = false;

    search = document.querySelector("input[id=list]:checked").value;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (search == i) {
            document.getElementById("lastNF").value = obj.last_name;
            document.getElementById("firstNF").value = obj.first_name;
            document.getElementById("addressF").value = obj.address;
            document.getElementById("statePF").value = obj.state_prov;
            document.getElementById("emailF").value = obj.email;
            document.getElementById("phoneF").value = obj.phone;
        }
    }
}

function calc() {
    var quantity = parseFloat(document.getElementById("daysRent").value);
    var typeOfCar;
    var roofRack;
    var gps;
    var seat;

    if (document.querySelector('input[name=type]:checked')) {
        typeOfCar = parseFloat(document.querySelector('input[name=type]:checked').value);
        var totalType = typeOfCar * quantity;
    } else {
        var totalType = 0;
    }

    if (document.querySelector('input[name=rRack]:checked')) {
        roofRack = parseFloat(document.querySelector('input[name=rRack]:checked').value);
        var totalRoof = roofRack * quantity;
    } else {
        var totalRoof = 0;
    }

    if (document.querySelector('input[name=gps]:checked')) {
        gps = parseFloat(document.querySelector('input[name=gps]:checked').value);
        var totalGPS = gps;
    } else {
        var totalGPS = 0;
    }

    if (document.querySelector('input[name=cSeat]:checked')) {
        seat = parseFloat(document.querySelector('input[name=cSeat]:checked').value);
        var totalSeat = seat;
    } else {
        var totalSeat = 0;
    }

    var total = (totalType + totalRoof + totalGPS + totalSeat);

    var lName = document.getElementById("lastNF").value;
    var fName = document.getElementById("firstNF").value;
    var address = document.getElementById("addressF").value;
    var stateP = document.getElementById("statePF").value;
    var email = document.getElementById("emailF").value;
    var phone = document.getElementById("phoneF").value;
    var fullname = fName + " " + lName; 

    var alert = ("Customer Name:" + fullname + "\n" + 
    "Address" + address + "\n" + 
    "State Prov:" + stateP + "\n" + 
    "Email Address:" + email + "\n" +
    "Phone Number:" + phone + "\n" + 
    "Total Cost: $" + total);

    alert(alert);
}