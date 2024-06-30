/* App.js */
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import UserEdit from './pages/UserEdit';
import UsersList from './pages/UserList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<UserList />} />
        <Route path={"/users/:id"} element={<UserDetail/>} />
        <Route path={"/users/:id/edit"} element={<UserEdit/>} />
        <Route path={"/users/"} element={<UsersList/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;