// Global count variable
let count = 0;

// Card counting function
function cardCounter(card) {
  // Increase count for low cards (2-6)
  if (card >= 2 && card <= 6) {
    count += 1;
  }
  // Decrease count for high cards (10, J, Q, K, A)
  else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count -= 1;
  }
  // Cards 7, 8, 9: count remains unchanged
  
  // Return decision based on count
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}