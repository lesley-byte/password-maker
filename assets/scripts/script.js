// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyPasswordBtn = document.querySelector("#copyPasswordBtn");
// ------------------------------------------------------------
function askUser() {
  //this function asks the user for input
  console.log("askUser() was called");
  var passwordLength = prompt(
    //this asks the user for the length of the password
    "How many characters would you like your password to be? It must be between 8 and 128 characters."
  );
  while (passwordLength < 8 || passwordLength > 128) {
    //this is a loop that will keep asking the user for a valid input
    var wantToExit = confirm(
      "You must enter a number between 8 and 128. Would you like to quit the program?"
    );
    if (wantToExit) {
      //this is the exit option
      return "quit";
    }
    passwordLength = prompt(
      "How many characters would you like your password to be? It must be between 8 and 128 characters."
    );
  }
  var isLowerCase = confirm(
    //this asks the user if they want lowercase characters
    "Would you like to include lowercase characters?(Ok=Yes, Cancel=No)"
  );
  var isUpperCase = confirm(
    //this asks the user if they want uppercase characters
    "Would you like to include uppercase characters?(Ok=Yes, Cancel=No)"
  );
  var isNumeric = confirm(
    //this asks the user if they want numeric characters
    "Would you like to include numeric characters?(Ok=Yes, Cancel=No)"
  );
  var isSpecial = confirm(
    //this asks the user if they want special characters
    "Would you like to include special characters?(Ok=Yes, Cancel=No)"
  );
  while (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
    //this is a loop that will keep asking the user for a valid input
    var wantToExit = confirm(
      "You must select at least one character type. Would you like to quit the program?(Ok=Yes, Cancel=No)"
    );
    if (wantToExit) {
      //this is the exit option
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
  return [passwordLength, isLowerCase, isUpperCase, isNumeric, isSpecial]; //this returns the user input to the generatePassword() function
}
// ------------------------------------------------------------
function generatePassword(choicyChoice) {
  //this function generates the password
  if (choicyChoice === "quit") {
    return "quit"; //this is the exit option
  }
  var passwordLength = choicyChoice[0]; //this is the length of the password
  var isLowerCase = choicyChoice[1]; //this is the lowercase option
  var isUpperCase = choicyChoice[2]; //this is the uppercase option
  var isNumeric = choicyChoice[3]; //this is the numeric option
  var isSpecial = choicyChoice[4]; //this is the special option
  console.log("generatePassword() was called");
  //declaring and testing ascii values for nuance characters
  var bubb1 = String.fromCharCode(34); //this is the double quote character
  console.log(bubb1); // "
  var bubb2 = String.fromCharCode(92); //this is the backslash character
  console.log(bubb2); // "
  var possibleCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~" +
    bubb1 +
    bubb2; //this is the string of all possible characters
  var chosenCharacters = ""; //this is the string of characters that the user wants
  var upperCaseChoice = possibleCharacters.slice(0, 26); //this is the string of uppercase characters
  var lowerCaseChoice = possibleCharacters.slice(26, 52); //this is the string of lowercase characters
  var numericChoice = possibleCharacters.slice(52, 62); //this is the string of numeric characters
  var specialChoice = possibleCharacters.slice(62, 96); //this is the string of special characters
  if (isLowerCase && isUpperCase && isNumeric && isSpecial) {
    //this is the option for all character types
    chosenCharacters = possibleCharacters;
    console.log(
      "Ok this should be all possible characters. chosenCharacters = " +
        chosenCharacters
    );
  } else {
    if (isLowerCase) {
      //this is the option for lowercase characters
      chosenCharacters = chosenCharacters.concat("", lowerCaseChoice);
      console.log(
        "This should be adding lowercase characters chosenCharacters = " +
          chosenCharacters
      );
    }
    if (isUpperCase) {
      //this is the option for uppercase characters
      chosenCharacters = chosenCharacters.concat("", upperCaseChoice);
      console.log(
        "This should be adding uppercase characters. chosenCharacters = " +
          chosenCharacters
      );
    }
    if (isNumeric) {
      //this is the option for numeric characters
      chosenCharacters = chosenCharacters.concat("", numericChoice);
      console.log(
        "This should be adding chosenCharacters = " + chosenCharacters
      );
    }
    if (isSpecial) {
      //this is the option for special characters
      chosenCharacters = chosenCharacters.concat("", specialChoice);
      console.log(
        "This should be adding chosenCharacters = " + chosenCharacters
      );
    }
  }
  console.log("chosenCharacters = " + chosenCharacters);
  var passwordy = ""; //this is the string that will be returned to the writePassword() function
  for (var i = 0; i < passwordLength; i++) {
    //this is the loop that generates the password
    passwordy =
      passwordy +
      chosenCharacters.charAt(
        Math.floor(Math.random() * chosenCharacters.length)
      );
  }
  console.log("generatePassword() is returning");
  console.log(passwordy);
  return passwordy; //this returns the password to the writePassword() function
}
// ------------------------------------------------------------
function writePassword() {
  //this function writes the password to the page
  console.log("writePassword() was called");
  var password = "Your Secure Password is: " + generatePassword(askUser());
  if (password === "Your Secure Password is: quit") {
    //this is the exit option
    password = "You quit the program.";
    var advicey = "You quit the program. Click the button to try again."; //this is the advice that will be displayed
    var passwordText = document.querySelector("#password");
    var advisement = document.querySelector("#isGenerated");
    passwordText.value = password;
    advisement.value = advicey;
    alert(
      "***BeeBoop!*** You quit the program. Click the red button to try again!"
    ); //this is the alert that will be displayed if the user quits
    console.log("you quit the program");
  } else {
    var advicey = "Please copy your password to a safe place."; //this is the advice that will be displayed
    var passwordText = document.querySelector("#password");
    var advisement = document.querySelector("#isGenerated");
    passwordText.value = password;
    advisement.value = advicey;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //this is the event listener that calls the writePassword() function when the button is clicked

// function copyPassword() {
document.getElementById("copyPasswordBtn").onclick = //this is the event listener that calls the copyPassword() function when the button is clicked
  function () {
    let text = document.getElementById("password").value;
    var text2 = text.slice(25);
    console.log(text2);
    navigator.clipboard
      .writeText(text2) //this is the function that copies the password to the clipboard
      .then(() => {
        alert(text2 + " copied to clipboard"); //this is the alert that will be displayed if the user copies the password
      })
      .catch((err) => {
        alert("Error in copying text: ", err); //this is the alert that will be displayed if the user fails to copy the password
      });
  };
// }

// copyPasswordBtn.addEventListener("click", copyPassword);
