import React from "react";
import Header from "./parts/Header";
import "../index.css";

interface LayoutProps {
  children: React.ReactNode; // childrenの型を定義
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="App">
      {/* ヘッダー */}
      <Header />

      {/* ページごとのコンテンツ */}
      <main>{children}</main>

      {/* フッター */}
      <footer>
        <p>© 2024 takushisato portfolio</p>
      </footer>
    </div>
  );
}

export default Layout;
