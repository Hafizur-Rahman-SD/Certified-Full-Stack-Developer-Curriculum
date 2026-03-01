

// function titleCase(str) {
//   str = str.toLowerCase();

//   let words = str.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     words[i] =
//       words[i].charAt(0).toUpperCase() +
//       words[i].slice(1);
//   }

//   return words.join(" ");
// }



function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}