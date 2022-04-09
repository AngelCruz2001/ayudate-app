import { useMemo, useState } from "react";

const { useDispatch, useSelector } = require("react-redux");
const { chatSetSocket, chatSetOnline, chatSetCurrentMessages, chatAddMessage } = require("../actions/chat");

export const useSocket = (userProfe = '', userPatient = '') => {
    const dispath = useDispatch()
    const { email } = useSelector(state => state.auth)
    // profe + patient
    // quit @ . - _ . 
    const roomName = userProfe.replace(/[@.\-_]/g, '') + userPatient.replace(/[@.\-_]/g, '');
    const ws = useMemo(() => {
        console.log(roomName)
        // return new WebSocket(`ws://127.0.0.1:8000/ws/chat/asdf/`)

        return new WebSocket(`ws://ayudat-backend.herokuapp.com/ws/chat/${roomName}/`)
    }, [roomName])
    const [online, setOnline] = useState(false);

    ws.onopen = (data) => {
        dispath(chatSetSocket(ws));
        setOnline(true);
        console.log("Socket connected")
    };

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.conversationId !== undefined) {
            dispath(chatSetCurrentMessages(data.messages));
        }

        if (data.type === 'chat_message') {
            console.log(data)
            dispath(chatAddMessage({ ...data, sender: data.from === email ? 0 : 1 }));
        }

    };

    ws.onclose = () => {
        dispath(chatSetSocket(null));
        setOnline(false);
        dispath(chatSetOnline(false));
    };

    const closeConnection = () => {
        ws.close();
    };

    const emitAMessage = (message) => {
        ws.send(JSON.stringify(message));
    };

    return { ws, online, closeConnection, emitAMessage };
}
