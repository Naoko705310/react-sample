import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ルートコンポーネントをインポート
import './index.css'; // TailwindCSSを読み込む


const root = ReactDOM.createRoot(document.getElementById("root")); // "root"にアプリをレンダリング
root.render(<App />);
