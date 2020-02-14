/* lab6.js - stylesheet for index.html */


function convertImperialGallon(val) {
    //converts gallon to litre
    var gal = parseFloat(0);
    gal = val * 4.54;
    //display in metric field
    document.getElementById("litre").value = gal.toFixed(2);
}

function convertMetricLitre(val) {
    //converts litre to gallon
    var litre = parseFloat(0);
    litre = val / 4.54;
    //display in imperial field
    document.getElementById("gallon").value = litre.toFixed(2);
}

function convertImperialFeet(val) {
    //converts feet to m
    var m = parseFloat(0);
    m = val /3.2808;
    //display in metric number field
    document.getElementById("metre").value = m.toFixed(2);
}

function convertMetricMetre(val) {
    //converts m to feet
    var feet = parseFloat(0);
    feet = val * 3.2808;
    document.getElementById("feet").value = feet.toFixed(2);

}

function convertImperialFeet2(val) {
    //converts feet to m
    var m2 = parseFloat(0);
    m2 = val /10.7639;
    //display in metric number field
    document.getElementById("metre2").value = m2.toFixed(2);
}

function convertMetricMetre2(val) {
    //converts m to feet
    var feet2 = parseFloat(0);
    feet2 = val * 10.7639;
    document.getElementById("feet2").value = feet2.toFixed(2);

}