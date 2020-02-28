var objectArray = [];

function addToArray() {
    var customer = { fullname, address, postalcode, phone, email };
    customer.fullname = document.getElementById("fullname").value;
    customer.address = document.getElementById("address").value;
    customer.postalcode = document.getElementById("postalcode").value;
    customer.phone = document.getElementById("phone").value;
    customer.email = document.getElementById("email").value;
    objectArray.push(customer);
    displayList();

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