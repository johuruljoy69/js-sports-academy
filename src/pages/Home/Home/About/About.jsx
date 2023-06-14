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

                <div className="md:flex justify-center items-center text-white bg-slate-800 bg-opacity-40 pt-12 pb-20 px-36">
                    <div className="grid md:grid-cols-2 gap-5">
                        <img className="rounded-md border-4 transform transition duration-500 hover:scale-105" src="https://i.ibb.co/hYRZM0r/school-img-1.jpg" alt="" />
                        <img className="rounded-md border-4 transform transition duration-500 hover:scale-105" src="https://i.ibb.co/djkWx04/school-img-2.jpg" alt="" />
                        <img className="rounded-md border-4 transform transition duration-500 hover:scale-105" src="https://i.ibb.co/GF8XvmK/school-img-3.jpg" alt="" />
                        <img className="rounded-md border-4 transform transition duration-500 hover:scale-105" src="https://i.ibb.co/9YfsTQw/school-img-4.jpg" alt="" />
                    </div>
                    <div className="md:ml-10 space-y-3">
                        <p className="uppercase font-bold text-xl">Our Mission and Vision</p>
                        <p><small>The JS Sports Academy School is an educational institution that combines academic excellence with a strong focus on sports development. With a vision to provide a holistic learning environment that nurtures both the minds and bodies of students, the school offers a comprehensive curriculum, world-class sports facilities, and expert coaching to empower students to succeed academically and athletically.</small></p>
                        <p><small><span className="font-semibold pr-2">Mission:</span> 
                            The mission of the JS Sports Academy School is to foster a balanced and well-rounded education that integrates academics with sports training. The school is dedicated to providing a nurturing and inclusive environment where students can thrive academically, while also developing their athletic talents and acquiring important life skills.</small> </p>
                        <p><small><span className="font-semibold pr-2">Vision:</span> 
                            The JS Sports Academy School envisions being a leading institution that seamlessly integrates academic education with sports excellence. The school aims to produce well-educated individuals who demonstrate exceptional skills in their chosen sports disciplines, while also excelling academically.</small></p>
                        <button className="mt-10 btn bg-orange-500 hover:bg-orange-800 border-b-4 text-white">Show More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;