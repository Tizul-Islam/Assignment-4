function calculateMoney(ticketSale) {
  if (isNaN(ticketSale) || ticketSale < 0) {
    return "error";
  }

  let ticketPrice = 120;
  let securityGard = 500;

  let staffSalary = 8 * 50;

  let totalPrice = ticketPrice * ticketSale;

  const backBalance = totalPrice - securityGard - staffSalary;

  return backBalance;
}

console.log(calculateMoney(10));
