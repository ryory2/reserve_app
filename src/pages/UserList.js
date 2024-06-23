import React from 'react';
import { Link } from 'react-router-dom';

const users = [
    { id: 1, email: 'user1@example.com', name: 'User One' },
    { id: 2, email: 'user2@example.com', name: 'User Two' }
];

const UserList = () => {
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.email} - {user.name} -
                        <Link to={`/users/${user.id}`}>Details</Link> -
                        <Link to={`/users/${user.id}/edit`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
