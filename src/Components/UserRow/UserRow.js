import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const { _id, name, phone, email, hobby } = user

    const handleDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    toast.success("User data deleted successfully")

                } else {
                    toast.error("Failed to deleted user data. Please try again later")
                }
            })

    }


    return (
        <tr>
            <th>{_id ? _id : ''}</th>
            <td>{name ? name : ''}</td>
            <td>{phone ? phone : ''}</td>
            <td>{email ? email : ''}</td>
            <td>{hobby ? hobby : ''}</td>
            <td>
                <button className="btn btn-sm">Update</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm mr-5">Delete</button>
            </td>
        </tr>
    );
};

export default UserRow;