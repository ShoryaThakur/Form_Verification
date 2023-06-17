function validation() {
  var a = document.getElementById("text").value;
  console.log(a);
  var b = document.getElementById("password").value;
  console.log(b);
  var c = document.getElementById("cpassword").value;
  console.log(c);
  var d = document.getElementById("email").value;
  console.log(d);
  var e = document.getElementById("number").value;
  console.log(e);
  var f = document.getElementById("address").value;
  console.log(f);
  var g = document.getElementById("City").value;
  console.log(g);
  var h = document.getElementById("State").value;
  console.log(h);
  var i = document.getElementById("pin").value;
  console.log(i);
  var j = document.getElementById("GenderM").checked;
  console.log(j);
  var k = document.getElementById("GenderF").checked;
  console.log(k);

  if (a == "") {
    document.getElementById("extra").innerHTML = "*This field is compulsory!";
    return false;
  }
  if (b == "") {
    document.getElementById("extra2").innerHTML = " *This field is compulsory!";
    return false;
  }
  if (c == "") {
    document.getElementById("extra3").innerHTML = " *This field is compulsory!";
    return false;
  }
  if (b != c) {
    document.getElementById("extra3").innerHTML =
      " *The above Password is not same.";
    return false;
  } else if (b == c) {
    document.getElementById("extra3").innerHTML = "";
  }
  if (d == "") {
    document.getElementById("extra4").innerHTML = " *This field is compulsory!";
    return false;
  }
  if (!d.includes("@")) {
    document.getElementById("extra4").innerHTML = "*Please use @";
    return false;
  }
  if (e == "") {
    document.getElementById("extra5").innerHTML = "*This field is compulsory!";
    return false;
  }
  if (e.length != 10) {
    document.getElementById("extra5").innerHTML =
      "*Phone number should be of 10 digits.";
    return false;
  }
  if (f == "") {
    document.getElementById("extra6").innerHTML = "*This field is compulsory!";
    return false;
  }
  if (g == "") {
    document.getElementById("extra7").innerHTML = "*This field is compulsory!";
    return false;
  }
  if (h == "") {
    document.getElementById("extra8").innerHTML = "*This field is compulsory!";
    return false;
  }
  if (i == "") {
    document.getElementById("extra9").innerHTML = "*This field is compulsory!";
    return false;
  }
  if (i.length != 6) {
    document.getElementById("extra9").innerHTML = "*ZipCode should of 6 Digits";
    return false;
  }
  if (j == "" && k == "") {
    document.getElementById("extra10").innerHTML = "*This field is compulsory!";
    return false;
  } else {
    document.write("<h1 align= center>Form has been Submitted.</h1>");
  }
}
function refresh() {
  location.reload();
}
