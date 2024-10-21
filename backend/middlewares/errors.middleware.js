const { CustomError } = require("../utils/customError");

const errorHandler = async (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            success: false,
            status: err.status,
            message: err.message,
            error: {
                name: err.name,
                message: err.message,
            },
        });
    }

    return res.status(500).json({
        success: false,
        status: "Error",
        message: "Internal server error",
        error: {
            name: err.name,
            message: err.message,
        },
    });
};

module.exports = { errorHandler };
