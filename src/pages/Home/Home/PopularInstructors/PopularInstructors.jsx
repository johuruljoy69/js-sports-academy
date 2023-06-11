import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import PopularInstructorCard from "./PopularInstructorCard";
import useInstructors from "../../../../hooks/useInstructors";


const PopularInstructors = () => {
    const [popularInstructors] =useInstructors();

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
                    <button className="mt-10 btn bg-orange-500 hover:bg-orange-800 border-b-4 text-white">View More Instructor</button>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;