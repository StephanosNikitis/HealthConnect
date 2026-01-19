const express = require('express');
const app = express();
const router = require('./routes');
const connectDB = require('./database');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

app.use(cookieParser());

const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000'],
};

app.use(cors(corsOption));
app.use('/storage', express.static('storage'));

const PORT  = process.env.PORT || 5500;
connectDB();
app.use(express.json({limit: '8mb'}));
app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});