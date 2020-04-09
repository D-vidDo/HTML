function placeOrder() {
  var objectArray = [];

  var customer = { fullname, address, phone };
  customer.fullname = document.getElementById("fullname").value;
  customer.address = document.getElementById("address").value;
  customer.phone = document.getElementById("phone").value;

  var cheeseQuantity = document.getElementById("cheeseNum").value;
  var meatQuantity = document.getElementById("meatNum").value;
  var vegQuantity = document.getElementById("vegNum").value;
  // cheese variables
  var cheeseSizeString;
  var cheeseString;
  var cheesePrice = 0;
  var cheeseTopPrice = 0;
  var cheeseTotal = 0;
  var cheeseTopString = "";
  // meat variables
  var meatSizeString;
  var meatString;
  var meatPrice = 0;
  var meatTopPrice = 0;
  var meatTotal = 0;
  var meatTopString = "";
  // veggie variables
  var vegSizeString;
  var vegString;
  var vegPrice = 0;
  var vegTopPrice = 0;
  var vegTotal = 0;
  var vegTopString = "";
  // result variable
  var pizzaFinalString = "";
  var sandwichFinalString = "";
  var drinkFinalString = "";
  var ultimate = "";
  // price variable
  var pizzaPrice = 0;
  var sandwichPrice = 0;
  var drinkPrice = 0;
  var ultimatePrice = 0;

  // cheese selector
  if (cheeseQuantity > 0) {
    var ele = document.getElementsByName("cheeseSize");
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        if (ele[i].value == "8.50") {
          cheeseSizeString = " Small ";
        } else if (ele[i].value == "11.50") {
          cheeseSizeString = " Medium ";
        } else if (ele[i].value == "14.00") {
          cheeseSizeString = " Large ";
        } else if (ele[i].value == "16.50") {
          cheeseSizeString = " Extra Large ";
        }
        cheesePrice = ele[i].value * cheeseQuantity;
      }
    }
    var input = document.getElementsByName("cheeseToppings");
    for (i = 0; i < input.length; i++) {
      if (input[i].checked) {
        cheeseTopString += ", " + input[i].value;
        cheeseTopPrice += 1.75;
      }
    }

    cheeseTotal = cheesePrice + cheeseTopPrice;
    cheeseString =
      cheeseQuantity +
      cheeseSizeString +
      "Super Cheesy Pizza" +
      cheeseTopString +
      " $" +
      cheeseTotal.toFixed(2) +
      "<br/>";
    pizzaFinalString += cheeseString;
    pizzaPrice += cheeseTotal;
  }
  // meat selector
  if (meatQuantity > 0) {
    var ele = document.getElementsByName("meatSize");
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        if (ele[i].value == "8.50") {
          meatSizeString = " Small ";
        } else if (ele[i].value == "11.50") {
          meatSizeString = " Medium ";
        } else if (ele[i].value == "14.00") {
          meatSizeString = " Large ";
        } else if (ele[i].value == "16.50") {
          meatSizeString = " Extra Large ";
        }
        meatPrice = ele[i].value * meatQuantity;
      }
    }
    var input = document.getElementsByName("meatToppings");
    for (i = 0; i < input.length; i++) {
      if (input[i].checked) {
        meatTopString += ", " + input[i].value;
        meatTopPrice += 1.75;
      }
    }
    meatTotal = meatPrice + meatTopPrice;
    meatString =
      meatQuantity +
      meatSizeString +
      "Extra Meaty Pizza" +
      meatTopString +
      " $" +
      meatTotal.toFixed(2) +
      "<br/>";
    pizzaFinalString += meatString;
    pizzaPrice += meatTotal;
  }
  // veggie selector
  if (vegQuantity > 0) {
    var ele = document.getElementsByName("vegSize");
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        if (ele[i].value == "8.50") {
          vegSizeString = " Small ";
        } else if (ele[i].value == "11.50") {
          vegSizeString = " Medium ";
        } else if (ele[i].value == "14.00") {
          vegSizeString = " Large ";
        } else if (ele[i].value == "16.50") {
          vegSizeString = " Extra Large ";
        }
        vegPrice = ele[i].value * vegQuantity;
      }
    }
    var input = document.getElementsByName("vegToppings");
    for (i = 0; i < input.length; i++) {
      if (input[i].checked) {
        vegTopString += ", " + input[i].value;
        vegTopPrice += 1.75;
      }
    }
    vegTotal = vegPrice + vegTopPrice;
    vegString =
      vegQuantity +
      vegSizeString +
      "Really Veggy Pizza" +
      vegTopString +
      " $" +
      vegTotal.toFixed(2) +
      "<br/>";
    pizzaFinalString += vegString;
    pizzaPrice += vegTotal;
  }

  if (document.getElementById("Garden").value > 0) {
    var gardenPrice = 7.5 * document.getElementById("Garden").value;
    var gardenString = " All Garden Vegetarian $";
    var gardenFinalString =
      document.getElementById("Garden").value +
      gardenString +
      gardenPrice.toFixed(2) +
      "<br/>";
    sandwichFinalString += gardenFinalString;
    sandwichPrice += gardenPrice;
  }
  if (document.getElementById("Beef").value > 0) {
    var beefPrice = 8.5 * document.getElementById("Beef").value;
    var beefString = " Big Beef on a Bun $";
    var beefFinalString =
      document.getElementById("Beef").value +
      beefString +
      beefPrice.toFixed(2) +
      "<br/>";
    sandwichFinalString += beefFinalString;
    sandwichPrice += beefPrice;
  }
  if (document.getElementById("Grill").value > 0) {
    var grillPrice = 9.5 * document.getElementById("Grill").value;
    var grillString = " Mixed Grill $";
    var grillFinalString =
      document.getElementById("Grill").value +
      grillString +
      grillPrice.toFixed(2) +
      "<br/>";
    sandwichFinalString += grillFinalString;
    sandwichPrice += grillPrice;
  }
  if (document.getElementById("Pork").value > 0) {
    var porkPrice = 9.5 * document.getElementById("Pork").value;
    var porkString = " Grilled Pork $";
    var porkFinalString =
      document.getElementById("Pork").value +
      porkString +
      porkPrice.toFixed(2) +
      "<br/>";
    sandwichFinalString += porkFinalString;
    sandwichPrice += porkPrice;
  }

  var colaSizeString;
  var orangeSizeString;
  if (document.getElementById("colaNum").value > 0) {
    var ele = document.getElementsByName("colaSize");
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        if (ele[i].value == "1.25") {
          colaSizeString = " Small Cola $";
        } else if (ele[i].value == "1.75") {
          colaSizeString = " Medium Cola $";
        } else if (ele[i].value == "2.00") {
          colaSizeString = " Large Cola $";
        }
        var colaPrice = ele[i].value * document.getElementById("colaNum").value;
      }
    }
    drinkFinalString +=
      document.getElementById("colaNum").value +
      colaSizeString +
      colaPrice.toFixed(2) +
      "<br/>";
    drinkPrice += colaPrice;
  }
  if (document.getElementById("orangeNum").value > 0) {
    var ele = document.getElementsByName("orangeSize");
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        if (ele[i].value == "1.25") {
          orangeSizeString = " Small Orange $";
        } else if (ele[i].value == "1.75") {
          orangeSizeString = " Medium Orange $";
        } else if (ele[i].value == "2.00") {
          orangeSizeString = " Large Orange $";
        }
        var orangePrice =
          ele[i].value * document.getElementById("orangeNum").value;
      }
    }
    drinkFinalString +=
      document.getElementById("orangeNum").value +
      orangeSizeString +
      orangePrice.toFixed(2) +
      "<br/>";
    drinkPrice += orangePrice;
  }
  if (document.getElementById("lemonNum").value > 0) {
    var ele = document.getElementsByName("lemonSize");
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        if (ele[i].value == "1.25") {
          lemonSizeString = " Small Lemon $";
        } else if (ele[i].value == "1.75") {
          lemonSizeString = " Medium Lemon $";
        } else if (ele[i].value == "2.00") {
          lemonSizeString = " Large Lemon $";
        }
        var lemonPrice =
          ele[i].value * document.getElementById("lemonNum").value;
      }
    }
    drinkFinalString +=
      document.getElementById("lemonNum").value +
      lemonSizeString +
      lemonPrice.toFixed(2) +
      "<br/>";
    drinkPrice += lemonPrice;
  }
  if (document.getElementById("rootbeerNum").value > 0) {
    var ele = document.getElementsByName("rootbeerSize");
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        if (ele[i].value == "1.25") {
          rootbeerSizeString = " Small Root Beer $";
        } else if (ele[i].value == "1.75") {
          rootbeerSizeString = " Medium Root Beer $";
        } else if (ele[i].value == "2.00") {
          rootbeerSizeString = " Large Root Beer $";
        }
        var rootbeerPrice =
          ele[i].value * document.getElementById("rootbeerNum").value;
      }
    }
    drinkFinalString +=
      document.getElementById("rootbeerNum").value +
      rootbeerSizeString +
      rootbeerPrice.toFixed(2) +
      "<br/>";
    drinkPrice += rootbeerPrice;
  }
  
  ultimatePrice = pizzaPrice + sandwichPrice + drinkPrice;

  var customer_details =
    customer.fullname +
    "<br>" +
    customer.address +
    "<br>" +
    customer.phone +
    "<br><br>" +
    "Your Order: <br><br>" +
    "Pizza: <br>" +
    "<table>" +
    pizzaFinalString +
    "</table>" +
    "<br><br>" +
    "Sandwiches: <br>" +
    "<table>" +
    sandwichFinalString +
    "</table>" +
    "<br><br>" +
    "Drinks: <br>" +
    "<table>" +
    drinkFinalString +
    "</table>" +
    "<table><tr><td>Order Total: " +
    "</td><td>$" +
    ultimatePrice.toFixed(2) +
    "</td></tr>";
  document.getElementById("order").innerHTML = customer_details;
  alert("Your order has been placed!");
}