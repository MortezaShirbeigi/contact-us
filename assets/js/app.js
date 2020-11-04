// Global Variables

// variables for validate
const form = document.querySelector("#form");
const sendBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

// variables for animation
const messageIcon1 = document.querySelector("#message1");
const messageIcon2 = document.querySelector("#message2");
const messageIcon3 = document.querySelector("#message3");
const emailIcon = document.querySelector("#email-icon");
const doneIcon = document.querySelector("#plus-done");

// eventlisteners
eventlisteners();
function eventlisteners() {
  // for validate all input
  nameInput.addEventListener("keyup", validate);
  emailInput.addEventListener("keyup", validate);
  messageInput.addEventListener("keyup", validate);

  // for reset form
  resetBtn.addEventListener("click", resetFrom);

  // for animation on type
  form.addEventListener("keyup", animations);

  // for submit animation
  sendBtn.addEventListener("click", sendForm);
}

// Functions

// disable send btn if form not completed
function checkForSend() {
  let disabledBtn = document.querySelectorAll(".enable");
  if (disabledBtn.length === 3) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}

// validate email
function validate() {
  validateLength(this);
  if (this.type === "email") {
    if (this.value.includes("@")) {
      this.style.borderColor = "#33C32B"; // green
      this.classList.add("enable");
    } else {
      this.style.borderColor = "#C32B2B"; // red
      this.classList.remove("enable");
    }
  }
  checkForSend();
}

// validate value length
function validateLength(input) {
  if (input.value.length > 2) {
    input.style.borderColor = "#33C32B"; // green
    input.classList.add("enable");
  } else {
    input.style.borderColor = "#C32B2B"; // red
    input.classList.remove("enable");
  }
}

// reset button for reset form
function resetFrom(e) {
  e.preventDefault();
  resetStyle();
  sendBtn.disabled = true;
}

// reset all style to default
function resetStyle() {
  form.reset();
  nameInput.style.borderColor = "#eee";
  emailInput.style.borderColor = "#eee";
  messageInput.style.borderColor = "#eee";
  nameInput.classList.remove("enable");
  emailInput.classList.remove("enable");
  messageInput.classList.remove("enable");
  messageIcon1.classList.remove("show-message");
  messageIcon2.classList.remove("show-message");
  messageIcon3.classList.remove("show-message");
}

// animation for inputs
function animations(e) {
  if (e.target.classList.contains("name")) {
    if (e.target.value.length > 0) {
      messageIcon2.classList.add("show-message");
    } else {
      messageIcon2.classList.remove("show-message");
    }
  }
  if (e.target.classList.contains("email")) {
    if (e.target.value.length > 0) {
      messageIcon1.classList.add("show-message");
    } else {
      messageIcon1.classList.remove("show-message");
    }
  }
  if (e.target.classList.contains("message")) {
    if (e.target.value.length > 0) {
      messageIcon3.classList.add("show-message");
    } else {
      messageIcon3.classList.remove("show-message");
    }
  }
}

// send form animation and reset to default
function sendForm(e) {
  e.preventDefault();
  resetStyle();
  doneIcon.classList.add("plus-done");
  sendBtn.disabled = true;
  setTimeout(() => {
    doneIcon.classList.remove("plus-done");
    emailIcon.classList.add("email-icon-animation");
  }, 1500);
  setTimeout(() => {
    emailIcon.classList.remove("email-icon-animation");
  }, 6000);
}
