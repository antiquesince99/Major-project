import React from 'react';
import { Outlet } from 'react-router-dom';

const User = () => {
  return (
    <div>
        UserComponent
        <Outlet></Outlet>
    </div>
  )
};

export default User;
