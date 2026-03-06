


const poll = new Map();

function addOption(option){

  if(!option){
    return "Option cannot be empty.";
  }

  if(poll.has(option)){
    return `Option "${option}" already exists.`;
  }

  poll.set(option,new Set());

  return `Option "${option}" added to the poll.`;
}

function vote(option,voterId){

  if(!poll.has(option)){
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);

  if(voters.has(voterId)){
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);

  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults(){

  let result = "Poll Results:\n";

  for(let [option,voters] of poll){
    result += `${option}: ${voters.size} votes\n`;
  }

  return result.trim();
}


/* UI Functions */

function addOptionUI(){

  const option = document.getElementById("optionInput").value;

  const message = addOption(option);

  document.getElementById("optionMessage").innerText = message;
}

function voteUI(){

  const option = document.getElementById("voteOption").value;
  const voterId = document.getElementById("voterId").value;

  const message = vote(option,voterId);

  document.getElementById("voteMessage").innerText = message;
}

function showResults(){

  const results = displayResults();

  document.getElementById("results").innerText = results;
}


/* default options */

addOption("Turkey");
addOption("Morocco");
addOption("Spain");