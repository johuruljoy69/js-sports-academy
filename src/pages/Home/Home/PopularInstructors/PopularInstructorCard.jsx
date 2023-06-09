

const PopularInstructorCard = ({popularInstructor}) => {
    const {image, name, email, classesTaken} = popularInstructor;
    return (
        <div className="card w-100 text-white bg-indigo-950 border border-purple-900  shadow-xl">
            <figure className="">
                <img src={image} alt="Instructor" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <p> Taken by Class: {classesTaken}</p>
                <div className="card-actions mt-2">
                    <button className="btn btn-primary">Show Classes</button>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructorCard;