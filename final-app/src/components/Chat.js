import React, { useCallback, useRef, useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Chat = () => {
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [chatt, setChatt] = useState([]);
    const [chkLog, setChkLog] = useState(false);

    const ws = useRef(null); // WebSocket 연결 객체

    // WebSocket 메시지 수신 시 처리하는 함수
    useEffect(() => {
        if (ws.current) {
            ws.current.onmessage = (message) => {
                setChatt((prev) => [...prev, message.data]);
            };
        }
    }, [ws.current]);

    const GlobalStyle = createGlobalStyle`
        ${reset}
    `;

    const webSocketLogin = useCallback(() => {
        ws.current = new WebSocket("ws://localhost:8080/ws/chat/websocket");

        ws.current.onopen = () => {
            console.log("WebSocket Connected");
        };

        ws.current.onclose = () => {
            console.log("WebSocket Disconnected");
        };
    }, []);

    const send = useCallback(() => {
        if (!chkLog) {
            if (name === "") {
                alert("Please enter your name.");
                document.getElementById("name").focus();
                return;
            }
            webSocketLogin();
            setChkLog(true);
        }

        if (msg !== '') {
            const data = {
                name,
                msg,
                date: new Date().toLocaleString(),
            };
            ws.current.send(JSON.stringify(data));
        } else {
            alert("Please enter a message.");
            document.getElementById("msg").focus();
            return;
        }
        setMsg("");
    }, [chkLog, name, msg, webSocketLogin]);

    const msgBox = chatt.map((item, idx) => (
        <div key={idx} className={item.name === name ? 'me' : 'other'}>
            <span><b>{item.name}</b></span> [ {item.date} ]<br/>
            <span>{item.msg}</span>
        </div>
    ));

    return (
        <>
            <GlobalStyle />
            <div id="chat-wrap">
                <div id='chatt'>
                    <h1 id="title">WebSocket Chatting</h1>
                    <br/>
                    <div id='talk'>
                        <div className='talk-shadow'></div>
                        {msgBox}
                    </div>
                    <input disabled={chkLog}
                        placeholder='Enter your name'
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div id='sendZone'>
                        <textarea id='msg' value={msg} onChange={(e) => setMsg(e.target.value)}
                            onKeyDown={(e) => { if (e.keyCode === 13) { send(); } }}
                        />
                        <input type='button' value='Send' id='btnSend' onClick={send} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;