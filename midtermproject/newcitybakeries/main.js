var objectArray = [];

function addToArray() {
    var customer = { fullname, address, postalcode, phone, email };
    customer.fullname = document.getElementById("fullname").value;
    customer.address = document.getElementById("address").value;
    customer.postalcode = document.getElementById("postalcode").value;
    customer.phone = document.getElementById("phone").value;
    customer.email = document.getElementById("email").value;
    objectArray.push(customer);
}
function displayList() {
    var customerList = "";
    var displayRadiobuttons = "";

    for (var i = 0; i < objectArray.length; i++) {
        var customer = { fullname, address, postalcode, phone, email };
        customer = objectArray[i];
        customerList = "Full Name: " + customer.fullname + "<br>" +
            "Address: " + customer.address + "<br>" +
            "Postal Code: " + customer.postalcode + "<br>" +
            "Telephone Number: " + customer.phone + "<br>" +
            "Email Contact: " + customer.email + "<br>";
        displayRadiobuttons += "<input type = radio name = listitem ";
        displayRadiobuttons += " value=" + i + " ";
        displayRadiobuttons += " onchange=deleteItem(this.value)>";
        displayRadiobuttons += customerList + "<br>";
    }
    document.getElementById("showlist").innerHTML = displayRadiobuttons;
}

function deleteItem(i) {
    objectArray.splice(i, 1);
    displayList();
}



function confirm() {
  var cakeshape = document.getElementById("cakeSpec");
  cakeshape.style.display = "inline";
}

var type = "";

function sheetDim() {
  var sheet = document.getElementById("sheetdim");
  sheet.style.display = "inline";
  document.getElementById("rounddim").style.display = "none";
  document.getElementById("toppings").style.display = "inline";
  type = "Sheet Cake";
}

function roundDim() {
  var round = document.getElementById("rounddim");
  round.style.display = "inline";
  document.getElementById("sheetdim").style.display = "none";
  document.getElementById("toppings").style.display = "inline";
  type = "Round Cake";
}

function test() {
  var ele = document.getElementsByName("sheetlayer");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      var layers = ele[i].value;
    }
  }

  var topping = 0;
  var top = document.getElementsByName("topping");
  for (i = 0; i < top.length; i++) {
    if (top[i].checked) {
      topping = topping + parseInt(top[i].value);
    }
  }

  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var radius = document.getElementById("radius").value;
  var area = length * width;
  var area2 = radius * radius * 3.14;

  var layerRate = 1;
  if (layers == 2) {
    layerRate = 1.5;
  }
  if (layers == 3) {
    layerRate = 2.0;
  }

  var cakeMessage = "";
  var cakeCost = 0;
  if (type == "Round Cake") {
    cakeMessage = "Round Cake " + radius + " cm with " + layers + " layers: ";
    cakeCost = (15 + (area2 - 706.5) * 0.02) * layerRate;
  } else {
    cakeMessage =
      "Sheet Cake " + length + " cm x " + width + " cm " + layers + " layers: ";
    cakeCost = (18 + (area - 900) * 0.02) * layerRate;
  }

  var cheese = document.getElementById("cheese");
  var fruitnut = document.getElementById("fruitnut");
  var jam = document.getElementById("jam");

  var cheeseYES = document.getElementById("cheeseYES");
  var fruitnutYES = document.getElementById("fruitnutYES");
  var jamYES = document.getElementById("jamYES");

  if (cheese.checked == true) {
    cheeseYES.style.display = "inline";
  } else {
    cheeseYES.style.display = "none";
  }
  if (fruitnut.checked == true) {
    fruitnutYES.style.display = "inline";
  } else {
    fruitnutYES.style.display = "none";
  }
  if (jam.checked == true) {
    jamYES.style.display = "inline";
  } else {
    jamYES.style.display = "none";
  }

  displayList();
  var grandtotal = Number(cakeCost) + Number(topping);
  document.getElementById("result").innerHTML =
    cakeMessage + "$" + cakeCost.toFixed(2);
  document.getElementById("grandtotal").innerHTML = "Total: " + "&emsp;&emsp;&emsp;&emsp;&emsp;$" + grandtotal;
}
