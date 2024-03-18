import axios from "axios";
import { useEffect, useState } from "react";
import FeatureCard from "./Card/FeatureCard";
import { Link } from "react-router-dom";


const Featured = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/Fake.json')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const datas = data.slice(0, 8)
    
    return (
        <div>
            <div className="max-w-screen-2xl  mx-auto min-h-screen py-5">
                <h1 className="text-4xl font-bold pt-14">Featured Properties</h1>
                <div className="grid grid-cols-4 gap-4 py-10">
                    {
                        datas?.map(item => <FeatureCard key={item.id} item={item} />

                        )
                    }
                </div>
                <div className="flex justify-center">
                    <Link className="font-bold underline btn-ghost btn">Show More Properties</Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;