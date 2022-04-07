class WebSocketService {
    static instance = null;
    callbacks = {};

    static getInstance() {
        if (WebSocketService.instance === null) {
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;
    }

    constructor() {
        this.socket = null;
        this.listeners = {};
    }

    connect(url) {
        this.socket = new WebSocket(url);
        
        this.socket.onopen = () => {
            console.log('WebSocket connected');
        };

        this.socket.onmessage = e => {
            console.log('WebSocket message');
        };

        this.socket.onerror = e => {
            console.log(e.message);
        }

        this.socket.onclose = e => {
            console.log('WebSocket closed');
            this.connect()
        }
    }

    socketNewMessage(message) {
        
    }

}