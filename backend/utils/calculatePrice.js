const calculatePrice = (pricePerHour, startTime, endTime) => {
  const start = new Date(`1970-01-01T${startTime}`);
  const end = new Date(`1970-01-01T${endTime}`);
  const hours = (end - start) / (1000 * 60 * 60);

  if (hours <= 0) return 0;

  return hours * Number(pricePerHour);
};

module.exports = calculatePrice;
