import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
   

    const handleSubmitLoginInfo = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        login(email, password)
        .then(res => {
            console.log(res.user);
            navigate(location?.state ? location?.state : '/');
        })
        .catch(err => {
            console.log(err.message);
        })

    }

 

    return (
        <div className=" min-h-screen bg-base-200">
            <form onSubmit={handleSubmitLoginInfo} className="card-body">
                <div className="w-1/3 mx-auto border-2 px-5 py-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
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
                            name="password"
                            placeholder="Password"
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
