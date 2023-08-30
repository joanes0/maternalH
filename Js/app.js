
// Your Twilio account SID and Auth Token
// const accountSid = 'AC30a0fc9d0c22278f3edac483faca9079';
// const authToken = '[876c1fa8628e16e5bae1600024fab1d8]';
//const client = require('twilio')(accountSid, authToken);
const accountSid = 'AC69ab590553c6268a8c7d07297a27a20d';
const authToken = '[643cd286fa44c5d97175249804e76589]';
//const sendMessage = document.querySelector('#sendMessage')

//const sendMessage = document.querySelector("clickExample");
// Function to send a message
function sendMessage(phoneNumber) {
    const message = 'Hello from Mama Care App!';

    // const client = require('twilio')(accountSid, authToken);

    // client.messages
    //     .create({
    //         body: ' Ahoy!',
    //         from: '+18507878659',
    //         to: '+254723012054'
    //     })
    //     .then(messages => console.log(message.sid))

    fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${btoa(`${accountSid}:${authToken}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `To=${encodeURIComponent(phoneNumber)}&From=your_twilio_phone_number&Body=${encodeURIComponent(message)}`
    })
    .then(response => response.json())
    .then(message => console.log(`Message sent to ${phoneNumber}. Message SID: ${message.sid}`))
    .catch(error => console.error(`Error sending message: ${error.message}`, error));
}

// Event listener for the "Send Message" button
document.getElementById('sendMessage').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber) {
        sendMessage(phoneNumber);
    } else {
        alert('Your message has been sent');
    }
});

// Event listener for the "Make Call" button (placeholder)
document.getElementById('makeCall').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber) {
        // Placeholder for making a call, add your code here
        
        alert(`Calling ${phoneNumber}...`);
    } else {
        alert('Calling Your Health Care pROVIDER');
        // alert('0793687179.');
    }
});

// function UserAction() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//          if (this.readyState == 4 && this.status == 200) {
//              alert(this.responseText);
//          }
//     };
//     xhttp.open("POST", "Your Rest URL Here", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send("Your JSON Data Here");
// }
// <button type="submit" onclick="UserAction()">Search</button>

