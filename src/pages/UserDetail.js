import React from 'react';
import { Link, useParams } from 'react-router-dom';

const users = [
    { id: 1, email: 'user1@example.com', name: 'User One' },
    { id: 2, email: 'user2@example.com', name: 'User Two' }
];

const UserDetail = () => {
    const { id } = useParams();
    const user = users.find(u => u.id === parseInt(id));

    if (!user) return <div>User not found</div>;

    return (
        <div>
            <h1>User Details</h1>
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>
            <Link to="/">Back to List</Link> -
            <Link to={`/users/${user.id}/edit`}>Edit</Link>
        </div>
    );
};

export default UserDetail;
