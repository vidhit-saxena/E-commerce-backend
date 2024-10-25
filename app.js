const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const giftRoutes = require('./routes/giftRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());


// Middleware
app.use(bodyParser.json());
app.use(cors());


const userProfileRoutes = require('./routes/userProfileRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const orderRoutes = require('./routes/orderRoutes');
const addressRoutes = require('./routes/addressRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const accountRoutes = require('./routes/accountRoutes');


// Routes
app.use('/api/profile', userProfileRoutes);
app.use('/api', giftRoutes);
app.use('/api',reviewRoutes);
app.use('/api', notificationRoutes);
app.use('/api', orderRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api', wishlistRoutes);
app.use('/api', userRoutes);    // All user-related routes
app.use('/api', productRoutes); // All product-related routes
app.use('/api', accountRoutes);




const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));