function findLongestWordLength(str) {
  let words = str.split(" ");
  let longestLength = 0;

  for (let word of words) {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }

  return longestLength;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWordLength("May the force be with you"));