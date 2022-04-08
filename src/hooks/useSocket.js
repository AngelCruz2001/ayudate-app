import { useMemo, useState } from "react";

const { useDispatch } = require("react-redux");
const { chatSetSocket, chatSetOnline, chatSetCurrentMessages } = require("../actions/chat");

export const useSocket = (userProfe, userPatient) => {
    const dispath = useDispatch()
    console.log(userProfe, userPatient)
    // profe + patient

    const ws = new WebSocket(`ws://127.0.0.1:8000/ws/chat/asdfasdfSDA/`)
    const [online, setOnline] = useState(false);

    ws.onopen = (data) => {
        dispath(chatSetSocket(ws));
        setOnline(true);
        console.log("Socket connected")
        const dataFormated = JSON.stringify(data);
        console.log(data)

        dispath(chatSetCurrentMessages([]));
    };

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(data);
        dispath(chatSetCurrentMessages(data));
    };

    ws.onclose = () => {
        dispath(chatSetSocket(null));
        setOnline(false);
        dispath(chatSetOnline(false));
    };

    const closeConnection = () => {
        ws.close();
    };


    return { ws, online, closeConnection };
}
