//Implement the Chunky Monkey Algorithm


// Function to split an array into groups of a given size
function chunkArrayInGroups(arr, size) {
  // This array will store all the smaller arrays (chunks)
  let result = [];

  // Loop through the array, increasing by 'size' each time
  for (let i = 0; i < arr.length; i += size) {
    // Create a chunk from index i to i + size
    let chunk = arr.slice(i, i + size);

    // Push the chunk into the result array
    result.push(chunk);
  }

  // Return the final 2D array
  return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
// Output: [["a", "b"], ["c", "d"]]

chunkArrayInGroups([0,1,2,3,4,5,6], 3);
// Output: [[0,1,2], [3,4,5], [6]]
chunkArrayInGroups([0,1,2,3,4,5,6,7,8], 4);