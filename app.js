const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const giftRoutes = require('./routes/giftRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api', giftRoutes);
app.use('/api',reviewRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));