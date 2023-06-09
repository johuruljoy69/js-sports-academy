import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import PopularInstructorCard from "./PopularInstructorCard";


const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setPopularInstructors(data))
    }, [])

    return (
        <div className="">
            <SectionTitle subHeading={"Our Popular"} heading={"Instructors"} />

            <div className="bg-fixed" style={{
                backgroundImage: `url("https://i.ibb.co/nngnM9x/instructor-team.png")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }} >
                <div className="grid md:grid-cols-3 gap-10 container mx-auto px-5 pt-10">

                    {
                        popularInstructors.slice(0, 6).map(popularInstructor => <PopularInstructorCard
                            key={popularInstructor._id}
                            popularInstructor={popularInstructor}
                        ></PopularInstructorCard>)
                    }
                </div>
                <div className="text-center pb-10">
                    <button className="mt-10 btn border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">View More Instructor</button>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;