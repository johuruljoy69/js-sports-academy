import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddAClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.classImage[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { class_name, instructor, email, available_seats, enrolled_seats, price, details} = data;
                    const classItem = { class_name, instructor, email, available_seats, enrolled_seats, price: parseFloat(price), details, image: imgURL }
                    // console.log(classItem)
                    axiosSecure.post('/classes', classItem)
                        .then(data => {
                            console.log('after posting new Class item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1000
                                })
                            }
                        })
                }
            })

    };

    return (
        <div className=" w-[800px] mx-auto bg-slate-300 p-10">
            <div className="text-center w-2/3 mb-10 mx-auto space-y-3">
                <p className="text-orange-500 text-xl font-semibold">Whats New</p>
                <h1 className="md:text-5xl text-slate-600 font-bold uppercase border-y-4 border-slate-400 py-4 ">Add A Class</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("class_name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                    {errors.class_name && <p className="text-red-500 text-xs italic">Class name is required</p>}
                </div>
                {/* row-2 */}
                <div className="flex items-center my-4">
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Class Image*</span>
                        </label>
                        <input type="file" {...register("classImage", { required: true })} className="file-input file-input-bordered w-full " />
                        {errors.classImage && <p className="text-red-500 text-xs italic">Class Image is required</p>}
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                        {errors.price && <p className="text-red-500 text-xs italic">Price is required</p>}
                    </div>
                </div>
                {/* row-3 */}
                <div className="flex my-4">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input type="text"
                            defaultValue={user?.displayName}
                            placeholder="Instructor Name"
                            readOnly
                            {...register("instructor", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                        {errors.instructor && <p className="text-red-500 text-xs italic">Instructor Name is required</p>}
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="text"
                            defaultValue={user?.email}
                            placeholder="Instructor Email"
                            readOnly
                            {...register("email", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                        {errors.email && <p className="text-red-500 text-xs italic">Instructor Email is required</p>}
                    </div>
                </div>
                {/* row-4 */}
                <div className="flex my-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats*</span>
                        </label>
                        <input type="number" {...register("available_seats", { required: true })} placeholder="Available Seats" className="input input-bordered w-full " />
                        {errors.available_seats && <p className="text-red-500 text-xs italic">Available Seats Number is required</p>}
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Enrolled Seats*</span>
                        </label>
                        <input type="number" {...register("enrolled_seats", { required: true })} placeholder="Enrolled Seats" className="input input-bordered w-full " />
                        {errors.enrolled_seats && <p className="text-red-500 text-xs italic">Enrolled Seats is required</p>}
                    </div>
                </div>
                {/* row-5 */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Details</span>
                    </label>
                    <textarea {...register("details")} className="textarea textarea-bordered h-24" placeholder="Class Details In Here"></textarea>
                </div>
                <div className="text-center mt-6">
                    <input className="btn bg-orange-500 border border-b-4 w-full hover:bg-orange-800 text-white" type="submit" value="Add A Class" />
                </div>
            </form>
        </div>
    );
};

export default AddAClass;