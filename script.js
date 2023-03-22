var generateBtn = document.getElementById("generate");
var passwordInput = document.getElementById("password");

//Click event so that when generate button is clicked, user is prompted
generateBtn.addEventListener("click", function () {
  var passwordLength = parseInt(
    prompt("Enter the desired length of the password (8-128):"),
    10
  );

  //Confirmation for including uppercase, lowercase, numbers and special characters
  if (passwordLength >= 8 && passwordLength <= 128) {
    let password = "";
    var includeUppercase = confirm("Include uppercase characters?");
    var includeLowercase = confirm("Include lowercase characters?");
    var includeNumbers = confirm("Include numbers?");
    var includeSpecial = confirm("Include special characters?");

    //The range of characters to choose from
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specialChars = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";

    var charSet = "";
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numbers;
    if (includeSpecial) charSet += specialChars;

    //generating the random password password
    for (var i = 0; i < passwordLength; i++) {
      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    //If length chosen is not between 8 and 128
    passwordInput.value = password;
  } else {
    alert("Password length must be between 8 and 128 characters.");
  }
});
