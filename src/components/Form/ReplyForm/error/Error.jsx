import React from 'react';
import './Error.css';

function Error() {
    return (
        <div className="modal">
            <div className="modal-content">
                <h1>Error</h1>
                <p>There was an error sending your message. Please try again.</p>
            </div>
        </div>
    );
}

export default Error;