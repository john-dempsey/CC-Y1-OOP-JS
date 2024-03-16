class FormValidator {

    constructor(_form) {
        this.form = _form;

        let formData = new FormData(this.form);
        let data = {};
        for (let [key, value] of formData) {
            if (data[key] !== undefined) {
                if (!Array.isArray(data[key])) {
                    data[key] = [data[key]];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        }
        this.data = data;
        
        this.errors = {};
    }

    validate() {
        return Object.keys(this.errors).length === 0;
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