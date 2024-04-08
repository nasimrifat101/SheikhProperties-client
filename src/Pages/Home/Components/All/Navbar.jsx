import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || window.pageYOffset; // Handle browser compatibility
            setIsScrolled(scrollPosition > 20)
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navLinks = <>
        <li>
            <NavLink
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-black underline" : ""
                }
                to="/"
            >
                <span className="font-semibold">Home</span>
            </NavLink>
        </li>

        <li>
            <NavLink
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-black underline" : ""
                }
                to='/allProperties'
            >
                <span className="font-semibold">All Properties</span>
            </NavLink>
        </li>

        <li>
            <NavLink
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-black underline" : ""
                }
                to='/savedProperties'
            >
                <span className="font-semibold">Saved Properties</span>
            </NavLink>
        </li>


    </>


    return (
        <>
            <div
                className={`navbar fixed w-full z-10  ${isScrolled ? "backdrop-blur-md duration-500" : "bg-gradient-to-r from-[#FFFAF0] via-[#FEFDF7] to-[#FDECC8]"
                    }`}
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-semibold text-xl">Sheikh Properties</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <p>{user?.displayName?.toUpperCase()}</p>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">

                                    <li><button onClick={() => { logOut() }}>Logout</button></li>
                                </ul>
                            </div>
                            :

                            <Link to='/login' className="btn btn-ghost">Login</Link>
                    }

                </div>
            </div>
        </>
    );
};

export default Navbar;