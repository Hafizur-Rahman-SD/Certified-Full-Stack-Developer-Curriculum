function confirmEnding(str, target) {
  // Get the last part of str with same length as target
  const endOfStr = str.slice(-target.length);
  
  // Compare if they are equal
  return endOfStr === target;
}