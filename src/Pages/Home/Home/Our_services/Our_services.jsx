import React, { useEffect, useState } from "react";
import Service from "./Service";

const Our_services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/services`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className="my-10">
            <h1 className="text-center text-3xl font-bold">
                All Our Services
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {services.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Our_services;
