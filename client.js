var net = require('net');
let readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var HOST = '127.0.0.1';
var PORT = 6969;

rl.question('Enter host to connect to: (127.0.0.1)\t', (answer) => {
  HOST = answer;
  rl.close();
  connect();
});

function connect() {
  var client = new net.Socket();
  client.connect(PORT, HOST, function() {

      console.log('CONNECTED TO: ' + HOST + ':' + PORT);
      // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
      client.write('I am Chuck Norris!');

  });

  // Add a 'data' event handler for the client socket
  // data is what the server sent to this socket
  client.on('data', function(data) {

      console.log('DATA: ' + data);
      // Close the client socket completely
      client.destroy();

  });

  // Add a 'close' event handler for the client socket
  client.on('close', function() {
      console.log('Connection closed');
  });
}
