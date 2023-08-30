const accountSid = 'AC69ab590553c6268a8c7d07297a27a20d';
const authToken = '[643cd286fa44c5d97175249804e76589]';

const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: ' Ahoy!',
        from: '+18507878659',
        to: '+254723012054'
    })
    .then(messages => console.log(message.sid))