var websocket;

function getWSUri() {
    return "ws://" + location.host + "/linguistics/websocket";
}

function connectSocket() {
    if ('WebSocket' in window){
        websocket = new WebSocket(getWSUri());
        websocket.onmessage = onMessage;
        websocket.onerror = onError;
        websocket.onclose = onClose;
        console.log('socket opened !');
    } else {
        console.log('websocket not supported...!');
    }
}

function onError(evt) {
    console.log('error :' + evt);
}

function onClose(evt) {
    console.log('websocket closed :' + evt.code + ":" + evt.reason);
}

function onMessage(evt) {
    //var data = JSON.parse(evt.data);
    alert(evt.data);
}

function sendMessage(message) {
    websocket.send(message);
}
