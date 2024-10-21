const { Schema, model } = require("mongoose");

const teamSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        players: [
            {
                type: Schema.Types.ObjectId,
                ref: "Player",
            },
        ],
    },
    { timestamps: true }
);

module.exports = model("Team", teamSchema);
