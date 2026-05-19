
// toNumber("9,000")   → 9000
// toNumber("₱1,299")  → 1299
export const toNumber = (value) => 
  parseFloat(String(value).replace(/[^0-9.]/g, ''));

