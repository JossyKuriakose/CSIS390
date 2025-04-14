document.getElementById("expenseForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function
    requestMenu();
});

function validateDate(date) {
    if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(2018|2019|2020|2021|2022|2023|2024|2025)$/.test(date)) {
        return "Please type in this format MM/DD/YYYY";
    }
    
    const inputDate = new Date(date);
    const today = new Date();

    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (inputDate >= today) {
        return "Date must be in the past.";
    }
    return ""; // No errors => Return empty string.
}

function validateAmount(amount) {
    const val = parseFloat(amount.value);
    if (isNaN(val) || val <= 0 || val >= 49999) {
        return "Please make sure the amount is greater than 0 but less then $50000."
    }
    return ""; // No errors => Return empty string.
}

function validateForm() {
    const dateInput = document.getElementById("date");
    const amountInput = document.getElementById("amount");
    const dateError = document.getElementById("dateError");
    const amountError = document.getElementById("amountError");

    // Clear previous error messages
    dateError.textContent = "";
    amountError.textContent = "";

    // Run validation checks
    const dateValidationMessage = validateDate(dateInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (dateValidationMessage) {
        dateError.textContent = dateValidationMessage;
        isValid = false;
    }

    const amountValidationMessage = validateAmount(amountInput);

    // Display errors if any
    if (amountValidationMessage) {
        amountError.textContent = amountValidationMessage;
        isValid = false;
    }

    // If both are valid, submit the form
    if (isValid) {
        console.log("Form is valid! Submitting...");
       
    }
}

function requestMenu() {
    let API_URL = "https://webhook-test.com/3e35cc2dc6a63cd943950ae8f81081d0";
    let data = new FormData();
    data.append("key1", "value1"); // repeat for as many params as necessary
    data.append("key2", "value2");
  
    fetch(API_URL, {method: "POST", body: data})
      .then(statusCheck)
      .then(resp => resp.text()) // or res.text() based on response
      .catch(handleError);
  }
  
async function statusCheck(res) {
      if(!res.ok){
        throw new Error(await res.text());
      }
      return res;
}