function pyramid(char, rows, inverted) {
  let result = "\n";

  if (!inverted) {
    // vertex facing up
    for (let i = 1; i <= rows; i++) {
      const spaces = " ".repeat(rows - i);
      const blocks = char.repeat(2 * i - 1);
      result += spaces + blocks + "\n";
    }
  } else {
    // vertex facing down
    for (let i = rows; i >= 1; i--) {
      const spaces = " ".repeat(rows - i);
      const blocks = char.repeat(2 * i - 1);
      result += spaces + blocks + "\n";
    }
  }

  return result;
}