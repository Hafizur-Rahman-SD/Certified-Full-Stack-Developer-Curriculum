// Function to check leap year
function isLeapYear(year) {
  // Leap year logic
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// Declare year variable
const year = 2024;

// Call function and store result
const result = isLeapYear(year);

// Output result to console
console.log(result);