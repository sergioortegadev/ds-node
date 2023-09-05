const logsModel = require("../models/logs");
const logger = (req, res, next) => {
  logsModel.add(req);
  next();
};

module.exports = logger;
