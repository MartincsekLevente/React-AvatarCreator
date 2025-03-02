export class Validator {
    static isValidAvatarImage(image: string): boolean {
        return !this.isEmpty(image);
    }

    //Regex:
    // Allows only letters (a-z, A-Z) and numbers (0-9)
    // Numbers are optional
    // At least 3 and at most 20 characters
    static isValidUsername(username: string): boolean {
        return !this.isEmpty(username) && /^[a-zA-Z0-9]{3,20}$/.test(username);
    }

    //Regex:
    // Must be in email format: example@example.example
    static isValidEmail(email: string): boolean {
        return !this.isEmpty(email) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    //Regex:
    // Must contain at least one letter (a-z, A-Z)
    // Must contain at least one number (0-9)
    // Only letters and numbers allowed
    // At least 6 characters long
    static isValidPassword(password: string): boolean {
        return !this.isEmpty(password) && /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/.test(password);
    }

    static isEmpty(value: string): boolean {
        return value.length === 0;
    }
}