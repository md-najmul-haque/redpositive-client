import React from 'react';

const Table = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Hobbies</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td><button className="btn btn-sm">Update</button> <button className="btn btn-sm mr-5">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;