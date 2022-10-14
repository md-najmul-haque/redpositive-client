import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const { _id, name, phone, email, hobby } = user

    const handleDelete = id => {
        fetch(`http://localhost:5000/users${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast("User data deleted successfully")
    }


    return (
        <tr>
            <th>{_id}</th>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{hobby}</td>
            <td>
                <button className="btn btn-sm">Update</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm mr-5">Delete</button>
            </td>
        </tr>
    );
};

export default UserRow;