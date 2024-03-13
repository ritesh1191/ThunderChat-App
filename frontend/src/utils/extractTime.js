export function extractTime(dateString) {
  const date = new Date(dateString);
  const Year = date.getFullYear();
  const month = padZero(date.getMonth());
  const day = padZero(date.getDate());
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${day}/${month}/${Year} , ${hours}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}
