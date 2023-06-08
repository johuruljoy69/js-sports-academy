import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        // .then(result => {
        //     const loggedUser = result.user;
        //     console.log(loggedUser);
        //     updateUserProfile(data.name, data.photoURL)
        //         .then(() => {
        //             const savedUser = {name: data.name, email: data.email}
        //             fetch('http://localhost:5000/users', {
        //                 method: 'POST',
        //                 headers: {
        //                     'content-type': 'application/json',
        //                 },
        //                 body: JSON.stringify(savedUser)
        //             })
        //             .then(res => res.json())
        //             .then(data => {
        //                 if(data.insertedId){ 
        //                     reset();
        //                     Swal.fire({
        //                         position: 'top-end',
        //                         icon: 'success',
        //                         title: 'User created successfully.',
        //                         showConfirmButton: false,
        //                         timer: 1500
        //                     });
        //                     navigate('/');        
        //                 }
        //             })

        //         })
        //         .catch(error => console.log(error))
        // })
    };

    return (
        <>
            <div className="hero min-h-screen text-white pt-10 pb-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?w=826&t=st=1686190012~exp=1686190612~hmac=899abbcf105cc841a305e10ad6e6eb8bb6bc34e81e7edecdcdc4cd3ac33a661a" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl">
                        <h2 className="text-3xl font-bold text-center">Sign Up Here!</h2>
                        {/* <img src="https://www.pngmart.com/files/3/Sign-Up-Button-PNG-Transparent.jpg" alt="" /> */}
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered bg-gray-800 border border-white" />
                                {errors.name && <span className="text-orange-500">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered bg-gray-800 border border-white" />
                                {errors.email && <span className="text-orange-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 25,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="Your Password" className="input input-bordered bg-gray-800 border border-white" />
                                {errors.password?.type === 'required' && <p className="text-orange-500">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-orange-500">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-orange-500">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-orange-500">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Confirm Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 25,
                                })} placeholder="Confirm Password" className="input input-bordered bg-gray-800 border border-white" />
                                {errors.password?.type === 'required' && <p className="text-orange-500">Password is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Your Photo URL" className="input input-bordered bg-gray-800 border border-white" />
                                {errors.photoURL && <span className="text-orange-500">Photo URL is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-500 border-0 hover:bg-orange-800 text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center text-xl pb-5"><small>Already have an account? <Link to="/Login"><span className="text-orange-500">Please Login</span></Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;