/**
 *
 * Validates an email address.
 * @param {string} email
 * @return {boolean} returns true if the email is valid else returns false
 */
export const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

/**
 *
 * Validates username
 * @param {string} username
 * @return {boolean} return true if the username is at-least 3 characters long
 */
export const isUsernameValid = (username) => {
    return username.length >= 3;
}

/**
 * Validates a password.
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password is at least 8 characters long, false otherwise.
 */
export const isPasswordValid = (password) => {
    return password.length >= 8;
};

/**
 *
 * Checks if two passwords match.
 * @param {string} password - The original password.
 * @param {string} cpassword - The confirm password.
 * @returns {boolean} True if the passwords match, false otherwise.
 */
export const doPasswordsMatch = (password, cpassword) => {
    return password === cpassword;
};