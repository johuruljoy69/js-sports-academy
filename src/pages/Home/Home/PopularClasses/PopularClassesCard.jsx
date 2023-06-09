import { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";


const PopularClassesCard = ({popularClass}) => {
    const {_id, image, className, instructor, available_seats, book_seats, price} = popularClass;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = popularClass => {
        setIsDisabled(true);
        console.log(popularClass);
        if(user && user.email) {
            const cartItem = {classItemId: _id, image, className, price, email: user.email}
            fetch('http://localhost:5000/carts' , {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then( data => {
                if (data.insertedId) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added on the Cart.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
        else {

            Swal.fire({
                title: 'Please login Booking for Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    };

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
                    <button onClick={() => handleAddToCart(popularClass)} disabled={isDisabled} className="btn bg-orange-500 hover:bg-orange-800 border-b-4 text-white">Add To Booking</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassesCard;