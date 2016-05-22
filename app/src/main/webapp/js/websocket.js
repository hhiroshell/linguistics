function getWSUri() {
    return "ws://" + location.host + "/linguistics/websocket";
}

function connectSocket() {
    if ('WebSocket' in window) {
        var websocket = new WebSocket(getWSUri());
        websocket.onmessage = onMessage;
        websocket.onerror = onError;
        websocket.onclose = onClose;
        console.log('socket opened !');
    } else {
        console.log('websocket not supported...!');
    }
    return websocket;
}

function onError(evt) {
    console.log('error :' + evt);
}

function onClose(evt) {
    console.log('websocket closed :' + evt.code + ":" + evt.reason);
}

function onMessage(evt) {
    var data = JSON.parse(evt.data);
    if (data.type == "progress") {
        var pid = data.partition_id;
        $("#progress" + pid).text(data.processed + ' / ' + data.pieces);
    } else if (data.type == "result") {
        vm.addLap({
            elapsed: data.elapsed,
            partitions: data.partitions,
            threads: data.threads,
            jobid: data.jobid
        });

        $.ajax({
            url: 'resources/Controller/Clear',
            method: 'DELETE',
            async: false,
            success: function(message) {
                alert('続けて実行できます');
            },
            error: function(xhr, status, err) {
                alert(xhr);
            }
        });
    }
}

function sendMessage(msg) {
    var ws = connectSocket();
    waitForSocketConnection(ws, function() {
        console.log("message sent!!!");
        ws.send(msg);
    });
}

function waitForSocketConnection(socket, callback) {
    setTimeout(function () {
        if (socket.readyState === 1) {
            console.log("Connection is made")
            if(callback != null){
                callback();
            }
            return;
        } else {
            console.log("wait for connection...")
            waitForSocketConnection(socket, callback);
        }
    }, 5); // wait 5 milisecond for the connection...
}
