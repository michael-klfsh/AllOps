import React, { useState, useEffect, SetStateAction } from "react";

const TimestampPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const TOKEN = "6744654252:AAEy7l_q7mSiWRj4HoRdshNo9Ez7U1HjpzI"; // Replace with your actual token
    const base_url = `https://api.telegram.org/bot${TOKEN}/getUpdates`;

    const fetchMessages = () => {
      fetch(base_url, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          const newMessages = data.result.map((msg) => ({
            text: msg.message.text,
            timestamp: new Date(msg.message.date * 1000).toLocaleString(),
          }));
          setMessages(newMessages);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 10000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h1>Timestamp List</h1>
      <ul>
        {messages
          .slice()
          .reverse()
          .map((message, index) => (
            <li key={index}>
              <strong>Message:</strong> {message.text} - <strong>Time:</strong>{" "}
              {message.timestamp}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TimestampPage;
