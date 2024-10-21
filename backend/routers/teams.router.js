const Router = require("express");
const { createTeam, getTeamById } = require("../controllers/teams.controller");

const router = Router();

router.post("/teams", createTeam);
router.get("/teams/:id", getTeamById);

module.exports = router;
