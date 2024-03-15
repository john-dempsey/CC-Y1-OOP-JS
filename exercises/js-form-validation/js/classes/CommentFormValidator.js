import FormValidator from "./FormValidator.js";

class CommentFormValidator extends FormValidator {
    constructor(_data) {
        super(_data);
    }

    validate() {
        this.errors = new Map();
        if (!this.isPresent('name')) {
            this.errors.set('name', 'Name is required');
        }
        else if (!this.minLength('name', 6)) {
            this.errors.set('name', 'Name must be at least 6 characters');
        }

        let validCategories = ["Sport", "Music", "Movies"];
        if (!this.isPresent('category')) {
            this.errors.set('category', 'Category is required');
        }
        else if (!this.isElement('category', validCategories)) {
            this.errors.set('category', 'Invalid category');
        }

        let validExperiences = ["Novice", "Compotent", "Expert"];
        if (!this.isPresent('experience')) {
            this.errors.set('experience', 'Experience is required');
        }
        else if (!this.isElement('experience', validExperiences)) {
            this.errors.set('experience', 'Invalid experience');
        }

        let validLanguages = ["English", "Irish", "Spanish"];
        if (!this.isPresent('languages[]')) {
            this.errors.set('languages', 'Languages is required');
        }
        else if (!this.isSubset('languages[]', validLanguages)) {
            this.errors.set('languages', 'Invalid language');
        }
        else if (!this.maxLength('languages[]', 2)) {
            this.errors.set('languages', 'Please choose at most two languages');
        }
        return this.errors.size === 0;
    }
}

export default CommentFormValidator;