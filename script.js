// Assignment Code
var generateBtn = document.querySelector("#generate");

//created the function generatePassword
function generatePassword() {
  // 1. Prompt the user for the password length between 8 - 128, lowercase and uppercase:

  // 2. Validate input:

  // 3. Generate the password:

  // 4. Display the password to the page:

  return "Password: ";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
