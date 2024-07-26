import FormGroup from "./FormGroup.jsx";
import TextInput from "./TextInput.jsx";
import Button from "./Button.jsx";

export default function RegisterForm() {
    return (
        <div>
            <p className="text-[#5B5B5B] mt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form action="" className="mt-6">
                <FormGroup htmlFor={"email"} label={"Email"}>
                    <TextInput type={"email"} onChange={() => {}} placeholder={"Enter your Email"} id={"email"} />
                </FormGroup>
                <FormGroup htmlFor={"username"} label={"User name"}>
                    <TextInput onChange={() => {}} placeholder={"Enter your User name"} id={"username"} />
                </FormGroup>
                <FormGroup htmlFor={"password"} label={"Password"}>
                    <TextInput onChange={() => {}} placeholder={"Enter your Password"} id={"password"} />
                </FormGroup>
                <FormGroup htmlFor={"cpassord"} label={"Confirm Password"}>
                    <TextInput onChange={() => {}} placeholder={"Enter your Password Again"} id={"cpassord"} />
                </FormGroup>

                <div className="flex items-center justify-end">
                    <Button>
                        Register
                    </Button>
                </div>
            </form>
        </div>
    )
}