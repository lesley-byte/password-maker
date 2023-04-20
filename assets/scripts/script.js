const generateBtn = document.querySelector("#generate");
const copyPasswordBtn = document.querySelector("#copyPasswordBtn");

async function getUserInput() {
  const passwordLength = await showModalPrompt(
    "Enter the password length (between 8 and 128 characters):"
  );

  if (passwordLength < 8 || passwordLength > 128) {
    const wantToExit = await showModalConfirm(
      "Please enter a number between 8 and 128. Do you want to exit the program?"
    );

    if (wantToExit) {
      return "quit";
    }

    return getUserInput();
  }

  const isLowerCase = await showModalConfirm("Include lowercase characters?");
  const isUpperCase = await showModalConfirm("Include uppercase characters?");
  const isNumeric = await showModalConfirm("Include numeric characters?");
  const isSpecial = await showModalConfirm("Include special characters?");

  if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
    const wantToExit = await showModalConfirm(
      "Select at least one character type. Do you want to exit the program?"
    );

    if (wantToExit) {
      return "quit";
    }

    return getUserInput();
  }

  return { passwordLength, isLowerCase, isUpperCase, isNumeric, isSpecial };
}

// ... Rest of the code remains the same ...

function generatePassword(options) {
  if (options === "quit") {
    return "quit";
  }

  const { passwordLength, isLowerCase, isUpperCase, isNumeric, isSpecial } =
    options;

  const chars = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    numeric: "0123456789",
    special: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\",
  };

  let chosenChars = "";

  if (isLowerCase) chosenChars += chars.lower;
  if (isUpperCase) chosenChars += chars.upper;
  if (isNumeric) chosenChars += chars.numeric;
  if (isSpecial) chosenChars += chars.special;

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += chosenChars.charAt(
      Math.floor(Math.random() * chosenChars.length)
    );
  }

  return password;
}

async function displayPassword() {
  const userInput = await getUserInput();
  const password = generatePassword(userInput);

  if (password === "quit") {
    const message = "You quit the program. Click the button to try again!";
    document.querySelector("#password").value = "You quit the program.";
    document.querySelector("#isGenerated").value = message;
    showModal(`***BeeBoop!*** ${message}`);
  } else {
    document.querySelector(
      "#password"
    ).value = `Your Secure Password is: ${password}`;
    document.querySelector("#isGenerated").value =
      "Please copy your password to a safe place.";
  }
}

generateBtn.addEventListener("click", displayPassword);

copyPasswordBtn.addEventListener("click", () => {
  const passwordText = document.getElementById("password").value;
  const password = passwordText.slice(25);

  navigator.clipboard
    .writeText(password)
    .then(() => {
      showModal(`${password} copied to clipboard`);
    })
    .catch((err) => {
      showModal(`Error in copying text: ${err}`);
    });
});

function showModal(message) {
  const modal = document.getElementById("modal");
  const span = document.getElementsByClassName("close")[0];
  const modalMessage = document.getElementById("modal-message");

  modalMessage.innerHTML = message;
  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

async function showModalConfirm(message) {
  return new Promise((resolve) => {
    const modal = document.getElementById("confirm-modal");
    const span = document.getElementsByClassName("close")[0];
    const modalMessage = document.getElementById("confirm-message");
    const confirmBtn = document.getElementById("confirm-btn");
    const cancelBtn = document.getElementById("cancel-btn");

    modalMessage.innerHTML = message;
    modal.style.display = "block";

    confirmBtn.onclick = function () {
      modal.style.display = "none";
      resolve(true);
    };

    cancelBtn.onclick = function () {
      modal.style.display = "none";
      resolve(false);
    };

    span.onclick = function () {
      modal.style.display = "none";
      resolve(false);
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        resolve(false);
      }
    };
  });
}

async function showModalPrompt(message) {
  return new Promise((resolve) => {
    const modal = document.getElementById("prompt-modal");
    const span = document.getElementsByClassName("close")[1];
    const modalMessage = document.getElementById("prompt-message");
    const inputField = document.getElementById("input-field");
    const submitBtn = document.getElementById("submit-btn");
    const cancelBtn = document.getElementById("prompt-cancel-btn");

    modalMessage.innerHTML = message;
    inputField.value = "";
    modal.style.display = "block";

    submitBtn.onclick = function () {
      modal.style.display = "none";
      resolve(inputField.value);
    };

    cancelBtn.onclick = function () {
      modal.style.display = "none";
      resolve(null);
    };

    span.onclick = function () {
      modal.style.display = "none";
      resolve(null);
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        resolve(null);
      }
    };
  });
}
