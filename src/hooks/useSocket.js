import { useEffect, useMemo, useState } from "react";

const { useDispatch, useSelector } = require("react-redux");
const { chatSetSocket, chatSetOnline, chatSetCurrentMessages, chatAddMessage, chatStartLoading, chatFinishLoading } = require("../actions/chat");

export const useSocket = (userProfe = '', userPatient = '') => {
    const dispath = useDispatch()
    const { email } = useSelector(state => state.auth)
    // profe + patient
    // quit @ . - _ . 
    const roomName = userProfe.replace(/[@.\-_]/g, '') + userPatient.replace(/[@.\-_]/g, '');
        
    const ws = useMemo(() => {
        console.log(roomName)
        // return new WebSocket(`ws://127.0.0.1:8000/ws/chat/${roomName}/`)
        return new WebSocket(`wss://ayudat-backend.herokuapp.com/ws/chat/${roomName}/`)
    }, [roomName])

    const [online, setOnline] = useState(false);

    useEffect(() => {
        dispath(chatStartLoading())
        return () => {
            ws.close()
        }
    }, [])

    ws.onopen = (data) => {
        dispath(chatSetSocket(ws));
        setOnline(true);
        dispath(chatFinishLoading())
        console.log("Socket connected")
    };

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.typeFront === 'chat_started') {
            data.messages.pop()
            const messageToPush = data.messages == '' ? [] : data.messages;
            dispath(chatSetCurrentMessages(messageToPush.map(message => JSON.parse(message.replace(/'/g, '"')))));
        }

        if (data.typeFront === 'chat_message') {
            console.log(data)
            dispath(chatAddMessage({ ...data, sender: data.from === email ? 0 : 1 }));
        }

    };

    ws.onclose = () => {
        console.log("Socket closed")

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
