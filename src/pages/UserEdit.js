import React from 'react';
import { Link, useParams } from 'react-router-dom';

const users = [
    { id: 1, email: 'user1@example.com', name: 'User One' },
    { id: 2, email: 'user2@example.com', name: 'User Two' }
];

const UserEdit = () => {
    const { id } = useParams();
    const user = users.find(u => u.id === parseInt(id));

    if (!user) return <div>User not found</div>;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save changes here
        console.log('User updated');
    };

    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input type="email" defaultValue={user.email} />
                </div>
                <div>
                    <label>Name: </label>
                    <input type="text" defaultValue={user.name} />
                </div>
                <button type="submit">Save</button>
            </form>
            <Link to="/">Back to List</Link> -
            <Link to={`/users/${user.id}`}>Details</Link>
        </div>
    );
};

export default UserEdit;
