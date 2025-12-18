

// Function to mask email
function maskEmail(email) {
  // Find the position of '@'
  const atIndex = email.indexOf('@');
  
  // Get username (part before @) and domain (part after @)
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex); // includes '@'
  
  // Mask the username (keep first and last character)
  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedUsername = firstChar + '*'.repeat(username.length - 2) + lastChar;
  
  // Combine masked username with domain
  return maskedUsername + domain;
}

// Declare email variable
const email = "apple.pie@example.com";

// Call function and output result
console.log(maskEmail(email));  // "a*******e@example.com"