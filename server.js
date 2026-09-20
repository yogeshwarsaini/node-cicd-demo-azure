const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello my name is yogeshwar saini , recently joined microware technology as an devops engineer staing  -->  production ');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'UP'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
