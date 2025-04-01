// 1. Import statements go at the top of the file
import React from 'react';                // Import React library
import WelcomeMessage from './WelcomeMessage';  // Import your new component

function WelcomeMessage() {
    return (
        <div>
            <h1>“Hello everyone, I am learning React at ALX!”.</h1>
            <p>This is a simple JSX component.</p>
            <p>"I am learning about JSX!"</p>
        </div>
    );
}

export default WelcomeMessage;