
function test() {
    var ele = document.getElementsByName('pizzasize'); 
      
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
        document.getElementById("result").innerHTML
                = "PizzaSize: "+ele[i].value;

                var pizzaSize = ele[i].value;
    }


    var pizzaNum = document.getElementsByName("pizzaNum").value;

    var quan;
    quan = parseFloat(pizzaNum);
    var size;
    size = parseFloat(pizzaSize);

    var total = size * quan;

    document.getElementById("total").innerHTML = total;
} 