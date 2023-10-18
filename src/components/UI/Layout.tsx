import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main className="container pb-2 pt-3 px-4 px-md-5 mt-4">{children}</main>
    </>
  );
};

export default Layout;
