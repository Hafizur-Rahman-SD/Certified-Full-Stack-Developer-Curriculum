// Create a function named mutation
function mutation(arr) {
  // Convert both strings to lowercase to ignore case sensitivity
  let firstStr = arr[0].toLowerCase();
  let secondStr = arr[1].toLowerCase();

  // Loop through each character of the second string
  for (let i = 0; i < secondStr.length; i++) {
    // Check if the current character exists in the first string
    if (!firstStr.includes(secondStr[i])) {
      // If any character is missing, return false
      return false;
    }
  }

  // If all characters are found, return true
  return true;
}
// Test cases
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["hafizur", "Rahman"]));
