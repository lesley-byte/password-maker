alert("🧨Remember to set to public before you submit!!!!!🧨");

// Assignment Code
const generateBtn = document.querySelector("#generate");
// This function generates password and whatever is returned is
// written by the writePassword function.
function generatePassword() {
  console.log("This is the generatePassword function.");

  let userChoiceLength = prompt(
    "How many characters would you like your password to be? (8-128)"
  );
  while (userChoiceLength < 8 || userChoiceLength > 128) {
    alert("Please choose a number between 8 and 128.");
    userChoiceLength = prompt(
      "How many characters would you like your password to be? (8-128)"
    );
  }
  let noChoice = true;
  while (noChoice) {
    userChoiceSpecial = prompt(
      "Would you like to include special characters?(y/n)"
    );
    userChoiceNumeric = prompt(
      "Would you like to include numeric characters?(y/n)"
    );
    userChoiceLower = prompt(
      "Would you like to include lowercase characters?(y/n)"
    );
    if (
      userChoiceSpecial === "y" ||
      userChoiceNumeric === "Y" ||
      userChoiceLower === "y"
    ) {
      noChoice = false;
    } else {
      alert("Please choose at least one character type.");
    }
  }
  let msgy = "";
  // create a variable called chosenCharacters to hold the uppercase alphabet
  let possibleCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let chosenCharacters = possibleCharacters.slice(0, 26);
  console.log(chosenCharacters);
  if (
    userChoiceSpecial === "y" &&
    userChoiceNumeric === "y" &&
    userChoiceLower === "y"
  ) {
    chosenCharacters = possibleCharacters;
    msgy = "You chose all character types.";
  } else if (userChoiceSpecial === "y" && userChoiceNumeric === "y") {
    chosenCharacters = chosenCharacters.concat(
      "",
      possibleCharacters.slice(52, 62)
    );
    msgy = "You chose special and numeric characters.";
  } else if (userChoiceSpecial === "y" && userChoiceLower === "y") {
    chosenCharacters = chosenCharacters.concat(
      "",
      possibleCharacters.slice(26, 52)
    );
    msgy = "You chose special and lowercase characters.";
  } else if (userChoiceNumeric === "y" && userChoiceLower === "y") {
    chosenCharacters = chosenCharacters.concat(
      "",
      possibleCharacters.slice(52, 62)
    );
    msgy = "You chose numeric and lowercase characters.";
  } else if (userChoiceSpecial === "y") {
    chosenCharacters = chosenCharacters.concat(
      "",
      possibleCharacters.slice(26, 36)
    );
    msgy = "You chose special characters.";
  } else if (userChoiceNumeric === "y") {
    chosenCharacters = chosenCharacters.concat(
      "",
      possibleCharacters.slice(36, 62)
    );
    msgy = "You chose numeric characters.";
  } else if (userChoiceLower === "y") {
    chosenCharacters = chosenCharacters.concat(
      "",
      possibleCharacters.slice(52, 62)
    );
    msgy = "You chose lowercase characters.";
  }
  return msgy + chosenCharacters;
}
// This function writes password to the #password box.
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  console.log("This is the writePassword function");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
