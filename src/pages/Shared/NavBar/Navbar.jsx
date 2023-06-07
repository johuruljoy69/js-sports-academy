
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';




const Navbar = () => {



    const navItems = <>
        <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/instructors">Instructors</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/classes">Classes</NavLink>
        {/* {
            user?.email? <><NavLink className={({ isActive }) => (isActive ? 'text-blue-700' : '')} to="/my-toys">My Toys</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'text-blue-700' : '')} to="/add-toy">Add A Toy</NavLink></> : ""
        } */}
        <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/dashboard">Dashboard</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/contact"><span className='flex items-center'><FaShoppingCart /><div className="badge badge-secondary ml-1">+99 </div></span></NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/contact">Contact</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/login">Login</NavLink>
    </>

    return (
        <div className="navbar h-24 text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-5 shadow bg-gray-800 space-y-2  rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                {/* <img className='rounded-full w-14'  alt="logo" /> */}
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300"> Playfit Sports Academy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-semibold flex gap-5 items-center">
                    {navItems}
                </ul>
            </div>
            {/* <div className="navbar-end flex items-center space-x-2">

                {user ?
                    <button onClick={handleLogout} className='px-5 py-2 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-700 '>Logout</button> :
                    <Link to='/login'><button className='px-5 py-2 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-700'>Login</button></Link>
                }
            </div> */}
        </div>
    );
};

export default Navbar;