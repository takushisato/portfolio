import React from "react";
import Header from "./block/Header";
import Footer from "./block/Footer";
import "../assets/css/main.css";

interface LayoutProps {
  children: React.ReactNode; // childrenの型を定義
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="">
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
