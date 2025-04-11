document.getElementById("incomeForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function
    requestMenu();
});

function validateJob(job) {
    if (!job) {
        return "Please enter an input";
    }
    if (/[^a-zA-Z\s]/.test(job)) {
        return "Please only type in letters";
    }
    if (job.length < 3){
        return "Source Name should have a minimum length of 3.";
    }
    return ""; // No errors => Return empty string.
}

function validateIncome(income) {
    if (!income) {
        return "Please enter an input";
    }
    if (/[^0-9]/.test(income)) {
        return "Please only type in numbers";
    }
    return ""; // No errors => Return empty string.
}

function validateForm() {
    const jobInput = document.getElementById("job");
    const incomeInput = document.getElementById("income");
    const jobError = document.getElementById("jobError");
    const incomeError = document.getElementById("incomeError");

    // Clear previous error messages
    incomeError.textContent = "";
    jobError.textContent = "";

    // Run validation checks
    const jobValidationMessage = validateJob(jobInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (jobValidationMessage) {
        jobError.textContent = jobValidationMessage;
        isValid = false;
    }

    const incomeValidationMessage = validateIncome(incomeInput.value.trim());

    // Display errors if any
    if (incomeValidationMessage) {
        incomeError.textContent = incomeValidationMessage;
        isValid = false;
    }

    // If both are valid, submit the form
    if (isValid) {
        console.log("Form is valid! Submitting...");
        submitRequest();
    }
}

function requestMenu() {
    let API_URL = "https://webhook-test.com/3e35cc2dc6a63cd943950ae8f81081d0";
    let data = new FormData();
    data.append("key1", "value1"); // repeat for as many params as necessary
    data.append("key2", "value2");
  
    fetch(API_URL, {method: "POST", body: data})
      .then(statusCheck)
      .then(resp => resp.json()) // or res.text() based on response
      .then(handleResponse)
      .catch(handleError);
  }
  
