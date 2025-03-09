import React, { useState } from "react";
import "./HelperChat.css";

const HelperChat = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            type: "bot",
            text: "Hi there! 👋 How can I help you today?",
            options: [
                "How do I create a profile?",
                "How do job applications work?",
                "What are the subscription plans?",
                "Other question",
            ],
        },
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = (text) => {
        // Add user message
        setMessages((prev) => [...prev, { type: "user", text }]);

        // Simulate bot response
        setTimeout(() => {
            let botResponse = {
                type: "bot",
                text: "Thanks for your question! Let me help you with that.",
                options: [
                    "Ask another question",
                    "Contact support",
                    "Close chat",
                ],
            };

            // Customize response based on predefined options
            if (text === "How do I create a profile?") {
                botResponse.text =
                    'Creating a profile is easy! Just click the "Create Your Profile" button and follow our simple step-by-step process. We\'ll guide you through everything.';
            } else if (text === "How do job applications work?") {
                botResponse.text =
                    "Once your profile is set up, you can apply to jobs with a single click. Employers will be able to see your profile and contact you directly.";
            } else if (text === "What are the subscription plans?") {
                botResponse.text =
                    "We offer various plans for both job seekers and employers. Check out our Pricing section for detailed information about each plan.";
            }

            setMessages((prev) => [...prev, botResponse]);
        }, 1000);

        setInputValue("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            handleSendMessage(inputValue);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="helper-chat">
            <div className="chat-header">
                <h3>OnlyJobs Helper</h3>
                <button className="close-button" onClick={onClose}>
                    ×
                </button>
            </div>

            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.type}`}>
                        {message.type === "bot" && (
                            <div className="bot-avatar">🤖</div>
                        )}
                        <div className="message-content">
                            <p>{message.text}</p>
                            {message.options && (
                                <div className="message-options">
                                    {message.options.map((option, i) => (
                                        <button
                                            key={i}
                                            onClick={() =>
                                                handleSendMessage(option)
                                            }
                                            className="option-button"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="chat-input">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default HelperChat;
