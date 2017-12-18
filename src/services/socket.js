import io from 'socket.io-client';
import { error } from 'util';
const socket = io('http://localhost:8000', {
    autoConnect: false
});

function subscribeToMsg(cb) {
    socket.open();
    console.log('subscribeToMsg');
    
    socket.on('msgFromServer', data => cb(error, data));    
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