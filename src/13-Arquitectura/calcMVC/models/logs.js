import { readFileSync, writeFileSync } from "fs";
let logs = [];

try {
  const raw = readFileSync("logs.txt", "utf8");
  logs = Array.isArray(JSON.parse(raw)) ? JSON.parse(raw) : [];
} catch (error) {
  console.error(error);
}

export const addLog = (data) => {
  logs.push(data);
  writeFileSync("logs.txt", JSON.stringify(data));
};

export const sendLog = () => {
  return logs;
};

console.log(sendLog());
