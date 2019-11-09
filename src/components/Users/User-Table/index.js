
import React from 'react';
import './user-table.css';
function UserTable(props) {
    console.log('user table ', props)
    return (
        <div className="container">
            <h2>{props.name}</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {

                        props.users.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td>{user.name}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    {user.isActive ? <td>Active</td> : <td>In Active</td>}
                                    <td><button type="button" className="btn btn-info" onClick={() => props.editUser(user)}>Edit</button></td>
                                    <td><button type="button" className="btn btn-danger" onClick={() => props.deleteUser(user)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;

