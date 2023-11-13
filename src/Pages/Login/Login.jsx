import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className=" min-h-screen bg-base-200">
            <form className="card-body">
                <div className="w-1/3 mx-auto border-2 px-5 py-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                <p className="p-3">New this site ? please <Link to='/registration'>Registration</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
