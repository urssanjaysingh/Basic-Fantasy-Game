const express = require("express");
const { connectDB } = require("./config/db");
const { PORT } = require("./config");
const { errorHandler } = require("./middlewares/errors.middleware");
const playerRoutes = require("./routers/players.router");
const teamRoutes = require("./routers/teams.router");
const cors = require("cors");

connectDB();

const app = express();

const corsOptions = {
    origin: "https://basic-fantasy-game.onrender.com",
    methods: "GET,POST",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(playerRoutes);
app.use(teamRoutes);

app.use(errorHandler);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${PORT}`);
});
