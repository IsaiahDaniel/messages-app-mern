const express = require('express');
const app = express();

const dotenv = require("dotenv");

dotenv.config();

const connectDB = require('./config/db');

connectDB();

app.use("/api/v1/posts", require("./routes/postsRoute"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT} in ${process.env.NODE_ENV}`);
});