let submitBtn = document.getElementById("submit_btn");
let commentForm = document.getElementById("comment_form");

// get inputs
let nameInput = document.getElementById("name");
let categoryInput = document.getElementById("category");
let experienceInputs = document.getElementsByName("experience");

// get error spans
let nameError = document.getElementById("name_error");
let categoryError = document.getElementById("category_error");
let experienceError = document.getElementById("experience_error");
let errorExists = false;

const RED = "#f44242";

submitBtn.addEventListener("click", onSubmitForm);

function showError(errorField, errorMessage) {
    errorExists = true;
    errorField.innerHTML = errorMessage;
    errorField.style.color = RED;
}

function onSubmitForm(event) {
    event.preventDefault();
    nameError.innerHTML = "";
    categoryError.innerHTML = "";
    experienceError.innerHTML = "";
    errorExists = false;

    if (nameInput.value === "") {
        showError(nameError, "Name is required");
    }
    else if (nameInput.value.length <= 3) {
        showError(nameError, "Name must be more than 3 characters");
    }

    if (categoryInput.value === "") {
        showError(categoryError, "Category is required");
    }

    let expSelected = false;
    for (let i = 0; i != experienceInputs.length; i++) {
        if (experienceInputs[i].checked) {
            expSelected = true;
            break;
        }
    }
    if (!expSelected) {
        showError(experienceError, "Experience is required");
    }

    if (!errorExists) {
        commentForm.submit();
    }
}