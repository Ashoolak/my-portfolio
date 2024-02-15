import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { FaPaperPlane, FaTimes, FaAngleUp, FaAngleDown } from 'react-icons/fa'; // For enhanced icons

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [spin, setSpin] = useState(false);

  const toggleChat = () => {
    setSpin(true); // Trigger the spin
    setTimeout(() => {
      setIsOpen(!isOpen);
      setSpin(false); // Reset the spin after the timeout
    }, 450); // Wait for the animation to finish
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const message = inputRef.current.value;
    if (message.trim() === '') return;
    setMessages([...messages, { text: message, sender: 'user' }]);
    inputRef.current.value = '';

    setIsTyping(true);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'This is a simulated response.', sender: 'bot' },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <Head>
        <title>Chatbot UI</title>
        <style>{`
          .chat-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #5c6ac4;
            color: white;
            cursor: pointer;
            position: fixed;
            bottom: 20px;
            right: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            transition: all 0.4s ease;
          }
          .chat-container {
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 350px;
            height: 40%; 
            background-color: white;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            transform: ${isOpen ? 'translateY(0)' : 'translateY(600px)'};
            overflow: hidden;
          }
          .chat-header {
            padding: 10px;
            background-color: #5c6ac4;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center; 
            position: relative; 
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
          }
          .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 10px;
            color: #333;
          }
          .chat-input {
            display: flex;
            padding: 10px;
            background-color: #f5f5f5;
            border-top: 1px solid #e0e0e0;
            color: #333;
          }
          .input-field {
            flex: 1;
            border: none;
            padding: 10px;
            border-radius: 20px;
            margin-right: 10px;
          }
          .send-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            background-color: #007bff;
            color: #4b5d9d;;
            border-radius: 50%;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 45px;
            height: 45px;
          }
          .send-btn:hover {
            background-color: #4b5d9d;
            color: white;
          }
          .chat-logo {
            width: 17%; // Adjust based on your logo's aspect ratio
            height: auto;
          }
          .close-btn {
            position: absolute;
            right: 10px; /* Position the close button 10px from the right */
            top: 50%;
            transform: translateY(-50%); /* Center the button vertically */
          }
          .spin {
            animation: spin 0.5s ease-in-out forwards;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </Head>
      <div className={`chat-btn ${spin ? 'spin' : ''}`} onClick={toggleChat}>
        {isOpen ? <FaTimes size="24" /> : <FaAngleUp size="24" />}
      </div>
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <img src="../../bot.png" alt="Logo" className="chat-logo" />
          </div>
          <div className="chat-messages">{}</div>
          <form onSubmit={sendMessage} className="chat-input">
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a message..."
              className="input-field"
            />
            <button type="submit" className="send-btn">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
