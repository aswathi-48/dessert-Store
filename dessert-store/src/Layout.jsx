// Component/Layout/Layout.jsx
import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
