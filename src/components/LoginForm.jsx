import FormGroup from "./FormGroup.jsx";
import TextInput from "./TextInput.jsx";
import Button from "./Button.jsx";

export default function LoginForm() {
    return (
        <div>
            <p className="text-[#5B5B5B] mt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form action="" className="mt-12">
                <FormGroup htmlFor={"username"} label={"User name"}>
                    <TextInput onChange={() => {}} placeholder={"Enter your User name"} id={"username"} />
                </FormGroup>
                <FormGroup htmlFor={"password"} label={"Password"}>
                    <TextInput onChange={() => {}} placeholder={"Enter your Password"} id={"password"} />
                </FormGroup>
                <div className="text-right font-light mb-8">
                    <a href="">Forgot Password?</a>
                </div>
                <div className="flex items-center justify-end">
                    <Button>
                        Login
                    </Button>
                </div>
            </form>
        </div>
    )
}