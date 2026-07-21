

const validateFormFields = (email, password) => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password)

    if (isValidEmail && isValidPassword) return null;
    if (!isValidEmail) return "Email is invalid";
    if (!isValidPassword) return "Invalid password"
}

export default validateFormFields;
