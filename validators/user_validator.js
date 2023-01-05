import { check } from 'express-validator'

const firstname = check("firstname", "Firstname is required .").not().isEmpty();
const lastname  = check("lastname", "Lastname is required.").not().isEmpty();
const idnumber  = check ("idnumber", "Id Number is required").not().isEmpty();
const email = check("email", "Please provide a valid email address").isEmail();
const phonenumber = check("phonenumber", "Mobile number should contains 12 digits").isLength({ min: 12, max: 12 });
const whatsupnumber = check("whatsupnumber", "Mobile number should contains 12 digits").isLength({ min: 12, max: 12 });

const password = check(
    "password",
    "Password is required of mininum length of 6."
)
.isLength({
    min: 6,
});

export const RegisterValidations = [firstname, lastname,  email];
export const UserValidation = [idnumber, phonenumber,]
export const AuthenticateValidations = [email, password];
export const ResetPassword = [email]
export const CustomerValidation = [phonenumber, whatsupnumber]


