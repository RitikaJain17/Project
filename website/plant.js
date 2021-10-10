$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
});

function validateName() {
  var Name = document.getElementById("name").value;
  var re1 = /^[a-zA-z\s\'\-]{3,15}$/;
  if (re1.test(Name)) {
    document.getElementById("namePrompt").style.color = "Green";
    document.getElementById("namePrompt").innerHTML = "<strong>VALID NAME</strong>";
    return true;
  } else {
    document.getElementById("namePrompt").style.color = "Red";
    document.getElementById("namePrompt").innerHTML =
      "<strong>enter 3-15 character</strong>";
    return false;
  }
}

function validateEmail() {
    var Name = document.getElementById("email").value;
    var re2 = /\S+@\S+/;
    if (re2.test(Name)) {
      document.getElementById("emailPrompt").style.color = "Green";
      document.getElementById("emailPrompt").innerHTML = "<strong>VALID Email</strong>";
      return true;
    } else {
      document.getElementById("emailPrompt").style.color = "Red";
      document.getElementById("emailPrompt").innerHTML =
        "<strong>check it again</strong>";
      return false;
    }
}
  
