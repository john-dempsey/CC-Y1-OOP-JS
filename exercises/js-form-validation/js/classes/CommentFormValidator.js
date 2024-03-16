import FormValidator from "./FormValidator.js";

class CommentFormValidator extends FormValidator {
    constructor(_form) {
        super(_form);
    }

    validate() {
        this.errors = {};
        if (!this.isPresent('name')) {
            this.errors['name'] = 'Name is required';
        }
        else if (!this.minLength('name', 6)) {
            this.errors['name'] = 'Name must be at least 6 characters';
        }

        let validCategories = ["Sport", "Music", "Movies"];
        if (!this.isPresent('category')) {
            this.errors['category'] = 'Category is required';
        }
        else if (!this.isElement('category', validCategories)) {
            this.errors['category'] = 'Invalid category';
        }

        let validExperiences = ["Novice", "Compotent", "Expert"];
        if (!this.isPresent('experience')) {
            this.errors['experience'] = 'Experience is required';
        }
        else if (!this.isElement('experience', validExperiences)) {
            this.errors['experience'] = 'Invalid experience';
        }

        let validLanguages = ["English", "Irish", "Spanish"];
        if (!this.isPresent('languages[]')) {
            this.errors['languages'] = 'Languages is required';
        }
        else if (!this.isSubset('languages[]', validLanguages)) {
            this.errors['languages'] = 'Invalid language';
        }
        else if (!this.maxLength('languages[]', 2)) {
            this.errors['languages'] = 'Please choose at most two languages';
        }
        return Object.keys(this.errors).length === 0;
    }
}

export default CommentFormValidator;