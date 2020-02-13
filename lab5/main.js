
function test() {

    // PIZZA CALCULATIONS
    // pizza quantity
    var pizzaQuantity = document.getElementById("pizzaNum").value;

    // select pizza flavour and save it in a variable
    var pizza = document.getElementsByName("pizzatype");
    for (i = 0; i < pizza.length; i++) {
        if (pizza[i].checked) {
            var pizzaName = pizza[i].value;
        }
    }

    // select pizza size and multiply by quantity
    var ele = document.getElementsByName('pizzasize');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            var pizzaPrice = (ele[i].value * pizzaQuantity);
        }
    }

    // select toppings
    var toppingsTotal = parseFloat(0);
    var input = document.getElementsByName("toppings");
    for (i = 0; i < input.length; i++) {
        if (input[i].checked) {
            toppingsTotal += parseFloat(input[i].value);
            document.getElementById("toppingsresult").innerHTML = "Toppings Total: $" + toppingsTotal;
        }
    }
    /*
    PIZZA VARIABLES:
        pizzaQuantity = AMOUNT OF PIZZA
        pizzaName = NAME OF PIZZA FLAVOUR SELECTED
        pizzaPrice = SIZE PRICE * QUANTITY
        toppingsTotal = SUM OF ALL TOPPINGS
    */

    // SANDWICH CALCULATIONS
    // sandwich quantity
    var sandNum = document.getElementById("sandNum").value;

    // select sandwich flavour and multiply by quantity
    var sand = document.getElementsByName('flavours');
    for (i = 0; i < sand.length; i++) {
        if (sand[i].checked) {
            document.getElementById("sandwichresult").innerHTML = "Sandwich Price: $" + (sand[i].value * sandNum);
            var sandwich = sand[i].value * sandNum;
        }
    }
    /*
    SANDWICH VARIABLES:
        sandNum = AMOUNT OF SANDWICHES
        sandwich = PRICE * QUANTITY
    */

    // DRINK CALCULATIONS
    // drink quantity
    var drinkNum = document.getElementById("drinkNum").value;

    // select drink and multiply by quantity
    var drnk = document.getElementsByName('drinksize');
    for (i = 0; i < drnk.length; i++) {
        if (drnk[i].checked) {
            document.getElementById("drinkresult").innerHTML = "Drinks Price: $" + (drnk[i].value * drinkNum);
            var drink = drnk[i].value * drinkNum;
        }
    }
     // sum of everything
     document.getElementById("finalresult").innerHTML = "Grand Total: $" + (pizzaPrice + toppingsTotal + drink + sandwich);
} 
