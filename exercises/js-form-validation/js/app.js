import CommentFormValidator from './classes/CommentFormValidator.js';

function showErrors(errors) {
    errors.forEach((value, key) => {
        let errorId = key + "_error";
        let errorSpan = document.getElementById(errorId);
        errorSpan.innerText = value;
    });
}

function clearErrors() {
    let errorSpans = document.getElementsByClassName('error');
    for (let i = 0; i < errorSpans.length; i++) {
        errorSpans[i].innerText = '';
    }
}


let submitBtn = document.getElementById('submit_btn')
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    let form = document.getElementById('comment_form');
    let validator = new CommentFormValidator(form);

    clearErrors();
    let valid = validator.validate();
    if (!valid) {
        let errors = validator.errors;
        showErrors(errors);
    }
    else {
        console.log('Form is valid');
    }
});