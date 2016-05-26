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
        $("#progress" + pid).text(data.processed + '/' + data.pieces);
        $("#author" + pid).text(data.author);
        $("#piece" + pid).text(data.piece);
        var label = $("#tileLabel" + pid);
        if (label.hasClass('partition-indicator-avatar not-running')) {
            label.removeClass('partition-indicator-avatar not-running');
            label.addClass('partition-indicator-avatar running');
        }
    } else if (data.type == "result") {
        vm.addLap({
            elapsed: data.elapsed,
            partitions: data.partitions,
            threads: data.threads,
            jobid: data.jobid
        });
        vm.handleOpen();
        vm.disableControls = true;

        for (var i = 0; i < 8; i++) {
            $("#progress" + i).text('- / -');
            $("#author" + i).text('-----------------------');
            $("#piece" + i).text('-----------------------');
            var label = $("#tileLabel" + i);
            if (label.hasClass('partition-indicator-avatar running')) {
                label.removeClass('partition-indicator-avatar running');
                label.addClass('partition-indicator-avatar not-running');
            }
        }

        $.ajax({
            url: 'resources/Controller/Clear',
            method: 'DELETE',
            async: true,
            success: function(message) {
                vm.handleClose();
                vm.disableControls = false;
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
