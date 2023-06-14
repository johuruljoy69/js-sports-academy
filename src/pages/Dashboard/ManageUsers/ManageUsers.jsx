import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const [isAdminSelected, setIsAdminSelected] = useState(false);
    const [isInstructorSelected, setIsInstructorSelected] = useState(false);


    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });

    const handleMakeAdmin = user => {
        fetch(`https://b7a12-summer-camp-server-side-johuruljoy69.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setIsAdminSelected(true);
                    setIsInstructorSelected(false);
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    const handleMakeInstructor = user => {
        fetch(`https://b7a12-summer-camp-server-side-johuruljoy69.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setIsAdminSelected(false);
                    setIsInstructorSelected(true);
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = user => {
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
                fetch(`https://b7a12-summer-camp-server-side-johuruljoy69.vercel.app/users/${user._id}`, {
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
    };

    return (
        <div className="bg-slate-300 p-10">
            <Helmet>
                <title>JSSA | All Users</title>
            </Helmet>
            <div className="text-center w-3/4 mb-10 mx-auto space-y-3">
                <h1 className="md:text-5xl text-slate-600 font-bold uppercase border-y-4 border-slate-400 py-4 ">Manage Users</h1>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="font-semibold bg-orange-900 text-white">
                        <tr>
                            <th> S/N </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photo} alt="Food item" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td >{user.email}</td>
                                <td >{user.role === 'admin' ? <button className="btn btn-ghost btn-xl bg-green-700 hover:bg-green-900 text-white">Admin</button> : <button onClick={() => handleMakeAdmin(user)} disabled={isInstructorSelected} className="btn btn-ghost btn-xl bg-orange-600 hover:bg-orange-900 text-white">Make Admin</button>}
                                </td>

                                <td >{user.role === 'instructor' ? <button className="btn btn-ghost btn-xl bg-green-700 hover:bg-blue-900 text-white">Instructor</button> : <button onClick={() => handleMakeInstructor(user)} disabled={isAdminSelected} className="btn btn-ghost btn-xl bg-purple-600 hover:bg-purple-950 text-white">Make Instructor</button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-xl rounded-full bg-red-800 hover:bg-black text-white"> <FaTrashAlt /> </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;