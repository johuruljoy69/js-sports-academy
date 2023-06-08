import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from 'sweetalert2';


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                reset();
                Swal.fire({
                    title: 'User Login Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error.message))
    }

    return (
        <>
            <div className="hero min-h-screen text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://cdn.pixabay.com/photo/2021/08/25/12/45/phishing-6573326_1280.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl">
                        <img src="https://www.pngmart.com/files/3/Member-Login-Button-PNG-Clipart.png" alt="" />
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered bg-gray-800 border border-white" />
                                {errors.email && <span className="text-orange-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                })} placeholder="Your Password" className="input input-bordered bg-gray-800 border border-white " />
                                {errors.password?.type === 'required' && <p className="text-orange-500">Password is required</p>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-500 border-0 hover:bg-orange-800 text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center text-xl pb-5"><small>New user in here? <Link to="/signup"><span className="text-orange-500">Create an account</span></Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;