class FormValidator {
    static getFormData(form) {
        let formData = [];
        for (let i = 0; i < form.length; i++) {
            let element = form.elements[i];
            if (element.name !== '') {
                switch (element.type) {
                    case 'text':
                    case 'textarea':
                    case 'email':
                    case 'password':
                    case 'button':
                    case 'submit':    
                        formData[element.name] = element.value;
                        break;
                    case 'select-one':
                        if (element.selectedIndex !== -1) {
                            formData[element.name] = element.options[element.selectedIndex].value;
                        }
                        break;
                    case 'radio':
                        if (element.checked) {
                            formData[element.name] = element.value;
                        }
                        break;
                    case 'select-multiple' :
                        if (element.selectedIndex !== -1) {
                            formData[element.name] = [];
                            for (let j = 0; j < element.selectedOptions.length; j++) {
                                formData[element.name].push(element.options[j].value);
                            }
                        }
                        break;       
                    case 'checkbox':
                        if (element.checked) {
                            if (formData[element.name] === undefined) {
                                formData[element.name] = [];
                            }
                            formData[element.name].push(element.value);
                        }
                        break;                
                    default:
                        break;
                }
            }
        }
        return formData;
    }

    constructor(_data) {
        this.data = _data;
        this.errors = new Map();
    }

    validate() {
        return this.errors.size === 0;
    }

    isPresent(key) {
        let result = false;
        if (this.data[key] !== undefined) {
            let value = this.data[key];
            if (Array.isArray(value)) {
                result = true;
            }
            else {
                let trimmed_value = value.trim();
                result = trimmed_value !== '';
            }
        }
        return result;
    }

    minLength(key, length) {
        let result = false;
        if (this.data[key] !== undefined) {
            let value = this.data[key];
            result = value.length >= length;
        }
        return result;
    }

    maxLength(key, length) {
        let result = false;
        if (this.data[key] !== undefined) {
            let value = this.data[key];
            result = value.length <= length;
        }
        return result;
    }

    isEmail(key) {
        let result = false;
        if (this.data[key] !== undefined) {
            let value = this.data[key];
            let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            result = email_regex.test(value);
        }
        return result;
    }

    isFloat(key) {
        let result = false;
        if (this.data[key] !== undefined) {
            let value = this.data[key];
            let float_regex = /^[+-]?\d+(\.\d+)?$/;
            result = float_regex.test(value);
        }
        return result;
    }

    inInteger(key) {
        let result = false;
        if (this.data[key] !== undefined) {
            let value = this.data[key];
            let integer_regex = /^\d+$/;
            result = integer_regex.test(value);
        }
        return result;
    }

    min(key, min) {
        let result = false;
        if (this.data[key] !== undefined) {
            let value = this.data[key];
            result = value >= min;
        }
        return result;
    }

    max(key, max) {
        let result = false;
        if (this.data[key] !== undefined) {
            let value = this.data[key];
            result = value <= max;
        }
        return result;
    }

    isBoolean(key) {
        let result = false;
        if (this.data[key] !== undefined) {
            let value = this.data[key];
            result = value === true || value === false;
        }
        return result;
    }

    isMatch(key, regex) {
        let result = false;
        if (this.data[key] !== undefined) {
            let value = this.data[key];
            result = regex.test(value);
        }
        return result;
    }

    isElement(key, arr) {
        let result = false;
        if (this.data[key] !== undefined) {
            let value = this.data[key];
            result = arr.includes(value);
        }
        return result;
    }

    isSubset(key, arr) {
        let result = false;
        if (this.data[key] !== undefined) {
            let values = this.data[key];
            result = values.every(v => arr.includes(v));
        }
        return result;
    }
}

export default FormValidator;