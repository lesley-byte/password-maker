// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyPasswordBtn = document.querySelector("#copyPasswordBtn");
// ------------------------------------------------------------
function askUser() {
  console.log("askUser() was called");
  var passwordLength = prompt(
    "How many characters would you like your password to be? It must be between 8 and 128 characters."
  );
  while (passwordLength < 8 || passwordLength > 128) {
    var wantToExit = confirm(
      "You must enter a number between 8 and 128. Would you like to quit the program?"
    );
    if (wantToExit) {
      return "quit";
    }
    passwordLength = prompt(
      "How many characters would you like your password to be? It must be between 8 and 128 characters."
    );
  }
  var isLowerCase = confirm(
    "Would you like to include lowercase characters?(Ok=Yes, Cancel=No)"
  );
  var isUpperCase = confirm(
    "Would you like to include uppercase characters?(Ok=Yes, Cancel=No)"
  );
  var isNumeric = confirm(
    "Would you like to include numeric characters?(Ok=Yes, Cancel=No)"
  );
  var isSpecial = confirm(
    "Would you like to include special characters?(Ok=Yes, Cancel=No)"
  );
  while (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
    var wantToExit = confirm(
      "You must select at least one character type. Would you like to quit the program?(Ok=Yes, Cancel=No)"
    );
    if (wantToExit) {
      return "quit";
    }
    alert("You must select at least one character type.");
    isLowerCase = confirm(
      "Would you like to include lowercase characters?(Ok=Yes, Cancel=No)"
    );
    isUpperCase = confirm(
      "Would you like to include uppercase characters?(Ok=Yes, Cancel=No)"
    );
    isNumeric = confirm(
      "Would you like to include numeric characters?(Ok=Yes, Cancel=No)"
    );
    isSpecial = confirm(
      "Would you like to include special characters?(Ok=Yes, Cancel=No)"
    );
  }
  console.log("askUser() is returning");
  console.log(passwordLength, isLowerCase, isUpperCase, isNumeric, isSpecial);
  return [passwordLength, isLowerCase, isUpperCase, isNumeric, isSpecial];
}
// ------------------------------------------------------------
function generatePassword(choicyChoice) {
  if (choicyChoice === "quit") {
    return "quit";
  }
  var passwordLength = choicyChoice[0];
  var isLowerCase = choicyChoice[1];
  var isUpperCase = choicyChoice[2];
  var isNumeric = choicyChoice[3];
  var isSpecial = choicyChoice[4];
  console.log("generatePassword() was called");
  //declaring and testing ascii values for nuance characters
  var bubb1 = String.fromCharCode(34);
  console.log(bubb1); // "
  var bubb2 = String.fromCharCode(92);
  console.log(bubb2); // "
  var possibleCharacters =
    ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~" + bubb1 + bubb2);
  var chosenCharacters = "";
  var upperCaseChoice = possibleCharacters.slice(0, 26);
  var lowerCaseChoice = possibleCharacters.slice(26, 52);
  var numericChoice = possibleCharacters.slice(52, 62);
  var specialChoice = possibleCharacters.slice(62, 96);
  var chosenCharacters = "";
  if (isLowerCase && isUpperCase && isNumeric && isSpecial) {
    chosenCharacters = possibleCharacters;
    console.log(
      "Ok this should be all possible characters. chosenCharacters = " +
        chosenCharacters
    );
  } else {
    if (isLowerCase) {
      chosenCharacters = chosenCharacters.concat("", lowerCaseChoice);
      console.log(
        "This should be adding lowercase characters chosenCharacters = " +
          chosenCharacters
      );
    }
    if (isUpperCase) {
      chosenCharacters = chosenCharacters.concat("", upperCaseChoice);
      console.log(
        "This should be adding uppercase characters. chosenCharacters = " +
          chosenCharacters
      );
    }
    if (isNumeric) {
      chosenCharacters = chosenCharacters.concat("", numericChoice);
      console.log(
        "This should be adding chosenCharacters = " + chosenCharacters
      );
    }
    if (isSpecial) {
      chosenCharacters = chosenCharacters.concat("", specialChoice);
      console.log(
        "This should be adding chosenCharacters = " + chosenCharacters
      );
    }
  }
  console.log("chosenCharacters = " + chosenCharacters);
  var passwordy = "";
  for (var i = 0; i < passwordLength; i++) {
    passwordy =
      passwordy +
      chosenCharacters.charAt(
        Math.floor(Math.random() * chosenCharacters.length)
      );
  }
  console.log("generatePassword() is returning");
  console.log(passwordy);
  return passwordy;
}
// ------------------------------------------------------------
function writePassword() {
  console.log("writePassword() was called");
  var password = "Your Secure Password is: " + generatePassword(askUser());
  if (password === "Your Secure Password is: quit") {
    password = "You quit the program.";
    var advicey = "You quit the program. Click the button to try again.";
    var passwordText = document.querySelector("#password");
    var advisement = document.querySelector("#isGenerated");
    passwordText.value = password;
    advisement.value = advicey;
    alert("***BeeBoop!*** You quit the program. Click the red button to try again!");
    console.log("you quit the program");
  } else {
  var advicey = "Please copy your password to a safe place.";
  var passwordText = document.querySelector("#password");
  var advisement = document.querySelector("#isGenerated");
  passwordText.value = password;
  advisement.value = advicey;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function copyPassword() {
  document.getElementById("copyPasswordBtn")
  .onclick = function() {
    let text = document.getElementById("password").value;
    var text2 = text.slice(25);
    console.log(text2);
    navigator.clipboard.writeText(text2)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch(err => {
        alert('Error in copying text: ', err);
      });
  }
// }

// copyPasswordBtn.addEventListener("click", copyPassword);


