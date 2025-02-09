<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Жасанды Интеллект Чат</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            text-align: center;
            padding: 50px;
        }
        .chat-box {
            width: 80%;
            max-width: 600px;
            margin: auto;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 10px;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            height: 300px;
            overflow-y: scroll;
        }
        .input-box {
            width: 80%;
            padding: 10px;
            margin-top: 10px;
        }
        .send-btn {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .send-btn:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Жасанды Интеллектпен сөйлесу</h1>
    <div class="chat-box" id="chat-box"></div>
    <input type="text" id="user-input" class="input-box" placeholder="Сұрақ қойыңыз...">
    <button class="send-btn" onclick="sendMessage()">Жіберу</button>

    <script>
        async function sendMessage() {
            const userInput = document.getElementById('user-input').value;
            const chatBox = document.getElementById('chat-box');
            
            if (userInput) {
                chatBox.innerHTML += `<div><strong>Сіз:</strong> ${userInput}</div>`;
                
                // Серверге сұраныс жіберу
                const response = await fetch('http://localhost:3000/ask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ input: userInput })
                });

                const data = await response.json();
                chatBox.innerHTML += `<div><strong>Жасанды Интеллект:</strong> ${data.response}</div>`;
                document.getElementById('user-input').value = '';
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        }
    </script>
</body>
</html>
