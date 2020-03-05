var value;
var value2;
var input;
function getComboA(selectObject) {
    value = selectObject.value;
    console.log(value);
}

function getComboB(selectObject) {
    value2 = selectObject.value;
    console.log(value2);
}

function convert(val) {
    input = parseFloat(0);
    // EURO CONVERSION
    if (value == "Euro") {
        if (value2 == "Euro") {
            input = val * 1;
            document.getElementById("result").value = input.toFixed(2) + " Euro (1:1)";
        }
        else if (value2 == "USD") {
            input = val * 1.12;
            document.getElementById("result").value = input.toFixed(2) + " USD (1:1.12)";
        }
        else if (value2 == "Pound") {
            input = val * 0.87;
            document.getElementById("result").value = input.toFixed(2) + " GBP (1:0.87)";
        }
        else if (value2 == "Yen") {
            input = val * 119.85;
            document.getElementById("result").value = input.toFixed(2) + " Yen (1:119.85)";
        }
        else if (value2 == "CAD") {
            input = val * 1.49;
            document.getElementById("result").value = input.toFixed(2) + " CAD (1:1.49)";
        }
    }
    // USD CONVERSION
    if (value == "USD") {
        if (value2 == "Euro") {
            input = val * 0.90;
            document.getElementById("result").value = input.toFixed(2) + " Euro (1:0.90)";
        }
        else if (value2 == "USD") {
            input = val * 1;
            document.getElementById("result").value = input.toFixed(2) + " USD (1:1)";
        }
        else if (value2 == "Pound") {
            input = val * 0.78;
            document.getElementById("result").value = input.toFixed(2) + " GBP (1:0.78)";
        }
        else if (value2 == "Yen") {
            input = val * 107.39;
            document.getElementById("result").value = input.toFixed(2) + " Yen (1:107.39)";
        }
        else if (value2 == "CAD") {
            input = val * 1.34;
            document.getElementById("result").value = input.toFixed(2) + " CAD (1:1.34)";
        }
    } 
    // POUND CONVERSION
    if (value == "Pound") {
        if (value2 == "Euro") {
            input = val * 1.15;
            document.getElementById("result").value = input.toFixed(2) + " Euro (1:1.15)";
        }
        else if (value2 == "USD") {
            input = val * 1.28;
            document.getElementById("result").value = input.toFixed(2) + " USD (1:1.28)";
        }
        else if (value2 == "Pound") {
            input = val * 1;
            document.getElementById("result").value = input.toFixed(2) + " GBP (1:1)";
        }
        else if (value2 == "Yen") {
            input = val * 137.64;
            document.getElementById("result").value = input.toFixed(2) + " Yen (1:137.64)";
        }
        else if (value2 == "CAD") {
            input = val * 1.71;
            document.getElementById("result").value = input.toFixed(2) + " CAD (1:1.71)";
        }
    }
    // YEN CONVERSION
    if (value == "Yen") {
        if (value2 == "Euro") {
            input = val * 0.0083;
            document.getElementById("result").value = input.toFixed(2) + " Euro (1:0.0083)";
        }
        else if (value2 == "USD") {
            input = val * 0.0093;
            document.getElementById("result").value = input.toFixed(2) + " USD (1:0.0093)";
        }
        else if (value2 == "Pound") {
            input = val * 0.0073;
            document.getElementById("result").value = input.toFixed(2) + " GBP (1:0.0073)";
        }
        else if (value2 == "Yen") {
            input = val * 1;
            document.getElementById("result").value = input.toFixed(2) + " Yen (1:1)";
        }
        else if (value2 == "CAD") {
            input = val * 0.012;
            document.getElementById("result").value = input.toFixed(2) + " CAD (1:0.012)";
        }
    }
    // CAD CONVERSION
    if (value == "CAD") {
        if (value2 == "Euro") {
            input = val * 0.67;
            document.getElementById("result").value = input.toFixed(2) + " Euro (1:0.67)";
        }
        else if (value2 == "USD") {
            input = val * 0.75;
            document.getElementById("result").value = input.toFixed(2) + " USD (1:0.75)";
        }
        else if (value2 == "Pound") {
            input = val * 0.58;
            document.getElementById("result").value = input.toFixed(2) + " GBP (1:0.58)";
        }
        else if (value2 == "Yen") {
            input = val * 80.41;
            document.getElementById("result").value = input.toFixed(2) + " Yen (1:80.41)";
        }
        else if (value2 == "CAD") {
            input = val * 1;
            document.getElementById("result").value = input.toFixed(2) + " CAD (1:1)";
        }
    }
}