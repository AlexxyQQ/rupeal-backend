const successResponse = (res, data, message) => {
  return res.status(200).json({ data: data , message: message});
};

module.exports = {
  successResponse,
};
