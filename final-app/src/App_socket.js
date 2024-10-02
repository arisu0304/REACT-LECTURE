import React, { useState, useEffect, useRef } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socket = useRef(null);

  useEffect(() => {

    console.log("연결");

    // WebSocket 서버에 연결
    socket.current = new WebSocket('ws://localhost:8000/ws/chat/websocket');

    // 서버에서 메시지를 수신할 때마다 호출
    socket.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    // 컴포넌트가 언마운트될 때 WebSocket 연결 종료
    return () => {
      // socket.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (input && socket.current) {
      // WebSocket을 통해 서버로 메시지 전송
      socket.current.send(input);
      setInput(""); // 입력 필드를 초기화
    }
  };

  return (
    <div className="App">
      <h1>WebSocket Chat</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
