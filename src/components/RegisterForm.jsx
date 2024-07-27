import FormGroup from "./FormGroup.jsx";
import TextInput from "./TextInput.jsx";
import Button from "./Button.jsx";
import {useState} from "react";
import {doPasswordsMatch, isEmailValid, isPasswordValid, isUsernameValid} from "../utils/validation.js";

export default function RegisterForm() {

    const [formValues, setFormValues] = useState({
        email: "",
        username: "",
        password: "",
        cpassword: ""
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormValues((prev) => ({...prev, [id]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {}

        // Validate email
        if (!isEmailValid(formValues.email)) {
            newErrors.email = "Invalid email address";
        }

        // Validate username
        if (!isUsernameValid(formValues.username)) {
            newErrors.username = "Username must be at least 3 characters long";
        }

        // Validate password
        if (!isPasswordValid(formValues.password)) {
            newErrors.password = "Password must be at least 8 characters long";
        }

        // Check if passwords match
        if (!doPasswordsMatch(formValues.password, formValues.cpassword)) {
            newErrors.cpassword = "Passwords do not match";
        }

        setErrors(newErrors);
    }

    return (
        <div>
            <p className="text-[#5B5B5B] mt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form action="" className="mt-6">
                <FormGroup htmlFor={"email"} label={"Email"}>
                    <TextInput
                        type={"email"}
                        onChange={handleChange}
                        placeholder={"Enter your Email"} id={"email"} />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </FormGroup>
                <FormGroup htmlFor={"username"} label={"User name"}>
                    <TextInput
                        onChange={handleChange}
                        placeholder={"Enter your User name"} id={"username"} />
                    {errors.username && <p className="text-red-500">{errors.username}</p>}
                </FormGroup>
                <FormGroup htmlFor={"password"} label={"Password"}>
                    <TextInput
                        onChange={handleChange}
                        type={"password"}
                        placeholder={"Enter your Password"} id={"password"} />
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </FormGroup>
                <FormGroup htmlFor={"cpassord"} label={"Confirm Password"}>
                    <TextInput
                        onChange={handleChange}
                        type={"password"}
                        placeholder={"Enter your Password Again"} id={"cpassword"} />
                    {errors.cpassword && <p className="text-red-500">{errors.cpassword}</p>}
                </FormGroup>

                <div className="flex items-center justify-end">
                    <Button onClick={handleSubmit}>
                        Register
                    </Button>
                </div>
            </form>
        </div>
    )
}