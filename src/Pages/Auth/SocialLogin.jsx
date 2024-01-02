import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {

    const handleGoogleSignIn = () => {

    };

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn w-full">
                <FaGoogle />
                Google
            </button>
        </div>
    );
};

export default SocialLogin;