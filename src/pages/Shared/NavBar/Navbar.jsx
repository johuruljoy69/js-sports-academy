import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const navItems = <>
        {
            isAdmin || isInstructor ? <><NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/instructors">Instructors</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/classes">Classes</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/dashboard/mydashboard">Dashboard</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/contact">Contact</NavLink> </> :
                <>
                    <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/instructors">Instructors</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/classes">Classes</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/dashboard/mydashboard"><span className='flex items-center'><FaShoppingCart /><div className="badge badge-secondary ml-1">+{cart?.length || 0} </div></span></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/contact">Contact</NavLink>
                </>
        }

    </>

    return (
        <div className="navbar h-24 text-white sticky top-0 z-50 bg-gray-800 p-4 ">
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
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300"> JSSA</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-semibold flex gap-5 items-center">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex items-center space-x-2">
                {user && <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={user.displayName}>
                    <label tabIndex={0} className=" btn-circle">
                        <img className='rounded-full w-10' src={user.photoURL} alt="user" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-60">
                        <li>
                            <a className="justify-between">
                                <h3>{user.displayName}</h3>
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><button onClick={handleLogout} className='btn btn-ghost text-purple-700 font-semibold rounded-lg '>Logout</button></li>
                    </ul>
                </div>}

                {user ?
                    <button onClick={handleLogout} className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg '>Logout</button> :
                    <Link to='/login'><button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;