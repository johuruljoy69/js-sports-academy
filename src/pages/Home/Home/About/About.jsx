import SectionTitle from "../../../../components/SectionTitle/SectionTitle";


const About = () => {
    return (
        <div>
            <SectionTitle subHeading={"Explore "} heading={"About Us"} />

            <div className="bg-fixed" style={{
                backgroundImage: `url("https://i.ibb.co/xFTY1sQ/school-campus.jpg")`, backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}  >
                <div className='container mx-auto text-center pt-32 pb-32'>
                    <h2 className='text-center lg:text-6xl text-4xl text-white font-extrabold'></h2>
                    <h2 className='text-center lg:text-8xl text-6xl text-white font-extrabold'>Features</h2>
                    <button className="mt-10 btn border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default About;