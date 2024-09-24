import React from "react";
import Header from "./block/Header";
import Footer from "./block/Footer";
import "../assets/css/main.scss";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="shutter"></div>
      <div className="">
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
