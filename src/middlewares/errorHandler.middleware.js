// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === "SequelizeValidationError") {
    // Handle Sequelize validation errors
    const firstError = err.errors[0].message;
    return res.status(422).json({ message: `Validation Error: ${firstError}` });
  }

  if (err.name === "SequelizeUniqueConstraintError") {
    // Handle Sequelize unique constraint errors
    const field = err.errors[0].path;
    return res.status(422).json({
      message: `Duplicate entry for ${field}. Please use a different value.`,
    });
  }

  // Default error handling
  res.status(err.status || 500).json({
    message: err.message || "An unexpected error occurred.",
    status_code: err.status || 500,
  });
};

module.exports = errorHandler;
