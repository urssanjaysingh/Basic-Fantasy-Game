const express = require("express");
const { connectDB } = require("./config/db");
const { PORT } = require("./config");
const { errorHandler } = require("./middlewares/errors.middleware");
const playerRoutes = require("./routers/players.router");
const teamRoutes = require("./routers/teams.router");
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use(playerRoutes);
app.use(teamRoutes);

app.use(errorHandler);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${PORT}`);
});
