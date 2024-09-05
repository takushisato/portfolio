import React from "react";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import "../assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface LayoutProps {
  children: React.ReactNode; // childrenの型を定義
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
      <Header />
      {/* ページごとのコンテンツ */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
