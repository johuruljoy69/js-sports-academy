import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendar, FaHome, FaUsers, FaBook } from 'react-icons/fa';
import { SiInstructure } from 'react-icons/si';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center h-100 3/4 mx-auto pt-10">
                <Outlet></Outlet>
                <div className="pt-10 pb-20">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-slate-300 text-black">
                    <li> <NavLink to="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500"> JS Sports <br /> Academy </NavLink> </li>
                    {
                        isAdmin ? (
                            <>
                                <li> <NavLink to="/dashboard/adminhome" ><FaHome /> Admin Home </NavLink> </li>
                                <li> <NavLink to="/dashboard/manageclasses" ><FaBook /> Manage Classes </NavLink> </li>
                                <li> <NavLink to="/dashboard/manageusers" ><FaUsers /> Manage Users </NavLink> </li>
                                {/* <li> <NavLink to="/dashboard/allusers" ><FaUsers /> All Users </NavLink> </li> */}
                            </>
                        ) : (
                            isInstructor ? (
                                <>
                                    <li> <NavLink to="/dashboard/instructorhome" ><FaHome /> Instructor Home </NavLink> </li>
                                    <li> <NavLink to="/dashboard/addclass" ><FaCalendar /> Add a Class </NavLink> </li>
                                    <li> <NavLink to="/dashboard/myclasses" ><FaCalendar /> My Classes </NavLink> </li>
                                </>
                            ) : (
                                <>
                                    <li> <NavLink to="/dashboard/userhome" ><FaHome /> Student Home </NavLink> </li>
                                    <li> <NavLink to="/dashboard/enrolledclasses" ><FaWallet /> My Enrolled Classes </NavLink> </li>
                                    <li> <NavLink to="/dashboard/paymenthistory" ><FaWallet /> Payment History </NavLink> </li>
                                    <li> <NavLink to="/dashboard/mydashboard" ><FaShoppingCart /> My Selected Classes <span className="badge badge-secondary"> +{cart?.length || 0} </span> </NavLink> </li>
                                </>
                            )
                        )
                    }
                    <div className="divider"></div>
                    <li> <NavLink to="/" ><FaHome /> Home </NavLink> </li>
                    <li><NavLink to='/instructors'><SiInstructure /> Our Instructors</NavLink></li>
                    <li><NavLink to='/classes'> <FaWallet /> Our Classes</NavLink></li>
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;