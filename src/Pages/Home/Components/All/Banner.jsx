/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";

const Banner = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#FFFAF0] via-[#FEFDF7] to-[#FDECC8]">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-2 gap-5 pt-24">
                <div className="space-y-10 my-auto">
                    <h1 className="text-7xl font-extrabold leading-snug tracking-tight">We'll help you find a place you'll love</h1>
                    <p className="text-2xl">
                        Premier real estate services – buy, sell, lease. Specializing in commercial space. Your property journey starts here!</p>
                    <button>
                        <Link to='/allProperties' className="font-bold underline flex items-center text-xl">Explore All Properties <MdDoubleArrow className="text-xl" /> </Link>
                    </button>
                </div>
                <div className="mt-10 my-auto">
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