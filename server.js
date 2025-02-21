// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/bfhl', bfhlRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
