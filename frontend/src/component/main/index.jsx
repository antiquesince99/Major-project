import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Main = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
};

export default Main;
