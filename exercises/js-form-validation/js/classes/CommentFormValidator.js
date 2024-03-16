import FormValidator from "./FormValidator.js";

class CommentFormValidator extends FormValidator {
    constructor(_form) {
        super(_form);

        this.validCategories = [];
        let categorySelect = this.form.querySelector('select[name="category"]');
        for (let i = 0; i < categorySelect.options.length; i++) {
            let option = categorySelect.options[i];
            if (option.value) {
                this.validCategories.push(option.value);
            }
        }

        this.validExperiences = [];
        let experienceRadios = this.form.querySelectorAll('input[name="experience"]');
        for (let i = 0; i < experienceRadios.length; i++) {
            let radio = experienceRadios[i];
            this.validExperiences.push(radio.value);
        }

        this.validLanguages = [];
        let languageCheckboxes = this.form.querySelectorAll('input[name="languages[]"]');
        for (let i = 0; i < languageCheckboxes.length; i++) {
            let checkbox = languageCheckboxes[i];
            this.validLanguages.push(checkbox.value);
        }
    }

    validate() {
        this.errors = {};
        
        if (!this.isPresent('name')) {
            this.errors['name'] = 'Name is required';
        }
        else if (!this.minLength('name', 6)) {
            this.errors['name'] = 'Name must be at least 6 characters';
        }

        if (!this.isPresent('category')) {
            this.errors['category'] = 'Category is required';
        }
        else if (!this.isElement('category', this.validCategories)) {
            this.errors['category'] = 'Invalid category';
        }

        if (!this.isPresent('experience')) {
            this.errors['experience'] = 'Experience is required';
        }
        else if (!this.isElement('experience', this.validExperiences)) {
            this.errors['experience'] = 'Invalid experience';
        }

        if (!this.isPresent('languages[]')) {
            this.errors['languages'] = 'Languages is required';
        }
        else if (!this.isSubset('languages[]', this.validLanguages)) {
            this.errors['languages'] = 'Invalid language';
        }
        else if (!this.maxLength('languages[]', 2)) {
            this.errors['languages'] = 'Please choose at most two languages';
        }

        return Object.keys(this.errors).length === 0;
    }
}

export default CommentFormValidator;