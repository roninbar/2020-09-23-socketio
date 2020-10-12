const incoming = document.getElementById('incoming');
const outgoing = document.getElementById('outgoing');

const socket = io();

socket.on('message', function ({ username, message }) {
    incoming.value += `${username}: ${message}\n`;
});

document.querySelector('#connect form').addEventListener('submit', function (event) {
    event.preventDefault();
    const { value: username } = document.querySelector('#username');
    document.querySelector('h1').innerText = `Type away, ${username}...`;
    document.querySelector('#connect').classList.add('hide');
    document.querySelector('#messages').classList.remove('hide');
});

document.querySelector('#messages form').addEventListener('submit', function (event) {
    event.preventDefault();
    const { value: username } = document.querySelector('#username');
    socket.emit('message', { username, message: outgoing.value });
    outgoing.value = '';
});
