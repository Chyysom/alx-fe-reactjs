import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // ✅ Make sure this matches your App.jsx file
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
