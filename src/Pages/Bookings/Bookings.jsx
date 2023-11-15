import React from "react";
import { useLoaderData } from "react-router-dom";
import Booking from "./Booking";

const Bookings = () => {
    const bookings = useLoaderData();

    return (
        <div className="w-4/5 mx-auto">
            <h1>Bookings</h1>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Img</th>
                            <th>Service Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>{/* row 1 */}

                        {
                            bookings.map(booking => <Booking key={booking._id} booking={booking}></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
