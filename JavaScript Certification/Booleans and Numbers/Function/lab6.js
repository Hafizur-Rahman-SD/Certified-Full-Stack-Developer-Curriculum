// Complete solution
function truncateString(str, num) {
  // Check if string length is greater than given number
  if (str.length > num) {
    // Truncate string to 'num' characters and add "..."
    return str.slice(0, num) + "...";
  } else {
    // Return original string if length is less than or equal to num
    return str;
  }
}

// Test the function
console.log(truncateString("Hello World", 5));    // "Hello..."
console.log(truncateString("Hi there", 8));       // "Hi there"
console.log(truncateString("JavaScript", 4));     // "Java..."
console.log(truncateString("Coding", 6));         // "Coding"
console.log(truncateString("A", 1));              // "A"
console.log(truncateString("", 5));               // ""