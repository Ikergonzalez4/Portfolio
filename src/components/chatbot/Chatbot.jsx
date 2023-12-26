import React, { useState } from 'react';
/*import { sendMessage } from './Chatbot-service.js';*/
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isFirstMessage, setIsFirstMessage] = useState(true);

    const predefinedAnswers = {
        'hi': 'Hello!',
        'hello': 'Hi!',
        'how are you?': 'Fine, thanks!',
        'what is your name?': 'My name is Iker Gonzalez',
        'what is your age?': 'I am 19 years old',
        'what is your favorite color?': 'My favorite color is blue',
        'what is your favorite food?': 'My favorite food is electricity',
        'what is your favorite movie?': 'My favorite movie is Star Wars',
        'what is your favorite song?': 'My favorite song is Bohemian Rhapsody',
        'what is your favorite book?': 'My favorite book is Harry Potter',
        'what is your favorite sport?': 'My favorite sport is soccer',
        'what is your favorite animal?': 'My favorite animal is a dog',
        'what is your favorite subject?': 'My favorite subject is math',
        'what is your favorite programming language?': 'My favorite programming language is JavaScript',
        'what is your favorite IDE?': 'My favorite IDE is VS Code',
        'what is your favorite framework?': 'My favorite framework is React',
        'what is your favorite operating system?': 'My favorite operating system is Windows',
        'what is your favorite browser?': 'My favorite browser is Firefox',
        'what is your favorite website?': 'My favorite website is YouTube',
        'what is your favorite social network?': 'My favorite social network is Discord',
        'what is your favorite app?': 'My favorite app is Spotify',
        'what is your favorite emoji?': 'My favorite emoji is 😂',
        'what are your hobbies?': 'My hobbies are programming, playing videogames and listening to music',
    };

    const handleSend = async () => {
        let response;

        const lowerCaseInput = input.toLowerCase();


        if (input.toLowerCase() in predefinedAnswers) {
            response = predefinedAnswers[input.toLowerCase()];
        } else if (input.toLowerCase().includes('study') || input.toLowerCase().includes('studies')) {
            response =[
                "2020-2022: Computer technician certificate",
                <br />,
                "2022-2024: Superior Technician in multiplatform application development",
                <br />,
                "Current: Software Developer Diploma"];
        } else {
            response = "I don't have any answer to this :(";
        }

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