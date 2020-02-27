/* lab6.js - stylesheet for index.html */


function convertImperialGallon(val) {
    //converts gallon to litre
    var gal = parseFloat(0);
    gal = val * 4.54;
    //display in metric number field
    document.getElementById("litre").value = gal.toFixed(2);
}

function convertMetricLitre(val) {
    //converts litre to gallon
    var litre = parseFloat(0);
    litre = val / 4.54;
    //display in imperial number field
    document.getElementById("gallon").value = litre.toFixed(2);
}

function convertImperialFeet(val) {
    //converts feet to meter
    var m = parseFloat(0);
    m = val / 3.2808;
    //display in metric number field
    document.getElementById("metre").value = m.toFixed(2);
}

function convertMetricMetre(val) {
    //converts meter to feet
    var feet = parseFloat(0);
    feet = val * 3.2808;
    // display in imperial number field
    document.getElementById("feet").value = feet.toFixed(2);

}

function convertImperialFeet2(val) {
    //converts square feet to m
    var m2 = parseFloat(0);
    m2 = val / 10.7639;
    //display in metric number field
    document.getElementById("metre2").value = m2.toFixed(2);
}

function convertMetricMetre2(val) {
    //converts square meter to feet
    var feet2 = parseFloat(0);
    feet2 = val * 10.7639;
    // display in feet number field
    document.getElementById("feet2").value = feet2.toFixed(2);

}

function convertImperialPound(val) {
    //converts pound to kilo
    var pound = parseFloat(0);
    pound = val / 2.205;
    //display in metric number field
    document.getElementById("kilogram").value = pound.toFixed(2);
}

function convertImperialKilogram(val) {
    //converts kilo to pound
    var kilo = parseFloat(0);
    kilo = val * 2.205;
    //display in imperial number field
    document.getElementById("pound").value = kilo.toFixed(2);
}