export function getCurrentTime() {
  const currentTime = new Date().getTime();

  return currentTime;
}

export function convertTime(timestamp: number) {
  const currentTime = new Date(timestamp);

  const hours = currentTime.getHours();
  const hoursFomtatted = hours < 10 ? "0" + hours : hours;

  const minutes = currentTime.getMinutes();
  const minutesFomtatted = minutes < 10 ? "0" + minutes : minutes;

  const currentTimeFormatted = `${hoursFomtatted}:${minutesFomtatted}`;

  return currentTimeFormatted;
}
