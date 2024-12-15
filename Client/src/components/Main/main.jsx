import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import  { Marked, marked } from 'marked';

const ChatbotApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [autoScroll, setAutoScroll] = useState(true);
  const chatContainerRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

  const handleUserMessage = async() => {
    if (inputValue.trim() === "") return;

    setMessages((prevMessages) => [...prevMessages, { text: inputValue, user: true }]);
    const botResponse = await generateBotResponse(inputValue);
    setInputValue("");
    setAutoScroll(true);
  };
  // const handleUserMessage = async () => {
  //   if (inputValue.trim() === "") return;
  
  //   setMessages((prevMessages) => [...prevMessages, { text: inputValue, user: true }]);
  //   try {
  //     const botResponse = await generateBotResponse(inputValue);
  //     setMessages((prevMessages) => [...prevMessages, { text: botResponse, user: false }]);
  //     setInputValue("");
  //     setAutoScroll(true);
  //   } catch (error) {
  //     console.error('Error generating bot response:', error);
  //     setMessages((prevMessages) => [...prevMessages, { text: "Error generating bot response", user: false }]);
  //     setInputValue("");
  //     setAutoScroll(true);
  //   }
  // };
  
  

  const generateBotResponse = async (userMessage) => {
    await fetch('http://localhost:8080/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_access_token'
      },
      body: JSON.stringify({
        message:userMessage
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      // Handle the response data
      console.log('Success:', data);
      setMessages((prevMessages) => [...prevMessages, { text:marked(data.result), user: false }]);
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
      return "check your connection";
    });
    
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleUserMessage();
    }
  };

  useEffect(() => {
    if (autoScroll && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      setAutoScroll(false);
    }
  }, [messages, autoScroll]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>JaiHind College ChatBot</h1>
        <div className={styles.profile_dropdown}>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png"
            alt="user"
            className={styles.profile_icon}
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className={styles.dropdown_menu}>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </nav>
      <div className={styles.content_container}>
        <div ref={chatContainerRef} className={styles.chat_container}>
          {messages.map((message, index) => (
            <div key={index} className={message.user ? styles.user_message : styles.bot_message} dangerouslySetInnerHTML={{ __html: message.text }} />
          ))}
        </div>
      </div>
      <div className={styles.input_container}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress} 
          placeholder="Type your message..."
          className={styles.input_field}
        />
        <button className={styles.enter_button} onClick={handleUserMessage}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default ChatbotApp;
