import AllClassesCard from "./AllClassesCard";
import { Helmet } from "react-helmet";
import useClasses from "../../hooks/useClasses";



const AllClasses = () => {
    const [allClasses] = useClasses();
  
    return (
        <div>
            <Helmet>
                <title>JSSA | All Class</title>
            </Helmet>
           <div style={{
                backgroundImage: `url("https://i.ibb.co/gmmBwCj/class-room.jpg")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}  >
                <div className='container mx-auto text-center pt-32 pb-32'>
                    <h2 className='text-center lg:text-6xl text-4xl text-white font-extrabold'>Welcome to</h2>
                    <h2 className='text-center lg:text-8xl text-6xl text-white font-extrabold'>Our Class</h2>
                    <button className="mt-10 btn border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">View Our Classes</button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 mt-24 gap-10 container mx-auto px-5">
                {
                    allClasses.map(allClass => <AllClassesCard 
                    key={allClass._id}
                    allClass={allClass}
                    ></AllClassesCard> )
                }
            </div>
        </div>
    );
};

export default AllClasses;