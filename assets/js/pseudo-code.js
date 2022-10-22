// this is a fresh attempt 
// things to note: 
// Password special characters are: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
// Password numeric characters are: 0123456789
// Password lowercase characters are: abcdefghijklmnopqrstuvwxyz
// Password uppercase characters are: ABCDEFGHIJKLMNOPQRSTUVWXYZ
// variable possibleCharacters holds: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
// I'm going to create a function askUser() that asks the user for the password length and character types
// I'm going to complete a function generatePassword() that generates the password based on the user's input
// I'm going to use function writePassword() that writes the password to the #password box
// I might create a function that checks the user's input for errors
// I might create a function that copies the password to the clipboard
// I might display the password in a confirmation box
// I might create a function that displays the password in a modal that can be copied to the clipboard and then closes the modal
// I might allow the user to edit the password in the modal
// I might allow the user to save the password in the modal
// I might allow the user to generate a new password without refreshing the page
// I will allow the user to quit the program
// I might use a for loop to generate the password based on the user's input
// I might use a while loop to generate the password based on the user's input
// ------------------------------------------------------------
// Psuedo code:
// ------------------------------------------------------------
// function askUser() {
//   create a variable passwordLength and prompt user for password length it must be between 8 and 128 characters
//   If user wants to quit the program, return
//   if user enters a number less than 8 or greater than 128 then ask again
//   create a global boolean password isLowerCase and ask user if they want lowercase characters
//   create a global boolean password isUpperCase and ask user if they want uppercase characters
//   create a global boolean password isNumeric and ask user if they want numeric characters
//   create a global boolean password isSpecial and ask user if they want special characters
//   if user wants to quit the program, return
//   if user does not select at least one character type then ask again
// }
// function generatePassword() {
//   create a variable called possibleCharacters to hold all possible characters
//   create an empty variable called chosenCharacters to hold the characters the user wants
//   create a variable called upperCase to hold the uppercase alphabet it will be created using the slice() method on possibleCharacters
//   create a variable called lowerCase to hold the lowercase alphabet it will be created using the slice() method on possibleCharacters
//   create a variable called numeric to hold the numeric characters it will be created using the slice() method on possibleCharacters
//   create a variable called special to hold the special characters it will be created using the slice() method on possibleCharacters
//   create a variable called chosenCharacters to hold the characters the user wants to use
//   if user wants all character types then chosenCharacters = possibleCharacters
//   if user wants lowercase characters then chosenCharacters = chosenCharacters.concat("", lowerCase)
//   if user wants uppercase characters then chosenCharacters = chosenCharacters.concat("", upperCase)
//   if user wants numeric characters then chosenCharacters = chosenCharacters.concat("", numeric)
//   if user wants special characters then chosenCharacters = chosenCharacters.concat("", special)
//   create a  global variable called passwordy to hold the password
//   create a for loop that loops passwordLength times and each time it loops it will add a random character from chosenCharacters to passwordy
//   return passwordy
// }
// function writePassword() is already written
// function copyPassword() { 
//   create a variable called copyText to hold the password
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /* For mobile devices */
//   document.execCommand("copy");
//   alert("Copied the text: " + copyText.value);
// }
// ------------------------------------------------------------
// Code:
// ------------------------------------------------------------
// Assignment Code
var generateBtn = document.querySelector("#generate");

// ------------------------------------------------------------
function askUser() {
    console.log("askUser() was called");
var passwordLength = prompt("How many characters would you like your password to be? It must be between 8 and 128 characters.");
while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters would you like your password to be? It must be between 8 and 128 characters.");
}
var isLowerCase = confirm("Would you like to include lowercase characters?");
var isUpperCase = confirm("Would you like to include uppercase characters?");
var isNumeric = confirm("Would you like to include numeric characters?");
var isSpecial = confirm("Would you like to include special characters?");
while (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
    isLowerCase = confirm("Would you like to include lowercase characters?");
    isUpperCase = confirm("Would you like to include uppercase characters?");
    isNumeric = confirm("Would you like to include numeric characters?");
    isSpecial = confirm("Would you like to include special characters?");
} 
console.log("askUser() is returning");
console.log(passwordLength, isLowerCase, isUpperCase, isNumeric, isSpecial);
return [passwordLength, isLowerCase, isUpperCase, isNumeric, isSpecial];
}

// }
function generatePassword(choicyChoice) {
var passwordLength = choicyChoice[0];
var isLowerCase = choicyChoice[1];
var isUpperCase = choicyChoice[2];
var isNumeric = choicyChoice[3];
var isSpecial = choicyChoice[4];
    console.log("generatePassword() was called");
var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var chosenCharacters = "";
var upperCaseChoice = possibleCharacters.slice(0, 26);
var lowerCaseChoice = possibleCharacters.slice(26, 52);
var numericChoice = possibleCharacters.slice(52, 62);
var specialChoice = possibleCharacters.slice(62, 94);
var chosenCharacters = "";
if (isLowerCase && isUpperCase && isNumeric && isSpecial) {
    chosenCharacters = possibleCharacters;
    console.log("Ok this should be all possible characters. chosenCharacters = " + chosenCharacters);
}else {
if (isLowerCase) {
    chosenCharacters = chosenCharacters.concat("", lowerCaseChoice);
    console.log("This should be adding lowercase characters chosenCharacters = " + chosenCharacters);
}
if (isUpperCase) {
    chosenCharacters = chosenCharacters.concat("", upperCaseChoice);
    console.log("This should be adding uppercase characters. chosenCharacters = " + chosenCharacters);
}
if (isNumeric) {
    chosenCharacters = chosenCharacters.concat("", numericChoice);
    console.log("This should be adding chosenCharacters = " + chosenCharacters);
}
if (isSpecial) {
    chosenCharacters = chosenCharacters.concat("", specialChoice);
    console.log("This should be adding chosenCharacters = " + chosenCharacters);
}
}
console.log("chosenCharacters = " + chosenCharacters);
var passwordy = "";
for (var i = 0; i < passwordLength; i++) {
    passwordy = passwordy + chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
console.log("generatePassword() is returning");
console.log(passwordy);
return passwordy;
}
// ------------------------------------------------------------
function writePassword() {
    console.log("writePassword() was called");
    var password = generatePassword(askUser());
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
