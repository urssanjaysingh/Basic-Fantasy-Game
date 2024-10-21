const PLAYER_SCHEMA = require("../models/players.model");
const asyncHandler = require("express-async-handler");
const { CustomError } = require("../utils/customError");

exports.addPlayer = asyncHandler(async (req, res, next) => {
    try {
        const { name, points, position } = req.body;

        if (!name || !points || !position) {
            throw new CustomError(
                "Name, points, and position are required",
                400
            );
        }

        const newPlayer = await PLAYER_SCHEMA.create({
            name,
            points,
            position,
        });

        res.status(200).json({
            success: true,
            message: "New player created successfully",
            data: newPlayer,
        });
    } catch (error) {
        next(error);
    }
});

exports.getAllPlayers = asyncHandler(async (req, res, next) => {
    try {
        let allPlayers = await PLAYER_SCHEMA.find({});
        if (allPlayers.length === 0) {
            return next(new CustomError("No player found", 404));
        }

        res.status(200).json({
            success: true,
            message: "All players fetched successfully",
            data: allPlayers,
        });
    } catch (error) {
        next(error);
    }
});
