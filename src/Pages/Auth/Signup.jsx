import { useState } from "react";
import { Link } from "react-router-dom";
import { TbHomeShare } from "react-icons/tb";
import { LuEyeOff } from "react-icons/lu";
import { GiBleedingEye } from "react-icons/gi";


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            {/* Helmet can be included here if needed */}
            <div className="w-full h-screen flex lg:px-3 md:px-12 px-8  ">
                {/* form Div */}
                <div className="lg:w-1/2 flex flex-col items-center justify-center">
                    <div className="w-full md:px-10 lg:px-4 xl:px-28">
                        <div className="space-y-5">
                            <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold">
                                Hello There :)
                            </h1>
                            <p className="xl:text-2xl lg:text-xl text-gray-500 pb-3">
                                Create an account and start your career journey with us &
                                recruiters from all around the globe.
                            </p>
                        </div>
                        <form className="space-y-3 w-full">
                            <div className="form-control w-full">
                                <label htmlFor="name" className="text-xl font-semibold py-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input-md md:input-lg rounded-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF]"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label htmlFor="email" className="text-xl font-semibold py-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="input-md md:input-lg rounded-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF]"
                                />
                            </div>
                            <div className="form-control w-full relative">
                                <label
                                    htmlFor="password"
                                    className="text-xl font-semibold py-1"
                                >
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="at least 6 characters long"
                                    className="input-md md:input-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF] mb-4"
                                />
                                <span
                                    className="absolute top-[50px] md:top-[55px] md:text-lg right-3 cursor-pointer lg:text-2xl"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <GiBleedingEye /> : <LuEyeOff />}
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="btn md:btn-lg w-full bg-[#162D3A] text-white hover:bg-green-400 hover:text-black duration-500"
                            >
                                Create account
                            </button>

                            <div className="divider divider-neutral">
                                <Link to="/" className="text-2xl">
                                    <TbHomeShare />
                                </Link>
                            </div>

                            {/* Social Login Section */}
                            {/* <SocialLogin /> - You can include this component here if needed */}

                            <div className="flex justify-between md:text-xl">
                                <p>Already have an account?</p>
                                <Link to="/login">
                                    <p className="hover:text-green-500 cursor-pointer text-violet-400 font-semibold underline">
                                        Login
                                    </p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                {/* image div */}
                <div className="lg:w-1/2 object-cover m-4 hidden lg:block">
                    <img
                        src="https://i.postimg.cc/jjBBjXnF/andrea-leopardi-o4-HLzt7k-F1-A-unsplash.jpg"
                        className="w-full h-full object-cover rounded-xl"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default Signup;
