/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";

const Banner = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#FFFAF0] via-[#FEFDF7] to-[#FDECC8]">
            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-5">
                <div className="space-y-6">
                    <h1 className="text-6xl font-extrabold leading-snug mt-24">We'll help you find a place you'll love</h1>
                    <p>
                        Premier real estate services – buy, sell, lease. Specializing in commercial space. Your property journey starts here!</p>
                    <button>
                        <Link to='/allProperties' className="font-black underline flex items-center">Explore All Properties <MdDoubleArrow className="text-xl" /> </Link>
                    </button>
                </div>
                <div className="mt-5">
                    <img src="https://i.postimg.cc/MGh4yzZW/Web-1920-1.png" className="" alt="" />
                    <div className="bg-gradient-to-r from-[#FFFDF7] via-[#FEFDF7] to-[#FDECC8] h-20 -mt-10 flex justify-center items-center space-x-8">

                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-2xl font-bold">20+</h1>
                            <h1>Properties Sold</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-2xl font-bold">200+</h1>
                            <h1>Properties Rented</h1>
                        </div>



                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;