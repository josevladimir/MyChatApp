var users = require('./users');

module.exports = function(io){
    io.on('connection',function(socket){
        console.log('Nuevo Usuario Conectado');
        addUser(socket);
        disconnectUser(socket);
        newMessage(socket);
    });
}

function addUser(socket){
    socket.on('username',function(data){
        socket.username = data.username;
        users.push(data.username);
        updateUsers(socket);
    });
}

function updateUsers(socket){
    socket.emit('updateUsers',{users});
    socket.broadcast.emit('updateUsers',{users});
}

function disconnectUser(socket){
    socket.on('disconnect',function(){
        if(socket.username){
            users.splice(users.indexOf(socket.username),1);
        }
        updateUsers(socket);
    });
}

function newMessage(socket){
    socket.on('newMessage',function(data){
        socket.emit('updateMessages',data);
        socket.broadcast.emit('updateMessages',data);
    });
}