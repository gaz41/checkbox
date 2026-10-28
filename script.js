// Access checkbox input elements and status text elements from the DOM
let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let checkbox3 = document.getElementById("checkbox3");
let statusText1 = document.getElementById("status1");
let statusText2 = document.getElementById("status2");
let statusText3 = document.getElementById("status3");

// Initialize status messages for each checkbox
statusText1.innerHTML =
  'checkbox 1 checked <span class="defaultText">(default)</span>'; // initial message
statusText2.innerHTML = "checkbox 2"; // initial message
statusText3.innerHTML = "checkbox 3"; // initial message

// checkbox state variables
let checkboxObj = {
  checkbox1: true,
  checkbox2: false,
  checkbox3: false,
};

// Function to update the display of checkbox states
const displayState = () => {
  state.innerHTML = `
  <div>checkbox 1 : ${checkboxObj.checkbox1}</div>
  <div>checkbox 2 : ${checkboxObj.checkbox2}</div>
  <div>checkbox 3 : ${checkboxObj.checkbox3}</div>`;
};

// Display area for checkbox status
const display = document.getElementById("checkboxText");
const state = document.getElementById("checkboxState");
const reset = document.getElementById("resetBtn");

display.innerHTML = "Click on a checkbox"; // Initial message
displayState(); // Set initial state display

// Function to reset checkboxes to their default states
const resetCheckboxes = () => {
  // Reset checkbox states
  checkboxObj.checkbox1 = true;
  checkboxObj.checkbox2 = false;
  checkboxObj.checkbox3 = false;

  // Update checkbox elements in the DOM
  checkbox1.checked = checkboxObj.checkbox1;
  checkbox2.checked = checkboxObj.checkbox2;
  checkbox3.checked = checkboxObj.checkbox3;

  // Update status text for each checkbox
  statusText1.innerHTML =
    'checkbox 1 checked <span class="defaultText">(default)</span>';
  statusText2.innerHTML = "checkbox 2";
  statusText3.innerHTML = "checkbox 3";

  display.innerHTML = "Click on a checkbox"; // Reset display message
  displayState(); // Refresh the state display
};

// Event listener for reset button
reset.addEventListener("click", resetCheckboxes);

// Event listener for checkbox 1
checkbox1.addEventListener("change", function () {
  checkboxObj.checkbox1 = this.checked; // Update checkbox state
  statusText1.innerHTML = `checkbox 1 ${checkboxObj.checkbox1 ? "checked" : ""}`; // Update status text

  // Update display based on checkbox state
  display.innerHTML = `checkbox 1 ${checkboxObj.checkbox1 ? "checked" : "unchecked"}`;
  display.style.color = checkboxObj.checkbox1 ? `#000000` : `#606060`;
  display.style.textDecorationColor = checkboxObj.checkbox1
    ? `#000000`
    : `#606060`;
  displayState(); // Refresh the state display
});

// Event listener for checkbox 2
checkbox2.addEventListener("change", function () {
  checkboxObj.checkbox2 = this.checked; // Update checkbox state
  statusText2.innerHTML = `checkbox 2 ${checkboxObj.checkbox2 ? "checked" : ""}`; // Update status text

  // Update display based on checkbox state
  display.innerHTML = `checkbox 2 ${checkboxObj.checkbox2 ? "checked" : "unchecked"}`;
  display.style.color = checkboxObj.checkbox2 ? `#000000` : `#606060`;
  display.style.textDecorationColor = checkboxObj.checkbox2
    ? `#000000`
    : `#606060`;
  displayState(); // Refresh the state display
});

// Event listener for checkbox 3
checkbox3.addEventListener("change", function () {
  checkboxObj.checkbox3 = this.checked; // Update checkbox state
  statusText3.innerHTML = `checkbox 3 ${checkboxObj.checkbox3 ? "checked" : ""}`; // Update status text

  // Update display based on checkbox state
  display.innerHTML = `checkbox 3 ${checkboxObj.checkbox3 ? "checked" : "unchecked"}`;
  display.style.color = checkboxObj.checkbox3 ? `#000000` : `#606060`;
  display.style.textDecorationColor = checkboxObj.checkbox3
    ? `#000000`
    : `#606060`;
  displayState(); // Refresh the state display
});

// COPYRIGHT NOTICE
// Dynamically generate copyright information
const copyright = document.getElementById("copy");
copyright.innerHTML =
  "Copyright &copy; " + // Start of the copyright string
  new Date().getFullYear() + // Get the current year
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;
