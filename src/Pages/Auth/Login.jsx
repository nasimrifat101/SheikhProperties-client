// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import SocialLogin from "./SocialLogin";
// import {RiHome2Fill} from "react-icons/ri";

// const Login = () => {

//     const {
//         register,
//         formState: { errors },
//         handleSubmit,
//     } = useForm();

//     const onSubmit = async (data) => {
//         console.log(data)
//     }
//     return (
//         <div className="min-h-screen">
//             <div className="min-h-screen my-auto max-w-6xl mx-auto grid grid-cols-2">
//                 <div>
//                     <img src="https://i.postimg.cc/3RFdZF71/aron-yigin-am-Bva-OYIRLY-unsplash.jpg" className="w-full h-screen" alt="" />
//                 </div>
//                 <div className="bg-white min-h-screen my-auto">

//                     <div className="items-center space-y-2 p-10">
//                         <p className="font-semibold text-3xl">Login to</p>
//                         <p className="text-3xl lg:text-5xl font-bold">Sheikh Properties</p>
//                         <div className="pt-5 space-y-3">
//                             <Link to="/">
//                                 <button className="btn w-full" aria-label="Go to Home">
//                                     <RiHome2Fill />
//                                     Home
//                                 </button>
//                             </Link>
//                             <SocialLogin />
//                         </div>
//                         <div className="divider"></div>
//                         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                             <div className="form-control w-full">
//                                 <input
//                                     type="email"
//                                     {...register("email", { required: "Email is required" })}
//                                     placeholder="Your Email"
//                                     className="input input-bordered"
//                                 />
//                             </div>
//                             <div className="form-control w-full">
//                                 <input
//                                     type="password"
//                                     {...register("password", {
//                                         required: "Password is required",
//                                         pattern: {
//                                             value:
//                                                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
//                                             message:
//                                                 "Password must meet the requirements: at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long.",
//                                         },
//                                     })}
//                                     placeholder="Your Password"
//                                     className="input input-bordered"
//                                 />
//                                 {errors.password && (
//                                     <p className="text-red-500">{errors.password.message}</p>
//                                 )}
//                             </div>
//                             <input type="submit" value="Login" className="btn w-full" />
//                             <div className="flex justify-between">
//                                 <p>Dont have an account?</p>
//                                 <Link to="/signUp">
//                                     <p className="underline text-green-300">SignUp</p>
//                                 </Link>
//                             </div>
//                         </form>
//                     </div>

//                     <ToastContainer />


//                 </div>

//             </div>

//         </div>
//     );
// };

// export default Login;


import { Link } from "react-router-dom";
import { TbHomeShare } from "react-icons/tb";

const Login = () => {
  return (
    <>
      {/* Helmet can be included here if needed */}
      <div className="w-full h-screen flex lg:px-3 md:px-12 px-8">
        {/* form div */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <div className="w-full md:px-10 lg:px-4 xl:px-28">
            <div className="space-y-5">
              <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold">
                Welcome Back <span className="lg:text-5xl">👋🏻</span>
              </h1>
              <p className="md:text-xl xl:text-2xl text-gray-500 font-normal">
                Today is a new day. It's your day. You shape it. Sign in to
                start managing your Career path.
              </p>
            </div>
            {/* form starts here */}
            <form className="space-y-3 mt-4">
              <div className="form-control w-full">
                <label htmlFor="email" className="font-bold text-lg ">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  className="input-md md:input-lg rounded-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF]"
                />
              </div>
              <div className="form-control w-full relative">
                <label htmlFor="password" className="font-bold text-lg ">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="at least 6 characters"
                  className="input-md md:input-lg border-b-4 outline-none rounded-lg  bg-[#F7FBFF] hover:border-b-teal-500 duration-500"
                />
              </div>
              <div className="flex justify-end">
                <p className="hover:text-red-500 cursor-pointer text-violet-400 font-semibold">
                  Forgot Password?
                </p>
              </div>
              <button
                type="submit"
                value=""
                className="btn md:btn-lg w-full bg-[#162D3A] text-white hover:bg-green-400 hover:text-black duration-500 "
              >
                Sign in
              </button>
            </form>
            <div className="divider divider-neutral">
              <Link to="/" className="text-2xl">
                <TbHomeShare />
              </Link>
            </div>
            {/* Social Login Section */}
            {/* <SocialLogin /> - You can include this component here if needed */}

            <div className="flex justify-between lg:text-xl">
              <p>Don't have an account?</p>
              <Link to="/signup">
                <p className="hover:text-green-500 cursor-pointer text-violet-400 font-semibold underline">
                  Sign up
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Image Div */}
        <div className="lg:w-1/2 object-cover m-5 rounded hidden lg:block">
          <img
            src="https://i.postimg.cc/3RFdZF71/aron-yigin-am-Bva-OYIRLY-unsplash.jpg"
            className="w-full h-full object-cover rounded-xl"
            alt="abstract painting"
          />
        </div>
        {/* ToastContainer can be included here if needed */}
      </div>
    </>
  );
};

export default Login;
