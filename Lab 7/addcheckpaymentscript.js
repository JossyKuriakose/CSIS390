document.getElementById("checkForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function
});

function validateName(name) {
    if (name.length < 5) {
        return "Check name should have a minimum length of 5.";
    }
    return ""; // No errors => Return empty string.
}

function validateDate(date) {
    if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(202[5-9]|20[3-9][0-9]|2[1-9][0-9]{2}|[3-9][0-9]{3})$/.test(date)) {
        return "Please type in this format MM/DD/YYYY";
    }

    const inputDate = new Date(date);
    const today = new Date();

    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (inputDate <= today) {
        return "Date must be in the future.";
    }
    return ""; // No errors => Return empty string.
}

function validateBank(bankName) {
    if (bankName.length < 5) {
        return "Bank name should have a minimum of 5 characters.";
    }
    return ""; // No errors => Return empty string.
}

function validateAccountNumber(number) {
    if (number.length !== 10) {
        return "Account Number should have 10 characters.";
    }
    return ""; // No errors => Return empty string.
}

function validateForm() {
    const nameInput = document.getElementById("name");
    const dateInput = document.getElementById("date");
    const bankInput = document.getElementById("bankName");
    const accountNumInput = document.getElementById("number");

    const nameError = document.getElementById("nameError");
    const dateError = document.getElementById("dateError");
    const bankError = document.getElementById("bankError");
    const accountError = document.getElementById("accountError");

    // Clear previous error messages
    nameError.textContent = "";
    dateError.textContent = "";
    bankError.textContent = "";
    accountError.textContent = "";

    // Run validation checks
    const nameValidationMessage = validateName(nameInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (nameValidationMessage) {
        nameError.textContent = nameValidationMessage;
        isValid = false;
    }

    const dateValidationMessage = validateDate(dateInput.value.trim());

    // Display errors if any
    if (dateValidationMessage) {
        dateError.textContent = dateValidationMessage;
        isValid = false;
    }

    const bankValidationMessage = validateBank(bankInput.value.trim());

    // Display errors if any
    if (bankValidationMessage) {
        bankError.textContent = bankValidationMessage;
        isValid = false;
    }

    const accountValidationMessage = validateAccountNumber(accountNumInput.value.trim());

    // Display errors if any
    if (accountValidationMessage) {
        accountError.textContent = accountValidationMessage;
        isValid = false;
    }

    // If both are valid, submit the form
    if (isValid) {
        console.log("Form is valid! Submitting...");
        submitRequest();
    }
}

