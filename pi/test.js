/**
 * Created by Натусик on 03.06.2014.
 */
var io = require('socket.io-client');
    socket = io.connect('http://robot.loc:8080');


socket.on('connect', function () {
    socket.on('message', function (msg) {
        // Добавляем в лог сообщение, заменив время, имя и текст на полученные
        console.log(msg);
        // При нажатии <Enter> или кнопки отправляем текст
    if (msg.event == 'messageReceived') {
        socket.send('Получил, отправил'+ msg);
    }
    });

});