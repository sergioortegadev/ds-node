const mongoose = require("../config/mongo");

const logsSchema = new mongoose.Schema(
  {
    url: String,
    method: String,
    body: {},
    headers: {},
  },
  { timestamps: true }
);

const Logs = mongoose.model("Logs", logsSchema);

async function add(data) {
  try {
    const newLog = new Logs({ url: data.url, method: data.method, body: data.body, headers: data.headers });
    newLog.save();
    return newLog;
  } catch (error) {
    console.error(error);
  }
}

async function all() {
  return await logs.count();
}

module.exports = { add, all };
