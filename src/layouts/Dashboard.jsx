import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendar, FaHome } from 'react-icons/fa';
import { SiInstructure } from 'react-icons/si';
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center h-100 w-3/4 mx-auto pt-10">
                <Outlet></Outlet>
                <div className="pt-10 pb-20">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-slate-300 text-black">
                    <li> <NavLink to="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500"> JS Sports <br /> Academy </NavLink> </li>
                    <li> <NavLink to="/dashboard/adminhome" ><FaHome /> Admin Home </NavLink> </li>
                    <li> <NavLink to="/dashboard/manageclass" ><FaCalendar /> Manage Classes </NavLink> </li>
                    <li> <NavLink to="/dashboard/manageusers" ><FaCalendar /> Manage Users </NavLink> </li>

                    <div className="divider"></div>
                    <li> <NavLink to="/dashboard/instructorhome" ><FaHome /> Instructor Home </NavLink> </li>
                    <li> <NavLink to="/dashboard/addclass" ><FaCalendar /> Add a Class </NavLink> </li>
                    <li> <NavLink to="/dashboard/myclass" ><FaCalendar /> My Classes </NavLink> </li>
                    <li> <NavLink to="/dashboard/feedback" ><FaCalendar /> Feedback </NavLink> </li>
                    <li> <NavLink to="/dashboard/enrolled" ><FaShoppingCart /> Enrolled Students <span className="badge badge-secondary"> +{cart?.length || 0} </span> </NavLink> </li>

                    <div className="divider"></div>
                    <li> <NavLink to="/dashboard/studenthome" ><FaHome /> Student Home </NavLink> </li>
                    <li> <NavLink to="/dashboard/classes" ><FaWallet /> My Selected Classes </NavLink> </li>
                    <li> <NavLink to="/dashboard/classes" ><FaWallet /> My Enrolled Classes </NavLink> </li>
                    <li> <NavLink to="/dashboard/history" ><FaWallet /> Payment History </NavLink> </li>
                    <li> <NavLink to="/dashboard/mydashboard" ><FaShoppingCart /> My Cart <span className="badge badge-secondary"> +{cart?.length || 0} </span> </NavLink> </li>

                    <div className="divider"></div>
                    <li> <NavLink to="/" ><FaHome /> Home </NavLink> </li>
                    <li><NavLink to='/classes'> <FaWallet /> Our Classes</NavLink></li>
                    <li><NavLink to='/instructors'><SiInstructure /> Our Instructors</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;