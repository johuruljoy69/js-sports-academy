import InstructorsCard from "./InstructorsCard";
import { Helmet } from "react-helmet";
import useUsers from "../../hooks/useUers";



const Instructors = () => {
const [instructors] = useUsers();
const allInstructor = instructors.filter(item => item.role === 'instructor')

    return (
        <div>
            <Helmet>
                <title>JSSA | Instructors</title>
            </Helmet>
            <div style={{
                backgroundImage: `url("https://i.ibb.co/nngnM9x/instructor-team.png")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}  >
                <div className='container mx-auto text-center pt-32 pb-32'>
                    <h2 className='text-center lg:text-6xl text-4xl text-white font-extrabold'>Welcome to</h2>
                    <h2 className='text-center lg:text-8xl text-6xl text-white font-extrabold'>Instructors</h2>
                    <button className="mt-10 btn border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">View Our Classes</button>
                </div>
            </div>
            <div className="container mx-auto mt-24">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
                {
                    allInstructor.map(instructor => <InstructorsCard
                    key={instructor._id}
                    instructor={instructor}
                    ></InstructorsCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default Instructors;