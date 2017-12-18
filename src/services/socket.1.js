import io from 'socket.io-client';
const socket = io('http://localhost:8000', {
    path: '/myownpath',
    autoConnect: true
});

function subscribeToMsg(cb) {
    // socket.open();
    console.log('subscribeToMsg');
    // socket.on('getsubscribeToMsg', data => cb(null, data));

    // socket.emit('subscribeToMsg', {msg: 'subscribing...'});
    
    socket.on('timer', timestamp => cb(null, timestamp));    
    socket.emit('subscribeToTimer', 1000);
}

function unSubscribeToMsg() {
    console.log('unSubscribeToMsg');
    socket.close();
}

function emitMsg(data) {
    socket.emit('subscribeToMsg', {msg: data.msg});
}

socket.on('disconnect', (reason) => {
    console.log(reason);
});

export {subscribeToMsg, unSubscribeToMsg, emitMsg};