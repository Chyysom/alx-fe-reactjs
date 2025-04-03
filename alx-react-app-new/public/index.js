import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // If you have a CSS file for global styles
import App from './App'; // Assuming you have an App component
import reportWebVitals from './reportWebVitals'; // Optional, if you use web vitals

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you use web vitals:
reportWebVitals();
