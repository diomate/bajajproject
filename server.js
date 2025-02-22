const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Backend Server is Running!');
});

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const alphabets = data.filter(item => /^[A-Za-z]+$/.test(item));
    const numbers = data.filter(item => /^[0-9]+$/.test(item));

    res.json({
        is_success: true,
        user_id: "your_user_id",
        email: "your_email@example.com",
        roll_number: "your_roll_number",
        numbers: numbers,
        alphabets: alphabets
    });
});

// Change the port number here
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
