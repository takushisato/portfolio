import React from "react";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import "../assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface LayoutProps {
  children: React.ReactNode; // childrenの型を定義
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
