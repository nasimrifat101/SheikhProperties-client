import { Helmet } from "react-helmet-async";
import { FaBackward } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
        <Helmet>
            <title>Sheikh Properties - 404 Not Found</title>
        </Helmet>
            <div className="hero min-h-screen flex items-center justify-center">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-[300px] font-black">404</h1>
                        <p className="-mt-10 text-xl">Page Not Found</p>
                        <div className="mt-10 flex justify-center">
                            <Link to='/' className="btn"><FaBackward /><span>Go Home</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
