const { connect } = require("mongoose");
const { MONGODB_URL } = require(".");

const connectDB = async () => {
    try {
        await connect(MONGODB_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { connectDB };
