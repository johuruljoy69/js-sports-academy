
const AllClassesCard = ({allClass}) => {
    const {image, className, instructor, available_seats, book_seats, price} = allClass;
    return (
        <div className="card w-100 text-white bg-indigo-950 border border-purple-900 shadow-xl">
            <figure className="">
                <img src={image} alt="Class" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{className} </h2>
                <h2 className="card-title">{instructor} </h2>
                <p>Total Seats: {available_seats} </p>
                <p>Booked Seats: {book_seats} </p>
                <p>Price: ${price} </p>
                <div className="card-actions">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassesCard;