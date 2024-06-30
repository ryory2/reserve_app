import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
    // 状態変数usersを定義。初期値は[]
    const [users, setUsers] = useState([]);
    // 状態変数loadingを定義。初期値はtrue
    const [loading, setLoading] = useState(true);
    // 状態変数errorを定義。初期値はnull
    const [error, setError] = useState(null);

    // 副作用を記載
    useEffect(() => {
        // fetchUsers関数を定義
        // ・axiosでゲットする。
        // ・setUsers関数を呼び出す。
        // ・setLoading関数を呼び出し、loading変数をfalseに設定
        // ・fetchUsers関数を呼び出す
        // 　【成功時】
        // 　　・setUsers関数を呼び出し、users状態変数に取得したユーザ情報を格納
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/users');
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // loading状態変数がtrueなら「<p>Loading...</p>」を返却して処理終了
    if (loading) return <p>Loading...</p>;
    // error状態変数がnullでないなら「<p>Error loading users: {error.message}」を返却して処理終了
    if (error) return <p>Error loading users: {error.message}</p>;

    //デフォルトの返却処理
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p>Name: {user.user_name}</p>
                        <p>Email: {user.mail}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
