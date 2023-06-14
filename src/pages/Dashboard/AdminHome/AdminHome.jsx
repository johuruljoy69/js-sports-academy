import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div className="w-[700px] bg-slate-300 p-10 text-center">
            <Helmet>
                <title>JSSA | Admin Home</title>
            </Helmet>
            <div className="text-center w-3/4 mb-10 mx-auto space-y-3">
                <h1 className="md:text-3xl text-slate-600 font-bold uppercase border-y-4 border-slate-400 py-4 ">Admin Information</h1>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h2 className="font-semibold text-2xl">{user.displayName}</h2>
                    <img src={user.photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AdminHome;