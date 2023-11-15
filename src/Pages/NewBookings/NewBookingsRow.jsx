import React from "react";

const NewBookingsRow = ({ booking, handleDelete, handleUpdate }) => {
    const { img, name, price, date, _id, status } = booking;


    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>

            <td>{price}</td>
            <td>{date}</td>
            <th>
                {
                    status == 'Confirmed'? <span className="bg-green-200 px-2 py-1 text-green-500 rounded-full">Confirmed</span>: <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default NewBookingsRow;
