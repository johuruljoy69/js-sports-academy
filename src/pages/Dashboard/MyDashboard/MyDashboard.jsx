import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";


const MyDashboard = () => {
    const [cart, refetch] = useCart();
    // console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a12-summer-camp-server-side-johuruljoy69.vercel.app/carts/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="bg-slate-200 p-10">
            <Helmet>
                <title>JSSA | My Dashboard</title>
            </Helmet>
            <div className="uppercase font-semibold flex justify-evenly gap-7 md:h-14 items-center px-5 py-3 mb-5 border border-purple-700 rounded-md">
                <h3 className="md:text-2xl">Total Classes: {cart.length} </h3>
                <h3 className="md:text-2xl">Total Price: ${total} </h3>
                <Link to="/dashboard/payment"><button className="btn btn-sm border-0 text-white bg-orange-500 hover:bg-green-700">Pay Now</button> </Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="font-semibold bg-purple-900 text-white">
                        <tr>
                            <th> S/N </th>
                            <th>Class Photo</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Food item" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.className}
                                </td>
                                <td >${item.price}</td>
                                <td><Link to="/dashboard/singlepayment"><button className="btn btn-sm border-0 text-white bg-orange-500 hover:bg-green-700">Pay</button> </Link></td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xl rounded-full bg-red-800 hover:bg-black text-white"> <FaTrashAlt /> </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDashboard;