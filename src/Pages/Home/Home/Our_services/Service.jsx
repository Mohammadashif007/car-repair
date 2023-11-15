import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Service = ({ service }) => {
    const { title, img, price, description, _id } = service;
    const handleBookService = (id) => {
        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(service),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your booking has been saved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions">
                    <button
                        onClick={() => handleBookService(_id)}
                        className="btn btn-primary"
                    >
                        Book Now
                    </button>
                    <Link to={`/confirm_service/${_id}`}>
                        <button className="btn btn-primary">
                            Book By Email
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
