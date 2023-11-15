import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Registration = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        form.reset();
        createUser(email, password)
        .then(res => {
            console.log(res.user);
            Swal.fire({
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500
              });

        })
        .catch(err => {
            console.log(err.message);
        })
        // const userInfo = {name, email, password, photo};
        // console.log(userInfo);


    }
    return (
        <div className=" min-h-screen bg-base-200">
            <form onSubmit={handleSignUp} className="card-body">
                <div className="w-1/3 mx-auto border-2 px-5 py-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
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
                            name="password"
                            placeholder="Password"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Registration</button>
                    </div>
                    <p className="p-3">Already have an account. Please <Link to='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Registration;
