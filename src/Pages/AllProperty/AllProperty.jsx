import { useEffect, useState } from 'react';
import { Navbar } from "../Home/Components";
import axios from 'axios'
import AllPropCard from './AllPropCard';

const AllProperty = () => {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const filterProperties = () => {
        let filtered = properties;

        if (category) {
            filtered = filtered.filter(item => item.item === category);
        }

        if (location) {
            filtered = filtered.filter(item => item.address.toLowerCase().includes(location.toLowerCase()));
        }

        setFilteredProperties(filtered);
    };

    useEffect(() => {
        axios.get('/Fake.json')
            .then(res => {
                setProperties(res.data);
                setFilteredProperties(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        filterProperties();
    }, [category, location, properties, filteredProperties]);


    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex justify-center items-center h-96 w-full pt-20">
                        <p className="text-5xl font-semibold leading-relaxed text-center">Navigate Properties and Find Your <br />Perfect Real Estate!</p>
                    </div>
                    <div className="flex justify-center w-full -mt-20">
                        <div className="flex items-center bg-white p-5 my-5">
                            {/* Category dropdown */}
                            <select value={category} onChange={(e) => handleCategoryChange(e.target.value)} className="m-2 p-2 input-bordered input border-gray-300 rounded font-semibold">
                                <option value="">What are you looking for? </option>
                                <option value="House">House</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Warehouse">Warehouse</option>
                                <option value="Land">Land</option>
                            </select>

                            {/* Location input */}
                            <input type="text" value={location} onChange={handleLocationChange} placeholder="Enter Location" className="m-2 rounded input input-bordered font-semibold text-black" />

                            {/* Price range slider */}

                        </div>
                    </div>
                    <div className='w-full min-h-screen bg-gray-50'>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>

                            {
                                filteredProperties.map(
                                    (item, idx) =>
                                        <AllPropCard key={idx} item={item} />
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AllProperty;
