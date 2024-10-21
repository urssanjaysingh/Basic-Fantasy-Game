const Router = require("express");
const {
    getAllPlayers,
    addPlayer,
} = require("../controllers/players.controller");

const router = Router();

router.get("/players", getAllPlayers);
router.post("/players", addPlayer);

module.exports = router;
