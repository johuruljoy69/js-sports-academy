import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <>
            <div className="hero min-h-screen text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://cdn.pixabay.com/photo/2021/08/25/12/45/phishing-6573326_1280.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl">
                        <h2 className="text-3xl font-semibold text-center">Login Here</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered bg-gray-800 border border-white" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,                                    
                                })} placeholder="Your Password" className="input input-bordered bg-gray-800 border border-white " />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-500 border-0 hover:bg-orange-800 text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center text-xl pb-5"><small>New user in here? <Link to="/signup"><span className="text-orange-500">Create an account</span></Link></small></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;