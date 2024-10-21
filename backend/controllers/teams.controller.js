const TEAM_SCHEMA = require("../models/teams.model");
const PLAYER_SCHEMA = require("../models/players.model");
const asyncHandler = require("express-async-handler");
const { CustomError } = require("../utils/customError");

exports.createTeam = asyncHandler(async (req, res, next) => {
    try {
        const { name, players } = req.body;

        if (!name) {
            throw new CustomError("Team name is required", 400);
        }

        if (!Array.isArray(players) || players.length === 0) {
            throw new CustomError(
                "Players must be an array and cannot be empty",
                400
            );
        }

        if (players.length > 11) {
            throw new CustomError("A team can have at most 11 players", 400);
        }

        const existingPlayers = await PLAYER_SCHEMA.find({
            _id: { $in: players },
        });
        if (existingPlayers.length !== players.length) {
            throw new CustomError("One or more player IDs are invalid", 400);
        }

        const newTeam = await TEAM_SCHEMA.create({
            name,
            players,
        });

        res.status(201).json({
            success: true,
            message: "New team created successfully",
            data: newTeam,
        });
    } catch (error) {
        next(error);
    }
});

exports.getTeamById = asyncHandler(async (req, res, next) => {
    try {
        const { id } = req.params;

        const team = await TEAM_SCHEMA.findById(id).populate("players");

        if (!team) {
            throw new CustomError("Team not found", 404);
        }

        res.status(200).json({
            success: true,
            message: "Team retrieved successfully",
            data: team,
        });
    } catch (error) {
        next(error);
    }
});
