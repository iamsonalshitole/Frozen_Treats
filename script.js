function valid_signin() {
  var user_name = document.getElementById("username");
  var pass_word = document.getElementById("password");

  if(user_name.value == "" || pass_word.value.trim() == ""){
    alert("Blank values are invalid");
    return false;
  }
  else{
    alert("Signed in successfully !");
    true;
  }
}



function valid() {
  //validating name
  var name = document.getElementById("name").value;
  if (name == "") {
    alert("Blank name is invalid");
  }

  for (i = 0; i < name.length; i++) {
    ch = name.charAt(i);
    if (
      !(ch >= "a" && ch <= "z") &&
      !(ch >= "A" && ch <= "Z") &&
      !(ch == " ")
    ) {
      alert("Invalid Name");
    }
  }

  //validating email
  var mail = document.getElementById("email").value;
  var at_index = mail.indexOf("@");
  var dot_index = mail.lastIndexOf(".");
  if (mail == "") {
    alert("Blank email is invalid");
  }
  else if (
    at_index <= 0 ||
    at_index + 1 >= dot_index ||
    dot_index + 1 >= mail.length - 1
  ) {
    alert("Invalid Email");
  }

  //validating password
  var pwd = document.getElementById("password").value;
  if (pwd == "") {
    alert("Blank password is invalid");
  }
  else if (pwd.length < 8 || pwd.length > 15) {
    alert("Password length must be 8 to 15");
  }

  //validating number
  var mob = document.getElementById("phone").value;
  if (mob == "") {
    alert("Blank contact number is invalid");
  }
  else if (isNaN(mob) || mob.length != 10) {
    alert("Invalid Contact Number");
  }

  //validating age
  var age = document.getElementById("age").value;
  if (age == "") {
    alert("Blank age is invalid");
  }
  else if (age <= 16) {
    alert("Age must be at least 16");
  }

  return true;
  
}
