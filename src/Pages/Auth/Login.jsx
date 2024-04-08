/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbHomeShare } from "react-icons/tb";
import useAuth from "../../Hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
  const { loginUser } = useAuth()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setLoading(true)
      await loginUser(email, password)
      navigate('/')

    } catch (error) {
      toast.error("Failed to create account. Please try again.");
      setLoading(false)
    } finally {
      setLoading(false);
    }
  }
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
                Today is a new day. Its your day. You shape it. Sign in to
                start managing your Career path.
              </p>
            </div>
            {/* form starts here */}
            <form onSubmit={handleLogin} className="space-y-3 mt-4">
              <div className="form-control w-full">
                <label htmlFor="email" className="font-bold text-lg ">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  className="input-md md:input-lg rounded-lg border-b-4 hover:border-b-teal-500 duration-500 outline-none bg-[#F7FBFF]"
                  name="email"
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
                  name='password'
                />
              </div>
              <div className="flex justify-end">
                <p className="hover:text-red-500 cursor-pointer text-violet-400 font-semibold">
                  Forgot Password?
                </p>
              </div>

              <button
                type="submit"
                className="btn md:btn-lg w-full bg-[#162D3A] text-white hover:bg-green-400 hover:text-black duration-500"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
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
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
