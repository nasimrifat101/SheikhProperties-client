/* eslint-disable react/prop-types */
import { FaLocationDot, FaShower } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";
import { SlSizeFullscreen } from "react-icons/sl";

const AllPropCard = ({ item }) => {
    return (
        <>
            {
                item?.item === 'House' ?
                    <div key={item.id} className="card card-compact bg-white hover:shadow-xl duration-1000 ease-in-out hover:scale-105 relative">
                        <figure><img src={item?.image} alt={item?.name} className="p-2 rounded-t-2xl h-[230px] w-full hover:scale-150 duration-1000 ease-in-out" /></figure>
                        <p className="absolute top-6 right-5 backdrop-blur-sm bg-white/50 px-3 py-1 rounded font-bold">{item?.item}</p>
                        <div className="card-body">
                            <h2 className="font-bold">{item?.name}</h2>
                            <div className="space-y-2">
                                <h1 className="flex items-center"><FaLocationDot className="mr-2" />{item?.address}</h1>
                                <div className="flex justify-between">
                                    <h1 className="flex items-center "><LiaBedSolid className="mr-2" /><span className="font-bold mr-1">{item?.bedrooms}</span>Beds</h1>
                                    <h1 className="flex items-center "><FaShower className="mr-2" /><span className="font-bold  mr-1">{item?.bathrooms}</span>Baths</h1>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="flex items-center "><SlSizeFullscreen className="mr-2" /><span className="font-bold  mr-1">{item?.size}</span>sq ft</h1>
                                    <h1 className="flex items-center ">For <span className="font-bold  ml-1">{item?.status}</span></h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    : item?.item === "Apartment" ?
                        <div key={item.id} className="card card-compact bg-white hover:shadow-xl duration-1000 ease-in-out hover:scale-105 relative">
                            <figure><img src={item?.image} alt={item?.name} className="p-2 rounded-t-2xl h-[230px] w-full hover:scale-150 duration-1000 ease-in-out" /></figure>
                            <p className="absolute top-6 right-5 backdrop-blur-sm bg-white/50 px-3 py-1 rounded font-bold">{item?.item}</p>
                            <div className="card-body">
                                <h2 className="font-bold">{item?.name}</h2>
                                <div className="space-y-2">
                                    <h1 className="flex items-center"><FaLocationDot className="mr-2" />{item?.address}</h1>
                                    <div className="flex justify-between">
                                        <h1 className="flex items-center "><LiaBedSolid className="mr-2" /><span className="font-bold mr-1">{item?.bedrooms}</span>Beds</h1>
                                        <h1 className="flex items-center "><FaShower className="mr-2" /><span className="font-bold  mr-1">{item?.bathrooms}</span>Baths</h1>
                                    </div>
                                    <div className="flex justify-between">
                                        <h1 className="flex items-center "><SlSizeFullscreen className="mr-2" /><span className="font-bold  mr-1">{item?.size}</span>sq ft</h1>
                                        <h1 className="flex items-center ">For <span className="font-bold  ml-1">{item?.status}</span></h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                        : item?.item === 'Land' ?
                            <div key={item.id} className="card card-compact bg-white hover:shadow-xl duration-1000 ease-in-out hover:scale-105 relative">
                                <figure><img src={item?.image} alt={item?.name} className="p-2 rounded-t-2xl h-[230px] w-full hover:scale-150 duration-1000 ease-in-out" /></figure>
                                <p className="absolute top-6 right-5 backdrop-blur-sm bg-white/50 px-3 py-1 rounded font-bold">{item?.item}</p>
                                <div className="card-body">
                                    <h2 className="font-bold">{item?.name}</h2>
                                    <div className="space-y-2">
                                        <h1 className="flex items-center"><FaLocationDot className="mr-2" />{item?.address}</h1>
                                        <div className="flex justify-between">
                                            <h1 className="flex items-center "><SlSizeFullscreen className="mr-2" /><span className="font-bold mr-1">3</span>Satak</h1>
                                            <h1 className="flex items-center "><SlSizeFullscreen className="mr-2" /><span className="font-bold  mr-1">1</span>Katha</h1>
                                        </div>

                                        <div className="flex justify-between">
                                            <h1 className="flex items-center "><SlSizeFullscreen className="mr-2" /><span className="font-bold  mr-1">{item?.size}</span>sq ft</h1>
                                            <h1 className="flex items-center ">For <span className="font-bold  ml-1">{item?.status}</span></h1>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            : item?.item === 'Warehouse' ?
                                <div key={item.id} className="card card-compact bg-white hover:shadow-xl duration-1000 ease-in-out hover:scale-105 relative">
                                    <figure><img src={item?.image} alt={item?.name} className="p-2 rounded-t-2xl h-[230px] w-full hover:scale-150 duration-1000 ease-in-out" /></figure>
                                    <p className="absolute top-6 right-5 backdrop-blur-sm bg-white/50 px-3 py-1 rounded font-bold">{item?.item}</p>
                                    <div className="card-body">
                                        <h2 className="font-bold">{item?.name}</h2>
                                        <div className="space-y-2">
                                            <h1 className="flex items-center"><FaLocationDot className="mr-2" />{item?.address}</h1>
                                            <div className="flex justify-between">
                                                <h1 className="flex items-center "><SlSizeFullscreen className="mr-2" /><span className="font-bold mr-1">3</span>Satak</h1>
                                                <h1 className="flex items-center "><SlSizeFullscreen className="mr-2" /><span className="font-bold  mr-1">1</span>Katha</h1>
                                            </div>
                                            <div className="flex justify-between">
                                                <h1 className="flex items-center "><SlSizeFullscreen className="mr-2" /><span className="font-bold  mr-1">{item?.size}</span>sq ft</h1>
                                                <h1 className="flex items-center ">For <span className="font-bold  ml-1">{item?.status}</span></h1>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                : null
            }
        </>
    );
};

export default AllPropCard;