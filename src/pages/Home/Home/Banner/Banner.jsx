import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <>
            <div style={{
                backgroundImage: `url("https://i.ibb.co/0ZS1XFx/summer-camp-school.jpg")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}  >
                <div className='container mx-auto text-center pt-32 pb-32'>
                    <h2 className='text-center lg:text-6xl text-4xl text-white font-extrabold'>Welcome to</h2>
                    <h2 className='text-center lg:text-8xl text-6xl text-white font-extrabold'>JS Sports Academy</h2>
                    <Link to="/classes"><button className="mt-10 btn bg-orange-500 hover:bg-orange-800 border-b-4 text-white">View Our Classes</button></Link>
                </div>
            </div>

        </>
    );
};

export default Banner;