import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLink = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            {user ? (
                <>
                    <li>
                        <Link to="/bookings">Bookings</Link>
                    </li>
                    <li>
                        <Link to="/add_service">Add Service</Link>
                    </li>
                    <li>
                        <Link to="/New_service">New Service</Link>
                    </li>
                </>
            ) : (
                ""
            )}
        </>
    );

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLink}</ul>
            </div>
            <div className="navbar-end">
                {user?.email ? <p>{user.email}</p> : ""}
                {user ? (
                    <a className="btn" onClick={handleLogOut}>
                        <Link to="/login">Logout</Link>
                    </a>
                ) : (
                    <a className="btn">
                        <Link to="/login">Login</Link>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Header;
