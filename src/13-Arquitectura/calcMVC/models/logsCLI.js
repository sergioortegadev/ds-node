import "dotenv/config";
import { readFileSync, writeFileSync } from "fs";
let logs = [];

try {
  const raw = readFileSync(process.env.LOGS_LECTURA, "utf8");

  logs = Array.isArray(JSON.parse(raw)) ? JSON.parse(raw) : [];
} catch (error) {
  throw new Error("▒ en la lectura de los registros ▒");
}

export const addLog = (data) => {
  const { Op, Resultado } = data;

  const time = Date.now();

  logs.push({
    TS: time,
    Op: Op,
    Resultado: Resultado,
  });

  writeFileSync(process.env.LOGS_ESCRITURA, JSON.stringify(logs));
};

export const sendLog = () => {
  return logs;
};
