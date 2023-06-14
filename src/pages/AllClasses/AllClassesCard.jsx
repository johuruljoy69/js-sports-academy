import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";
import { useEffect } from "react";

const AllClassesCard = ({ allClass }) => {
    const { _id, image, class_name, instructor, available_seats, enrolled_seats, price } = allClass;
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [, refetch] = useCart();
    const [isDisabled, setIsDisabled] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('indigo');
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        if (available_seats === enrolled_seats) {
            setBackgroundColor('red');
            setIsDisabled(true)
        } else {
            setBackgroundColor('indigo');
        }
    }, [available_seats, enrolled_seats]);

    const handleAddToCart = classItem => {
        setIsDisabled(true);
        console.log(classItem);
        if (user && user.email) {
            const cartItem = { classItemId: _id, image, class_name, price, email: user.email }
            fetch('https://b7a12-summer-camp-server-side-johuruljoy69.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
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
        <div className="card w-100 text-white border border-purple-900 shadow-xl" style={{ backgroundColor }}>
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
                    {
                        isAdmin || isInstructor ? "" : <button onClick={() => handleAddToCart(allClass)} disabled={isDisabled} className="btn bg-orange-500 hover:bg-orange-800 border-b-4 text-white">Add To Booking</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllClassesCard;