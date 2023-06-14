import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <Helmet>
                <title>JSSA | Admin Home</title>
            </Helmet>
            <h2 className="text-4xl text-white">Welcome Back {user.displayName}</h2>
        </div>
    );
};

export default AdminHome;