import React from "react";

const Service = ({service}) => {
    const {title, img, price, description, _id} = service;
    const handleBookService = id => {

        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions">
                    <button onClick={()=>handleBookService(_id)} className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
