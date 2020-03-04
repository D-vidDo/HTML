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
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "USD") {
            input = val * 1.12;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "Pound") {
            input = val * 0.87;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "Yen") {
            input = val * 119.85;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "CAD") {
            input = val * 1.49;
            document.getElementById("result").value = input.toFixed(2);
        }
    }
    // USD CONVERSION
    if (value == "USD") {
        if (value2 == "Euro") {
            input = val * 0.90;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "USD") {
            input = val * 1;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "Pound") {
            input = val * 0.78;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "Yen") {
            input = val * 107.39;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "CAD") {
            input = val * 1.34;
            document.getElementById("result").value = input.toFixed(2);
        }
    } 
    // POUND CONVERSION
    if (value == "Pound") {
        if (value2 == "Euro") {
            input = val * 1.15;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "USD") {
            input = val * 1.28;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "Pound") {
            input = val * 1;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "Yen") {
            input = val * 137.64;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "CAD") {
            input = val * 1.71;
            document.getElementById("result").value = input.toFixed(2);
        }
    }
    // YEN CONVERSION
    if (value == "Yen") {
        if (value2 == "Euro") {
            input = val * 0.0083;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "USD") {
            input = val * 0.0093;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "Pound") {
            input = val * 0.0073;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "Yen") {
            input = val * 1;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "CAD") {
            input = val * 0.012;
            document.getElementById("result").value = input.toFixed(2);
        }
    }
    // CAD CONVERSION
    if (value == "CAD") {
        if (value2 == "Euro") {
            input = val * 0.67;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "USD") {
            input = val * 0.75;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "Pound") {
            input = val * 0.58;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "Yen") {
            input = val * 80.41;
            document.getElementById("result").value = input.toFixed(2);
        }
        else if (value2 == "CAD") {
            input = val * 1;
            document.getElementById("result").value = input.toFixed(2);
        }
    }


}