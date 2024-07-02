const displayTime = document.getElementById("intro");
const now = new Date().toISOString().slice(11, 19);

displayTime.textContent = now;

const forDay = document.getElementById("day");
const day = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = days[day.getUTCDay()];
forDay.textContent = dayOfWeek