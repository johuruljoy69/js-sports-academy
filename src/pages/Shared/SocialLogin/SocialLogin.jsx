import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const { googleSign } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSign = () => {
        googleSign()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })
    }
    return (
        <div className="pb-5 pt-3">
            <div className="divider">OR</div>
            <div className="w-full text-center">
                <button onClick={handleGoogleSign} className="btn text-white border-0 bg-orange-500 hover:bg-orange-700">
                    <FaGoogle /> <p>Sign Up With Google</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;