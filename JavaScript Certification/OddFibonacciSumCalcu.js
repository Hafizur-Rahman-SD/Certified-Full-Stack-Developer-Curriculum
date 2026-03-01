function sumFibs(num) {
  let a = 0, b = 1;
  let sum = 0;

  while (b <= num) {
    if (b % 2 !== 0) sum += b;
    let next = a + b;
    a = b;
    b = next;
  }

  return sum;
}