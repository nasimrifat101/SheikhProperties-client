import { Link, NavLink } from "react-router-dom";

const AdminNav = () => {
    const navs =
        <>
            <li><NavLink to={'/add-properties'}>Add Property</NavLink></li>
            <li><NavLink to={'/properties'}>Properties</NavLink></li>
            <li><NavLink to={'/clients'}>Clients</NavLink></li>
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-x-3">
                            {navs}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Dashboard</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        {navs}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNav;