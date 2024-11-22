// /Users/jonatas/Documents/Projects/i-sommelier-react/backend/src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});