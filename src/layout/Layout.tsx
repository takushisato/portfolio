import React from "react";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import "../assets/main.css";

interface LayoutProps {
  children: React.ReactNode; // childrenの型を定義
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="App">
      <Header />
      {/* ページごとのコンテンツ */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
