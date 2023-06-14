import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";


const InstructorHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <Helmet>
                <title>JSSA | Instructor Home</title>
            </Helmet>
            <h2 className="text-4xl text-white">Welcome Back {user.displayName}</h2>
        </div>
    );
};

export default InstructorHome;