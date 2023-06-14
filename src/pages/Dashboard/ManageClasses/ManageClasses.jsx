import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useClasses from "../../../hooks/useClasses";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";


const ManageClasses = () => {
    const [classes, , refetch] = useClasses();
    const [axiosSecure] = useAxiosSecure();
    const [isDisabled, setIsDisabled] = useState(false);

    const handleMakeApprove = classes => {
        fetch(`https://b7a12-summer-camp-server-side-johuruljoy69.vercel.app/classes/${classes._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classes)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setIsDisabled(true);
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Are You Approve this Class Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    const handleMakeDeny = classes => {
        fetch(`https://b7a12-summer-camp-server-side-johuruljoy69.vercel.app/classes/${classes._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classes)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setIsDisabled(true);
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Are You Deny this Class Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };


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
                axiosSecure.delete(`/classes/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
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
        <div className=" w-100 mx-auto bg-slate-300 p-10">
            <Helmet>
                <title>JSSA | Manage Class</title>
            </Helmet>
            <div className="text-center w-3/4 mb-10 mx-auto space-y-3">
                <h1 className="md:text-5xl text-slate-600 font-bold uppercase border-y-4 border-slate-400 py-4 ">Manage All Classes</h1>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.class_name}</td>
                                <td>{item.instructor}</td>
                                <td className="text-center">{item.available_seats}</td>
                                <td className="text-center">${item.price}</td>
                                <td>
                                    <button onClick={() => handleMakeApprove(classes)} disabled={isDisabled} className="btn btn-primary">Approve</button>
                                </td>
                                <td>
                                    <button onClick={() => handleMakeDeny(classes)} className="btn btn-primary">Deny</button>
                                </td>
                                <td>
                                    <button className="btn btn-primary">Feedback</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;