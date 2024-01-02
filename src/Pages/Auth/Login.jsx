import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SocialLogin from "./SocialLogin";
import {RiHome2Fill} from "react-icons/ri";

const Login = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
    }
    return (
        <div className="min-h-screen">
            <div className="min-h-screen my-auto max-w-6xl mx-auto grid grid-cols-2">
                <div>
                    <img src="https://i.postimg.cc/3RFdZF71/aron-yigin-am-Bva-OYIRLY-unsplash.jpg" className="w-full h-screen" alt="" />
                </div>
                <div className="bg-white min-h-screen my-auto">

                    <div className="items-center space-y-2 p-10">
                        <p className="font-semibold text-3xl">Login to</p>
                        <p className="text-3xl lg:text-5xl font-bold">Sheikh Properties</p>
                        <div className="pt-5 space-y-3">
                            <Link to="/">
                                <button className="btn w-full" aria-label="Go to Home">
                                    <RiHome2Fill />
                                    Home
                                </button>
                            </Link>
                            <SocialLogin />
                        </div>
                        <div className="divider"></div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="form-control w-full">
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control w-full">
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        pattern: {
                                            value:
                                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                            message:
                                                "Password must meet the requirements: at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long.",
                                        },
                                    })}
                                    placeholder="Your Password"
                                    className="input input-bordered"
                                />
                                {errors.password && (
                                    <p className="text-red-500">{errors.password.message}</p>
                                )}
                            </div>
                            <input type="submit" value="Login" className="btn w-full" />
                            <div className="flex justify-between">
                                <p>Dont have an account?</p>
                                <Link to="/signUp">
                                    <p className="underline text-green-300">SignUp</p>
                                </Link>
                            </div>
                        </form>
                    </div>

                    <ToastContainer />


                </div>

            </div>

        </div>
    );
};

export default Login;