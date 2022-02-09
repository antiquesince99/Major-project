import React from 'react';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return <div>
      admin component
      <Outlet></Outlet>
  </div>;
};

export default Admin;
