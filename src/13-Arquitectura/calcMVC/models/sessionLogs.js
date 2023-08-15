let logs = localStorage.getItem("logs") ? JSON.parse(localStorage.getItem("logs")) : [];

export const addLog = (data) => {
  const time = new Date(Date.now());
  data.Time = time;
  logs.push(data);
  let dataString = JSON.stringify(logs);
  localStorage.setItem("logs", dataString);
};

export const sendLog = () => {
  return logs;
};
