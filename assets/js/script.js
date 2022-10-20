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
  if (
    userChoiceSpecial === "y" &&
    userChoiceNumeric === "y" &&
    userChoiceLower === "y"
  ) {
    msgy = "You chose all character types.";
  } else if (userChoiceSpecial === "y" && userChoiceNumeric === "y") {
    msgy = "You chose special and numeric characters.";
  } else if (userChoiceSpecial === "y" && userChoiceLower === "y") {
    msgy = "You chose special and lowercase characters.";
  } else if (userChoiceNumeric === "y" && userChoiceLower === "y") {
    msgy = "You chose numeric and lowercase characters.";
  } else if (userChoiceSpecial === "y") {
    msgy = "You chose special characters.";
  } else if (userChoiceNumeric === "y") {
    msgy = "You chose numeric characters.";
  } else if (userChoiceLower === "y") {
    msgy = "You chose lowercase characters.";
  }
  return msgy;
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
