// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  const numbers = prompt("Please choose a password length from 8 to 128 characters.");
  if (!numbers) {
    return;
  } else {
    let numLength = 8;
    let passList = [];
    const typeChar = prompt("Please choose character types to include, as follows.",
      "Lowercase, Uppercase, Numeric, Special Characters");
    let typeSet = typeChar.split(", ");
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "1234567890";
    const specialChar = "!@#$%^&*()_+=-[]';,.?:|";
    if ((!isNaN(numbers)) &&(numbers >= 8) && (numbers <= 128)) {
      numLength = numbers;
    }
    for (let item = 0; item < typeSet.length; item++) {
      if (typeSet[item] === "Lowercase") {
        passList.push(lowercase);
      } else if (typeSet[item] === "Uppercase") {
        passList.push(uppercase);
      } else if (typeSet[item] === "Numeric") {
        passList.push(numeric);
      } else if (typeSet[item] === "Special Characters") {
        passList.push(specialChar);
      }
    }
    const listFinal = passList.join('');
    const pass = Array(parseInt(numLength)).fill(listFinal).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return pass;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
