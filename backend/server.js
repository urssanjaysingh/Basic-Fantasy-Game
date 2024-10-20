const express = require("express");
const { connectDB } = require("./config/db");
const { PORT } = require("./config");

connectDB();

const app = express();

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${PORT}`);
});
