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
                    <button className="mt-10 btn bg-orange-500 hover:bg-orange-800 border-b-4 text-white">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default About;