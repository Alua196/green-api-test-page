document.addEventListener('DOMContentLoaded', (event) => {

    function getSettings() {
        const idInstance = document.getElementById('idInstance').value;
        const apiTokenInstance = document.getElementById('apiTokenInstance').value;

        fetch(`https://api.green-api.com/waInstance${idInstance}/GetSettings/${apiTokenInstance}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('response').value = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                document.getElementById('response').value = error.toString();
            });
    }

    function getStateInstance() {
        const idInstance = document.getElementById('idInstance').value;
        const apiTokenInstance = document.getElementById('apiTokenInstance').value;

        fetch(`https://api.green-api.com/waInstance${idInstance}/GetStateInstance/${apiTokenInstance}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('response').value = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                document.getElementById('response').value = error.toString();
            });
    }

    function sendMessage() {
        const idInstance = document.getElementById('idInstance').value;
        const apiTokenInstance = document.getElementById('apiTokenInstance').value;
        const phoneNumber = document.getElementById('number1').value;
        const message = document.getElementById('sendMessage').value;

        if (!phoneNumber || !message) {
            alert('Phone number and message are required.');
            return;
        }

        const chatId = `${phoneNumber}@c.us`;

        fetch(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chatId,
                message
            })
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('response').value = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                document.getElementById('response').value = error.toString();
            });

    }

    function sendFileByUrl() {
        const idInstance = document.getElementById('idInstance').value;
        const apiTokenInstance = document.getElementById('apiTokenInstance').value;
        const phoneNumber = document.getElementById('number2').value;
        const fileUrl = document.getElementById('sendFileByUrl').value;
        const fileName = document.getElementById('fileName').value;

        if (!phoneNumber || !fileUrl || !fileName) {
            alert('Phone number, file URL, and file name are required.');
            return;
        }

        const chatId = `${phoneNumber}@c.us`;

        fetch(`https://api.green-api.com/waInstance${idInstance}/SendFileByUrl/${apiTokenInstance}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chatId,
                urlFile: fileUrl,
                fileName: fileName
            })
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('response').value = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                document.getElementById('response').value = error.toString();
            });
    }


    window.getSettings = getSettings;
    window.getStateInstance = getStateInstance;
    window.sendMessage = sendMessage;
    window.sendFileByUrl = sendFileByUrl;
});

