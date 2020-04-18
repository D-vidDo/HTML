var xhr = new XMLHttpRequest();
var r;
window.onload = loaddata;
function loaddata() {
  //event listener
  document.getElementById("lastname").addEventListener(
    "keyup",
    function () {
      searchLastName();
    },
    false
  );
  document.getElementById("emid").addEventListener(
    "keyup",
    function () {
      searchIDNumber();
    },
    false
  );
  document.getElementById("job").addEventListener(
    "keyup",
    function () {
      searchJobTitle();
    },
    false
  );

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("DATA LOADED");
      r = xhr.responseXML;
      searchLastName();
    }
  };
  xhr.open("GET", "dataset.xml", true);
  xhr.send();
}

function searchLastName() {
  var table =
    "<tr><th>Last Name</th><th>First Name</th><th>ID</th><th>Company</th><th>Job Title</th><th>Phone</th></tr>";

  var lastname = document.getElementById("lastname").value;

  var x = r.getElementsByTagName("employee");
  for (i = 0; i < x.length; i++) {
    searchname = x[i].getElementsByTagName("last_name")[0].childNodes[0]
      .nodeValue;
    if (searchname.startsWith(lastname)) {
      table +=
        "<tr><td>" +
        x[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
  }

  document.getElementById("result").innerHTML = table;
}

function searchIDNumber() {
  var table =
    "<tr><th>Last Name</th><th>First Name</th><th>ID</th><th>Company</th><th>Job Title</th><th>Phone</th></tr>";

  var emid = document.getElementById("emid").value;

  var x = r.getElementsByTagName("employee");
  for (i = 0; i < x.length; i++) {
    iD = x[i].getElementsByTagName("id")[0].childNodes[0]
      .nodeValue;
    if (iD.startsWith(emid)) {
      table +=
        "<tr><td>" +
        x[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
  }

  document.getElementById("result").innerHTML = table;
}

function searchJobTitle() {
  var table =
    "<tr><th>Last Name</th><th>First Name</th><th>ID</th><th>Company</th><th>Job Title</th><th>Phone</th></tr>";

  var job = document.getElementById("job").value;

  var x = r.getElementsByTagName("employee");
  for (i = 0; i < x.length; i++) {
    jobTitle = x[i].getElementsByTagName("job_title")[0].childNodes[0]
      .nodeValue;
    if (jobTitle.startsWith(job)) {
      table +=
        "<tr><td>" +
        x[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
  }

  document.getElementById("result").innerHTML = table;
}