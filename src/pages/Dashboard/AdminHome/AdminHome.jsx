import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className="text-4xl text-white">Welcome Back {user.displayName}</h2>
        </div>
    );
};

export default AdminHome;