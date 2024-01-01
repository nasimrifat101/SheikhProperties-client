/* eslint-disable react/prop-types */
import { LiaBedSolid } from "react-icons/lia";
import { FaShower } from "react-icons/fa6";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
const FeatureCard = ({ item }) => {
    return (
        <div key={item.id} className="card card-compact bg-white border hover:shadow-xl duration-1000 ease-in-out">
            <figure><img src={item.image} alt={item.name} className="p-1 rounded-t-2xl h-[180px] w-full" /></figure>
            <div className="card-body">
                <h2 className="font-bold">{item.name}</h2>
                <div className="space-y-2">
                    <h1 className="flex items-center"><FaLocationDot className="mr-2" />{item.address}</h1>
                    <div className="flex justify-between">
                        <h1 className="flex items-center "><LiaBedSolid className="mr-2" /><span className="font-bold mr-1">{item.bedrooms}</span>Beds</h1>
                        <h1 className="flex items-center "><FaShower className="mr-2" /><span className="font-bold  mr-1">{item.bathrooms}</span>Baths</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1 className="flex items-center "><SlSizeFullscreen className="mr-2" /><span className="font-bold  mr-1">{item.size}</span>sq ft</h1>
                        <h1 className="flex items-center ">For <span className="font-bold  ml-1">{item.status}</span></h1>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default FeatureCard;