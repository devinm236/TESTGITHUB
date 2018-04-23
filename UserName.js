//Modified code from W3Schools <!-- This is modified from W3Schools.com https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_submit -->
function UserName () {
  var playerName = document.getElementById("playerName").value;
  document.getElementById("userName").innerHTML = "You submitted your user name " + playerName;
}
