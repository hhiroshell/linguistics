var websocket;

function getWSUri() {
    return "ws://" + location.host + "/linguistics/websocket";
}

function connectSocket() {
    if ('WebSocket' in window) {
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

function sendMessage(message) {
    websocket.send(message);
}
