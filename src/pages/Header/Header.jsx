import { Link, NavLink } from "react-router-dom";
import { FaCar } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    };

    const links = <>
        <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EA001E] underline text-xl font-bold pr-4" : "text-xl font-bold pr-4"
        }>Home</NavLink>
        <NavLink to='/addProducts' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EA001E] underline text-xl font-bold pr-4" : "text-xl font-bold pr-4"
        }>Add Product</NavLink>
        <NavLink to='/mycart/cart' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EA001E] underline text-xl font-bold pr-4" : "text-xl font-bold pr-4"
        }>My Cart</NavLink>
        <NavLink to='/login'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#EA001E] underline text-xl font-bold" : "text-xl font-bold"
            }>Login</NavLink>
    </>

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                    <a className="text-2xl lg:text-3xl mr-1  font-bold text-[#EA001E]">D<span className="text-black">MOTORS</span></a>
                    <FaCar className="text-2xl lg:text-3xl text-[#EA001E]"></FaCar>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end ">
                {
                    user && <div>
                        <h2 className="text-black font-semibold text-sm  lg:text-lg pr-2">{user.displayName}</h2>
                    </div>
                }
                <label tabIndex={0} className="avatar online mr-2">
                    {user &&
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    }
                </label>
                {
                    user ?
                        <button onClick={handleLogOut} className="btn text-[#EA001E]">Logout</button>
                        :
                        <Link className="" to="/login">
                            <button className="btn text-[#EA001E]">Login</button>
                        </Link>
                }
            </div>



        </div>
    );
};

export default Header;