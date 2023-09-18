import logsModel from "../models/logs.js";
const logger = (req, res, next) => {
  logsModel.add(req);
  next();
};

export default logger;
