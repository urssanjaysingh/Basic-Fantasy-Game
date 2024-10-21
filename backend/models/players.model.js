const { Schema, model } = require("mongoose");

const playerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        points: {
            type: Number,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = model("Player", playerSchema);
