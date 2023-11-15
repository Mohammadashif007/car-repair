import React, { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Confirm_service = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { title, price, img,  } = service;

    const handleService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;

        const order = { name, email, date, price, title, img};

        fetch('http://localhost:5000/newBookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    };
    return (
        <div>
            <h1>Service : {title}</h1>
            <div className=" min-h-screen bg-base-200">
                <form onSubmit={handleService} className="card-body">
                    <div className="grid lg: grid-cols-2 gap-3">
                        <div className="form-control">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                defaultValue={user?.displayName}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="date"
                                name="date"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                defaultValue={user?.email}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="price"
                                defaultValue={price}
                                className="input input-bordered"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Confirm_service;
