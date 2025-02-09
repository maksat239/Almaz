const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Браузерден келетін JSON сұраныстарды қабылдау
app.use(express.json());

// OpenAI API кілтін қорғалған түрде сақтау
const apiKey = 'sk-z9vAC3kfHmY8rgg0mxI4UdP9n-F81x';  // API кілтін осында қауіпсіз сақтау керек

app.post('/ask', async (req, res) => {
    const userInput = req.body.input;

    // OpenAI API-ға сұраныс жіберу
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: userInput,
            max_tokens: 150
        })
    });

    const data = await response.json();
    res.json({ response: data.choices[0].text.trim() });
});

// Серверді іске қосу
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
