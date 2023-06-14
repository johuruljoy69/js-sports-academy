

const PopularInstructorCard = ({popularInstructor}) => {
    const {photo, name, email} = popularInstructor;
    return (
        <div className="card w-100 text-white bg-indigo-950 border border-purple-900  shadow-xl" data-aos="fade-up"
        data-aos-duration="2000">
            <figure className="">
                <img src={photo} alt="Instructor" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>  
                <p><span className="font-semibold text-orange-500">{email}</span></p>
                <div className="card-actions mt-2">
                    <button className="btn bg-orange-500 hover:bg-orange-800 border-b-4 text-white">View Classes</button>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructorCard;