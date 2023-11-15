import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import NewBookingsRow from "./NewBookingsRow";
import Swal from "sweetalert2";

const NewBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/newBookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, []);

    const handleDelete = id => {
        fetch(`http://localhost:5000/newBookings/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                console.log(data)
                if(data.deletedCount > 0){
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                    if (result.isConfirmed) {
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success"
                        });
                      }
                }
              });

        })
    }

    const handleUpdate = id => {
        fetch(`http://localhost:5000/newBookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Confirmed'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id);
                const update = bookings.find(booking => booking._id === id);
                update.status = 'Confirm'
                const newUpdate = [update, ...remaining];
                setBookings(newUpdate);
            }
        })
    }

    return (
        <div className="w-4/5 mx-auto">
            <h1>New bookings. {bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking=> <NewBookingsRow key={booking._id} booking={booking}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                            ></NewBookingsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewBookings;
