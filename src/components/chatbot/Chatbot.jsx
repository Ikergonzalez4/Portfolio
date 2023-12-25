import React, { useState } from 'react';
import { sendMessage } from './chatbot-service.js';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isFirstMessage, setIsFirstMessage] = useState(true);

    const handleSend = async () => {
        const response = await sendMessage(input);
        setMessages([...messages, { text: input, from: 'user' }, { text: response, from: 'bot' }]);
        setInput('');
        setIsFirstMessage(false);
    };

    return (
        <div>
            {isOpen ? (
                <div className={`chat-container-chatbot ${isOpen ? 'open' : ''}`}>
                    <button className="close-chat" onClick={() => setIsOpen(!isOpen)}>X</button>
                    <div className="message-container">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.from}`}>
                                <span>{message.text}</span>
                            </div>
                        ))}
                    </div>
                    <div className={`input-container ${isFirstMessage ? 'first' : ''}`}>
                        <input 
                            value={input} 
                            onChange={e => setInput(e.target.value)} 
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    handleSend();
                                }
                            }} 
                        />
                        <button onClick={handleSend}>SEND</button>
                    </div>
                </div>
            ) : (
                <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>Chat</button>
            )}
        </div>
    );
};

export default Chatbot;