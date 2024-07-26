import img from "./assets/img.png";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import LoginForm from "./components/LoginForm.jsx";
import {useState} from "react";
import RegisterForm from "./components/RegisterForm.jsx";

export default function App() {

    const [isLogin, setIsLogin] = useState(true);

    return(
        <main className="min-h-screen px-4 md:p-16">
            <div className="content grid xl:grid-cols-2 grid-cols-1 mt-20 xl:mt-0 xl:gap-40 w-full">
                <div className="rounded-[2.0625rem] relative">
                    <img src={img} className="hidden xl:inline-block h-[825px] object-contain " alt=""/>
                    <div className="absolute bottom-8 left-8 text-white">
                        <h1 className="text-3xl pb-4 font-bold">Lorem Ipsum is simply </h1>
                        <p className="text-2xl">Lorem Ipsum is simply </p>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-center xl:text-right font-semibold text-[1.25rem]">Your Logo</h1>
                    <div className="flex mt-4 items-center justify-center flex-col">
                        <h6>Welcome to Lorem</h6>
                        <div className="bg-[#F8EDDD] mt-6 p-4 rounded-[2.0625rem] flex items-center gap-4">
                            <button
                                className={`py-3 px-16 rounded-[2.0625rem] ${
                                    isLogin ? 'bg-[#9E896A] text-white' : 'text-[#9E896A]'
                                }`}
                                onClick={() => setIsLogin(true)}
                            >
                                Login
                            </button>
                            <button
                                className={`py-3 px-16 rounded-[2.0625rem] ${
                                    !isLogin ? 'bg-[#9E896A] text-white' : 'text-[#9E896A]'
                                }`}
                                onClick={() => setIsLogin(false)}
                            >
                                Register
                            </button>
                        </div>
                        <div>
                            <TransitionGroup>
                                {isLogin ? (
                                    <CSSTransition
                                        key="login"
                                        timeout={300}
                                        classNames="alert"
                                        unmountOnExit
                                    >
                                        <LoginForm />
                                    </CSSTransition>
                                ) : (
                                    <CSSTransition
                                        key="register"
                                        timeout={300}
                                        classNames="alert"
                                        unmountOnExit
                                    >
                                        <RegisterForm />
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )


}