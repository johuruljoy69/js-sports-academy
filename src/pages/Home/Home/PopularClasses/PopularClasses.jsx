import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import PopularClassesCard from "./PopularClassesCard";


const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])

    return (
        <div className="">
            <SectionTitle subHeading={"Our Popular"} heading={"Classes"} />

            <div className="bg-fixed" style={{
                backgroundImage: `url("https://i.ibb.co/PGSNr9f/class-work.jpg")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }} >
                <div className="grid md:grid-cols-3 gap-10 pt-10 container mx-auto px-5">
                    {
                        popularClasses.slice(0, 6).map(popularClass => <PopularClassesCard
                            key={popularClass._id}
                            popularClass={popularClass}
                        ></PopularClassesCard>)
                    }
                </div>
                <div className="text-center pb-10">
                    <button className="mt-10 btn bg-orange-500 hover:bg-orange-800 border-b-4 text-white">View More Class</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;