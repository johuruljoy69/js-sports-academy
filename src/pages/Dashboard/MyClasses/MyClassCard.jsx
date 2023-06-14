

const MyClassCard = ({myClass}) => {
    const { image, class_name, instructor, available_seats, enrolled_seats, price } = myClass;
    return (
        <div className="card w-100 text-white border border-purple-900 shadow-xl">
            <figure className="">
                <img src={image} alt="Class" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{class_name} </h2>
                <h2 className="card-title">{instructor} </h2>
                <p>Available Seats: {available_seats} </p>
                <p>Enrolled Seats: {enrolled_seats} </p>
                <p>Price: ${price} </p>
                <div className="card-actions">
                    
                </div>
            </div>
        </div>
    );
};

export default MyClassCard;