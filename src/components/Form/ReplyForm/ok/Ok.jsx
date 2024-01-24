import React from 'react';
import './Ok.css';

function Ok({ onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h1>Success</h1>
                <p>Your message has been sent successfully!</p>
                <button className="close-button" onClick={onClose}>X</button>
            </div>
        </div>
    );
}

export default Ok;