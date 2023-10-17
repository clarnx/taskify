import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main className="container py-2 px-4 px-md-5 mt-3">{children}</main>
    </>
  );
};

export default Layout;
